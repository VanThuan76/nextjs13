'use client'
import FormManagerAccount from "@/components/Boss/ManagerAccountManagement/Form";
import { useCallback, useState } from "react";
export interface Infor {
  name: string;
  phone: string;
  address: string;
}
const emptyInfor: Infor = { name: "", phone: "", address: "" };
const CreateAccountManager = () => {
  const [senderInfor, setSenderInfor] = useState<Infor>(emptyInfor);
  const onAccountInfor = useCallback(
    (type: string, result: string) => {
      switch (type) {
        case "name":
          setSenderInfor({ ...senderInfor, name: result });
          break;
        case "phone":
          setSenderInfor({ ...senderInfor, phone: result });
          break;
        case "address":
          setSenderInfor({ ...senderInfor, address: result });
          break;
      }
    },
    [senderInfor]
  );

  return (
    <FormManagerAccount
      onAccountInfor={onAccountInfor}
    ></FormManagerAccount>
  );
};

export default CreateAccountManager;
