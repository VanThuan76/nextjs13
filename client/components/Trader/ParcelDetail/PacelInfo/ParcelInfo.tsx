import { memo } from "react";
import TraderInput from "@/components/TraderInput/TraderInput";
import { Infor } from "../ParcelDetail";

type ParcelInforProps = {
  senderInfor: Infor | null;
  receiverInfor: Infor | null;
  onSenderInfor: any;
  onReceiverInfor: any;
};
const ParcelInfor = ({
  senderInfor,
  receiverInfor,
  onSenderInfor,
  onReceiverInfor,
}: ParcelInforProps) => {
  console.log("basic rerender");
  return (
    <section className="grid grid-cols-1  md:grid-cols-2 gap-5">
      <div className="p-6 rounded-[15px] bg-white flex flex-col gap-3">
        <h2 className="text-lg text-cblue-600 font-bold">
          Thông tin người gửi
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="flex flex-col gap-2">
            <h3 className="text-sm text-cblue-600 font-semibold">
              Họ tên khách gửi
            </h3>
            <div className="w-full">
              <TraderInput
                placeholder="Phạm Thị Thảo"
                icon="account_circle"
                isBig
                value={senderInfor?.name}
                onInfor={(result: string) => {
                  onSenderInfor("name", result);
                }}
              ></TraderInput>
            </div>
            <span className="text-[11px] text-cgray-400 font-normal">
              Họ và tên đầy đủ của khách gửi
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
                value={senderInfor?.phone}
                onInfor={(result: string) => {
                  onSenderInfor("phone", result);
                }}
              ></TraderInput>
            </div>
            <span className="text-[11px] text-cgray-400 font-normal">
              Số điện thoại của khách gửi
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="text-sm text-cblue-600 font-semibold">Địa chỉ</h3>
          <div className="w-full">
            <TraderInput
              placeholder="Thanh Vân, Thanh Lâm, Mê Linh, Hà Nội"
              icon="pin_drop"
              isBig
              onInfor={(result: string) => {
                onSenderInfor("address", result);
              }}
              value={senderInfor?.address}
            ></TraderInput>
          </div>
          <span className="text-[11px] text-cgray-400 font-normal">
            Địa chỉ của khách gửi
          </span>
        </div>
      </div>
      <div className="p-6 rounded-[15px] bg-white flex flex-col gap-3">
        <h2 className="text-lg text-cblue-600 font-bold">
          Thông tin người nhận
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className=" flex-1 flex flex-col gap-2">
            <h3 className="text-sm text-cblue-600 font-semibold">
              Họ tên khách nhận
            </h3>
            <div className="w-full">
              <TraderInput
                placeholder="Đỗ Nam Trung"
                icon="account_circle"
                isBig
                onInfor={(result: string) => {
                  onReceiverInfor("name", result);
                }}
                value={receiverInfor?.name}
              ></TraderInput>
            </div>
            <span className="text-[11px] text-cgray-400 font-normal">
              Họ và tên đầy đủ của khách nhận
            </span>
          </div>
          <div className="flex-1 flex flex-col gap-2">
            <h3 className="text-sm text-cblue-600 font-semibold">
              Số điện thoại
            </h3>
            <div className="w-full">
              <TraderInput
                placeholder="0123456789"
                icon="smartphone"
                isBig
                value={receiverInfor?.phone}
                onInfor={(result: string) => {
                  onReceiverInfor("phone", result);
                }}
              ></TraderInput>
            </div>
            <span className="text-[11px] text-cgray-400 font-normal">
              Số điện thoại của khách nhận
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="text-sm text-cblue-600 font-semibold">Địa chỉ</h3>
          <div className="w-full">
            <TraderInput
              placeholder="Thanh Vân, Thanh Lâm, Mê Linh, Hà Nội"
              icon="pin_drop"
              isBig
              value={receiverInfor?.address}
              onInfor={(result: string) => {
                onReceiverInfor("address", result);
              }}
            ></TraderInput>
          </div>
          <span className="text-[11px] text-cgray-400 font-normal">
            Địa chỉ của khách nhận
          </span>
        </div>
      </div>
    </section>
  );
};

export default memo(ParcelInfor);