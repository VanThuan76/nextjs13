"use client";

import { FormEvent, useState } from "react";
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
import Link from "next/link";


import axios from "@/utils/axios";
import AuthButton from "@/components/Authentication/AuthButton";
import AuthInput from "@/components/Authentication/AuthInput";
import AuthSwitch from "@/components/Authentication/AuthSwitch";
import { InputStatus } from "@/components/Authentication/AuthInput/AuthInput";

interface ResponseData {
  name: string;
  message: string;
}

const Login = () => {
  const router = useRouter()
  const [isLoading, setLoading] = useState(false);
  const [status, setStatus] = useState<InputStatus>("normal")
  const [errorText, setErrorText] = useState<ResponseData>();

  async function submitHander(event: FormEvent) {
    event.preventDefault();
    setLoading(true);

    try {
      const formData = new FormData(event.target as HTMLFormElement);
      const body = Object.fromEntries(formData.entries());
      body.remember = !!body.remember as unknown as FormDataEntryValue;

      const res = await axios.post("/auth/login", body);

      console.log(body, res.data);
      if (res.status !== 200) {
        setStatus("failure");
        setErrorText(res.data);
        toast.error("Đăng nhập thất bại");
      } else {
        toast.success("Đăng nhập thành công");
        router.push('/')
      }
    } catch (error) {
      console.log(error);
      toast.error("Lỗi server!")
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <div className="flex flex-col mb-[30px]">
        <span className="text-2xl text-[#FFCC33] font-bold pb-[2px]">
          Chào mừng trở lại
        </span>
      </div>

      <form onSubmit={submitHander}>
        <div className="flex flex-col gap-4">
          <AuthInput
            name="username"
            status={status}
            title="Tên đăng nhập"
            placeholder="username"
            error_text={errorText}
          />

          <AuthInput
            name="password"
            status={status}
            type="password"
            title="Mật khẩu"
            placeholder="password"
            error_text={errorText}
          />
        </div>


        <div className={`flex flex-row items-center select-none mt-3 mb-7`}>
          <AuthSwitch name="remember" />

          <Link
            href="/reset"
            className="font-semibold text-[12px] text-cyellow-600 ml-auto cursor-pointer py-1 hover:opacity-70 truncate">
            Quên mật khẩu
          </Link>
        </div>

        <AuthButton
          title="Đăng nhập"
          isLoading={isLoading}
          type="submit"
        />
      </form>
    </>
  );
};
export default Login;
