"use client";
import { memo } from "react";
import TraderInput from "@/components/TraderInput/TraderInput";
import { Button } from "flowbite-react";
import { usePathname } from "next/navigation";

type FormManagerAccountProps = {
  onAccountInfor: any;
};
const FormManagerAccount = ({ onAccountInfor }: FormManagerAccountProps) => {
  const pathname = usePathname();
  const regexUrlCreate= /^\/boss\/account_manager(?:\/(create))?$/;
  const isFormCreate = regexUrlCreate.test(pathname);

  return (
    <section className="grid grid-cols-1 gap-5">
      <div className="p-6 rounded-[15px] bg-white flex flex-col gap-3">
        <h2 className="text-lg text-cblue-600 font-bold">
          Thông tin tài khoản
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="flex flex-col gap-2">
            <h3 className="text-sm text-cblue-600 font-semibold">
              Họ tên tài khoản
            </h3>
            <div className="w-full">
              <TraderInput
                placeholder="Phạm Thị Thảo"
                icon="account"
                isBig
                value={""}
                onInfor={(result: string) => {
                  onAccountInfor("name", result);
                }}
              ></TraderInput>
            </div>
            <span className="text-[11px] text-cgray-400 font-normal">
              Họ và tên đầy đủ
            </span>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-sm text-cblue-600 font-semibold">
              Số điện thoại
            </h3>
            <div className="w-full">
              <TraderInput
                placeholder="0123456789"
                icon="smartphone"
                isBig
                value={""}
                onInfor={(result: string) => {
                  onAccountInfor("phone", result);
                }}
              ></TraderInput>
            </div>
            <span className="text-[11px] text-cgray-400 font-normal">
              Số điện thoại
            </span>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="flex flex-col gap-2">
            <h3 className="text-sm text-cblue-600 font-semibold">Giới tính</h3>
            <div className="w-full">
              <TraderInput
                placeholder="Nữ"
                icon="gender"
                isBig
                value={""}
                onInfor={(result: string) => {
                  onAccountInfor("gender", result);
                }}
              ></TraderInput>
            </div>
            <span className="text-[11px] text-cgray-400 font-normal">
              Giới tính
            </span>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-sm text-cblue-600 font-semibold">Ngày sinh</h3>
            <div className="w-full">
              <TraderInput
                placeholder="11/12/1999"
                icon="birthday"
                isBig
                value={""}
                onInfor={(result: string) => {
                  onAccountInfor("birthday", result);
                }}
              ></TraderInput>
            </div>
            <span className="text-[11px] text-cgray-400 font-normal">
              Ngày sinh{" "}
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="text-sm text-cblue-600 font-semibold">Bưu cục</h3>
          <div className="w-full">
            <TraderInput
              placeholder="Thanh Vân, Thanh Lâm, Mê Linh, Hà Nội"
              icon="post_offices"
              isBig
              onInfor={(result: string) => {
                onAccountInfor("address", result);
              }}
              value={""}
            ></TraderInput>
          </div>
          <span className="text-[11px] text-cgray-400 font-normal">
            Địa chỉ của khách gửi
          </span>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="flex flex-col gap-2">
            <h3 className="text-sm text-cblue-600 font-semibold">Username</h3>
            <div className="w-full">
              <TraderInput
                placeholder="Username"
                icon="username"
                isBig
                value={""}
                onInfor={(result: string) => {
                  onAccountInfor("username", result);
                }}
              ></TraderInput>
            </div>
            <span className="text-[11px] text-cgray-400 font-normal">
              Username
            </span>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-sm text-cblue-600 font-semibold">Password</h3>
            <div className="w-full">
              <TraderInput
                placeholder="*****"
                icon="password"
                isBig
                value={""}
                onInfor={(result: string) => {
                  onAccountInfor("password", result);
                }}
              ></TraderInput>
            </div>
            <span className="text-[11px] text-cgray-400 font-normal">
              Password{" "}
            </span>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="flex flex-col gap-2">
            <h3 className="text-sm text-cblue-600 font-semibold">Email</h3>
            <div className="w-full">
              <TraderInput
                placeholder="Email@gmail.com"
                icon="email"
                isBig
                value={""}
                onInfor={(result: string) => {
                  onAccountInfor("email", result);
                }}
              ></TraderInput>
            </div>
            <span className="text-[11px] text-cgray-400 font-normal">
              Email
            </span>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-sm text-cblue-600 font-semibold">Vai trò</h3>
            <div className="w-full">
              <TraderInput
                placeholder="vai trò"
                icon="role"
                isBig
                value={""}
                onInfor={(result: string) => {
                  onAccountInfor("role", result);
                }}
              ></TraderInput>
            </div>
            <span className="text-[11px] text-cgray-400 font-normal">
              Vai trò{" "}
            </span>
          </div>
        </div>
      </div>
      <Button>{isFormCreate ? "Tạo mới" : "Cập nhật"}</Button>
    </section>
  );
};
export default memo(FormManagerAccount);
