import React from "react";

type Props = {
  isAccepted?: boolean;
  isDelivering?: boolean;
  isReceived?: boolean;
};

const TraderStatus = ({
  isAccepted = false,
  isDelivering = false,
  isReceived = false,
}: Props) => {
  return (
    <button
      className={
        `outline-none h-[26px] px-[10px] py-1 flex flex-row items-center flex-none ` +
        `${
          isAccepted
            ? "bg-blue-600"
            : isDelivering
            ? "bg-cyellow-500"
            : "bg-red-300"
        } rounded-full text-sm font-bold text-white hover:cursor-default`
      }
    >
      {isAccepted
        ? "Chấp nhận gửi"
        : isDelivering
        ? "Đang vận chuyển"
        : "Đã giao hàng"}
    </button>
  );
};

export default TraderStatus;