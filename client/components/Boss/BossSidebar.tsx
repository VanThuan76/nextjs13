"use client";
import Logo from "@/components/Logo";
import { useRouter, usePathname } from "next/navigation";

const BossSidebar = () => {
  const router = useRouter();
  const pathname = usePathname();
  return (
    <aside className="hidden xs:flex flex-col select-none flex-none">
      <div className="flex flex-row items-center gap-3 pb-[30px]">
        <Logo width="48" height="24" className={"text-cyellow-500"}></Logo>
        <strong className="hidden md:block text-base text-cblue-600 font-bold">
          Quản lý chuyển phát
        </strong>
      </div>
      <div className="w-full h-[1px] bg-gradient-to-r from-[#E0E1E200] via-[#E0E1E2] to-[#E0E1E228] mb-[30px]"></div>
      {/* Dashboard */}
      <div className="flex flex-col gap-2">
        <div
          className={`w-full p-[10px] rounded-lg shadow-sd2 cursor-pointer ${
            pathname === "/boss" ? "bg-white" : ""
          }`}
          onClick={() => router.push("/boss")}
        >
          <div className="w-full flex flex-row items-center justify-start gap-3">
            <div className="w-[30px] h-[30px] rounded-[10px] flex justify-center items-center">
              <span className="material-symbols-outlined text-white">
                <svg
                  className="w-6 h-6 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 16"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 1v14h16m0-9-3-2-3 5-3-2-3 4"
                  />
                </svg>
              </span>
            </div>
            <h2 className="hidden md:block text-sm font-bold">Thống kê</h2>
          </div>
        </div>
        <div
          className={`w-full p-[10px] bg-transparent rounded-lg shadow-none cursor-pointer ${
            pathname === "/boss/trader_transaction" ? "bg-white" : ""
          }`}
          onClick={() => router.push("/boss/trader_transaction")}
        >
          <div className="w-full flex flex-row items-center justify-start gap-3">
            <div className="w-[30px] h-[30px] rounded-[10px] bg-transparent  flex justify-center items-center">
              <span className="material-symbols-outlined text-cblue-600">
                <svg
                  className="w-6 h-6 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 12 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m7 9 4-4-4-4M1 9l4-4-4-4"
                  />
                </svg>
              </span>
            </div>
            <h2 className="hidden md:block text-sm font-medium">
              Các điểm giao dịch
            </h2>
          </div>
        </div>
        <div
          className={`w-full p-[10px] bg-transparent rounded-lg shadow-none cursor-pointer ${
            pathname === "/boss/trader_gathering" ? "bg-white" : ""
          }`}
          onClick={() => router.push("/boss/trader_gathering")}
        >
          <div className="w-full flex flex-row items-center justify-start gap-3">
            <div className="w-[30px] h-[30px] rounded-[10px] bg-transparent  flex justify-center items-center">
              <span className="material-symbols-outlined text-cblue-600">
                <svg
                  className="w-6 h-6 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 12"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 7 4 4 4-4M1 1l4 4 4-4"
                  />
                </svg>
              </span>
            </div>
            <h2 className="hidden md:block text-sm font-medium">
              Các điểm tập kết
            </h2>
          </div>
        </div>
        <div
          className={`w-full p-[10px] bg-transparent rounded-lg shadow-none cursor-pointer ${
            pathname === "/boss/account_manager" ? "bg-white" : ""
          }`}
          onClick={() => router.push("/boss/account_manager")}
        >
          <div className="w-full flex flex-row items-center justify-start gap-3">
            <div className="w-[30px] h-[30px] rounded-[10px] bg-transparent  flex justify-center items-center">
              <span className="material-symbols-outlined text-cblue-600">
                <svg
                  className="w-6 h-6 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 18"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 3a3 3 0 1 1-1.614 5.53M15 12a4 4 0 0 1 4 4v1h-3.348M10 4.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0ZM5 11h3a4 4 0 0 1 4 4v2H1v-2a4 4 0 0 1 4-4Z"
                  />
                </svg>
              </span>
            </div>
            <h2 className="hidden md:block text-sm font-medium">
              Tài khoản trưởng điểm
            </h2>
          </div>
        </div>
      </div>
    </aside>
  );
};
export default BossSidebar;
