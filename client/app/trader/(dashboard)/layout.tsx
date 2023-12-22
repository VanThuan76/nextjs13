import TraderHeader from "@/components/Trader/TraderHeader/TraderHeader";
import TraderSidebar from "@/components/Trader/TraderSidebar/TraderSidebar";

type TraderLayoutProps = {
  children: React.ReactNode;
};
const TraderLayout = ({ children }: TraderLayoutProps) => {
  return (
    <div className="relative top-0 left-0 h-screen w-full bg-indigo-50">
      {/* #f8f9fa */}
      <div className="w-full h-full xs:p-[32px] flex flex-row gap-6">
        <TraderSidebar></TraderSidebar>
        <div className="flex flex-col gap-8 flex-grow">
          <TraderHeader></TraderHeader>
          {children}
        </div>
      </div>
    </div>
  );
};
export default TraderLayout;