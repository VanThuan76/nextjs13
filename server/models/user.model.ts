import mongoose, { Document, Model, Schema } from "mongoose";
import bcrypt from "bcryptjs";
import jwt from 'jsonwebtoken';

require("dotenv").config();

const emailRegexPattern: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export interface IUser extends Document {
    id: string;
    username: string;
    name: string;
    email: string;
    password: string;
    avatar: {
        public_id: string;
        url: string;
    },
    role: string;
    comparePassword: (password: string) => Promise<boolean>;
    SignAccessToken: () => string;
    SignRefreshToken: () => string;
};

const userSchema: Schema<IUser> = new mongoose.Schema({
    id: {
        type: String,
        required: [true, "Hãy nhập mã người dùng của bạn"],
    },
    username: {
        type: String,
        required: [true, "Hãy nhập tên người dùng của bạn"],
    },
    name: {
        type: String,
        required: [true, "Hãy nhập tên của bạn"],
    },
    email: {
        type: String,
        required: [true, "Hãy nhập email của bạn"],
        validate: {
            validator: function (value: string) {
                return emailRegexPattern.test(value);
            },
            message: "Hãy nhập một email hợp lệ",
        },
        unique: true,
    },
    password: {
        type: String,
        // required: [true, "Hãy nhập mật khẩu của bạn"],
        minlength: [6, "Mật khẩu phải có ít nhất 6 kí tự"],
        select: false,
    },
    avatar: {
        puclic_id: String,
        url: String,
    },
    role: {
        type: String,
        default: "user",
    }
}, { timestamps: true });

// Hash Password before saving
userSchema.pre<IUser>('save', async function (next) {
    if (!this.isModified('password')) {
        next();
    }
    this.password = await bcrypt.hash(this.password, 10);
    next();
});

// Sign access token
userSchema.methods.SignAccessToken = function () {
    return jwt.sign({id: this._id}, process.env.ACCESS_TOKEN || '', {
        expiresIn: "5m",
    });
};

// Sign refresh token
userSchema.methods.SignRefreshToken = function () {
    return jwt.sign({id: this._id}, process.env.REFRESH_TOKEN || '', {
        expiresIn: "3d",
    });
};

// Compare password
userSchema.methods.comparePassword = async function (enteredPassword: string): Promise<boolean> {
    return await bcrypt.compare(enteredPassword, this.password);
};

const userModel: Model<IUser> = mongoose.model("User", userSchema);

export default userModel;