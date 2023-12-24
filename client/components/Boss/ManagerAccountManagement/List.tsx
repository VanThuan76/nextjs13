"use client";
import { useState, useEffect, useRef } from "react";
import TraderInput from "@/components/TraderInput/TraderInput";
import Link from "next/link";
import ManagerItem from "./ManagerItem";
import ManagerInfor from "./ManagerInfo";

const fakeData = [
  { code: "EA131513531VN" },
  { code: "EA131513532VN" },
  { code: "EA131513533VN" },
  { code: "EA131513534VN" },
  { code: "EA131513535VN" },
  { code: "EA131513536VN" },
  { code: "EA131513537VN" },
  { code: "EA131513538VN" },
  { code: "EA131513539VN" },
  { code: "EA131513530VN" },
];

const ListManagerAccount = () => {
  const [parcelActive, setParcelActive] = useState<string | null>(null);
  const [isModal, setIsModal] = useState<boolean | null>(null);
  const inforRef = useRef<HTMLDivElement>(null);
  const timeoutRef: { current: NodeJS.Timeout | null } = useRef(null);
  // select other parcel code
  const onChangeParcelActive = (parcelCode: string) => {
    setParcelActive(parcelCode);
    if (window.innerWidth < 1100) {
      inforRef.current?.classList.remove("trader-animation");
      setIsModal(true);
    }
  };

  // close infor in [responsive mode]
  const onCloseInfor = () => {
    inforRef.current?.classList.toggle("trader-hidden-animation");
    timeoutRef.current = setTimeout(() => {
      setIsModal(false);
      inforRef.current?.classList.toggle("trader-hidden-animation");
    }, 200);
  };

  // Wheather screen is long enough for infor
  useEffect(() => {
    if (parcelActive === null) {
      if (window.innerWidth >= 1100) {
        setParcelActive("EA131513531VN");
      } else {
        setParcelActive("EA134422333VN");
      }
    }
    return () => clearTimeout(timeoutRef.current as NodeJS.Timeout);
  }, []);

  return (
    <main className="flex-1 flex flex-row gap-6">
      <div className="h-full w-full trader:w-[65%] bg-white rounded-2xl p-6 shadow-sd2 flex flex-col">
        <section className="flex flex-row items-center justify-between sm:justify-start gap-3">
          <span className="hidden  sm:block sm:flex-1 md:line-clamp-1  text-lg text-cblue-600 font-bold">
            Danh sách tài khoản điểm trưởng
          </span>
          <div className="h-full w-[200px]">
            <TraderInput placeholder="EB12345" icon="search"></TraderInput>
          </div>
          <Link href={"/boss/account_manager/create"} scroll={false}>
            <button className="outline-none flex-none py-[5px] px-[10px] rounded-[8px] flex flex-row items-center bg-purple-600 hover:opacity-80 hover:cursor-pointer active:opacity-90">
              <span className="material-symbols-outlined"></span>
              <span className="text-[15px] font-normal">Tài khoản mới</span>
            </button>
          </Link>
        </section>
        <div className="flex flex-col w-full px-1">
          <section className="min-h-10 w-full mt-4  pb-6 flex flex-row items-center text-sm text-[#A0AEC0] font-bold select-none border-b border-b-[#E2E8F0]">
            <span className="w-1/2 sm:w-[40%] xl:w-[30%] ">Mã nhân viên</span>
            <span className="w-1/2 sm:w-[30%] xl:w-[25%] flex flex-row items-center justify-end sm:justify-center">
              Bưu cục
            </span>
            <span className="hidden sm:w-[30%] xl:w-[25%] sm:flex flex-row items-center justify-center">
              Họ và tên
            </span>
            <span className="w-1/2 sm:w-[30%] xl:w-[25%] flex flex-row items-center justify-end sm:justify-center">
              Trạng thái
            </span>
            <span className="w-1/2 sm:w-[30%] xl:w-[25%] flex flex-row items-center justify-end sm:justify-center">
              Hành động
            </span>
          </section>
          <div className="-ml-1 pl-1 -mr-7 px-7 max-h-[416px] overflow-y-auto overflow-x-hidden trader-item">
            <section className="w-full flex flex-col">
              {fakeData.map((parcel, index) => (
                <ManagerItem
                  key={index}
                  parcelActive={parcelActive || ""}
                  parcelCode={parcel.code}
                  onActive={onChangeParcelActive}
                ></ManagerItem>
              ))}
            </section>
          </div>
        </div>
        {/* separated page */}
        <section className="mt-4 pl-[10px] w-full flex flex-row items-center">
          <span className="parcel-bill__content text-cgray-500">
            Hiển thị 10 mục
          </span>
          <div className="ml-auto flex flex-row items-center border border-[#CCD7E2] rounded-lg">
            <button className="py-[5px] px-[10px] border-r border-r-[#CCD7E2] parcel-bill__content text-cgray-400 flex flex-row hover:opacity-70">
              Trước
            </button>
            <button className="py-[5px] px-[10px] border-r border-r-[#CCD7E2] parcel-bill__content text-cblue-300 bg-indigo-50 flex flex-row hover:opacity-70">
              1
            </button>
            <button className="py-[5px] px-[10px] border-r border-r-[#CCD7E2] parcel-bill__content text-cgray-400 flex flex-row hover:opacity-70">
              10
            </button>
            <button className="py-1 px-[10px] parcel-bill__content text-cgray-400 flex flex-row hover:opacity-70">
              Tiếp
            </button>
          </div>
        </section>
      </div>
      {isModal && (
        <div
          className="absolute top-0 bottom-0 left-0 right-0 bg-transparent flex flex-row pt-[240px] justify-center"
          onClick={onCloseInfor}
        >
          <div
            ref={inforRef}
            className="trader-infor trader-animation"
            onClick={(e) => e.stopPropagation()}
          >
            <ManagerInfor parcelCode={parcelActive || ""}></ManagerInfor>
          </div>
        </div>
      )}
      <div className="hidden trader:static trader:block trader:flex-1 trader:max-w-none trader:min-w-0 trader:transform-none flex-none">
        <ManagerInfor parcelCode={parcelActive || ""}></ManagerInfor>
      </div>
    </main>
  );
};

export default ListManagerAccount;
