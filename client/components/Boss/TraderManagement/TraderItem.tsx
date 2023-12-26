"use client";
import Image from "next/image";
import coolGirl from "@/assets/images/cool-girl.jpg";
import { useRouter } from "next/navigation";
interface ITraderItem {
  parcelActive: string;
  parcelCode: string;
  onActive?: any;
}
const TraderItem = ({ parcelActive, parcelCode, onActive }: ITraderItem) => {
  const router = useRouter();
  return (
    <div
      className={
        `flex flex-row w-full pb-[10px] pt-[18px] border-b border-b-[#E2E8F0] hover:cursor-pointer hover:bg-cyellow-100` +
        `${parcelActive === parcelCode ? " bg-cyellow-100" : " bg-transparent"}`
      }
      onClick={() => onActive(parcelCode)}
    >
      <div className="w-1/2 sm:w-2/5 xl:w-[30%] flex flex-row gap-[10px] items-center">
        <div className="flex flex-col items-start">
          <span className="text-sm text-cblue-600 font-bold">{parcelCode}</span>
        </div>
      </div>
      <div className="hidden sm:w-[30%] xl:w-1/2 sm:flex flex-row items-center justify-center">
        <span className="text-sm text-cgray-500">Bưu cục trung ương Hà Nội</span>
      </div>
      <div className="hidden sm:w-[30%] xl:w-1/4 sm:flex flex-row items-center justify-center">
        <span className="text-sm text-cgray-500">Thanh xuân, Hà Nội</span>
      </div>
      <div className="w-1/2 sm:w-[30%] xl:w-1/4 flex flex-row items-center justify-end sm:justify-center flex-none">
        <button className="outline-none h-[26px] px-[10px] py-1 flex flex-row items-center bg-cgreen-600 rounded-full text-sm font-bold text-white hover:cursor-default">
          Điểm tập kết
        </button>
      </div>
      <div className="sm:w-[10%] xl:w-[15%] flex flex-row items-center justify-end sm:justify-center flex-none" onClick={() => router.push("/boss/account_manager/edit/1")}>
        <svg
          className="w-6 h-6 text-gray-800 dark:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 18"
        >
          <path d="M12.687 14.408a3.01 3.01 0 0 1-1.533.821l-3.566.713a3 3 0 0 1-3.53-3.53l.713-3.566a3.01 3.01 0 0 1 .821-1.533L10.905 2H2.167A2.169 2.169 0 0 0 0 4.167v11.666A2.169 2.169 0 0 0 2.167 18h11.666A2.169 2.169 0 0 0 16 15.833V11.1l-3.313 3.308Zm5.53-9.065.546-.546a2.518 2.518 0 0 0 0-3.56 2.576 2.576 0 0 0-3.559 0l-.547.547 3.56 3.56Z" />
          <path d="M13.243 3.2 7.359 9.081a.5.5 0 0 0-.136.256L6.51 12.9a.5.5 0 0 0 .59.59l3.566-.713a.5.5 0 0 0 .255-.136L16.8 6.757 13.243 3.2Z" />
        </svg>
      </div>
    </div>
  );
};

export default TraderItem;
