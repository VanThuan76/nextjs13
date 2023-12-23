import ManagerSidebar from "@/components/Manager/ManagerSidebar";
import ManagerHeader from "@/components/Manager/ManagerHeader";

type ManagerLayoutProps = {
  children: React.ReactNode;
};

const ManagerLayout = ({ children }: ManagerLayoutProps) => {
  return (
    <div className="relative top-0 left-0 h-screen w-full bg-indigo-50">
      {/* #f8f9fa */}
      <div className="w-full h-full xs:p-[32px] flex flex-row gap-6">
        <ManagerSidebar></ManagerSidebar>
        <div className="flex flex-col gap-8 flex-grow">
          <ManagerHeader></ManagerHeader>
          {children}
        </div>
      </div>
    </div>
  );
};

export default ManagerLayout;
