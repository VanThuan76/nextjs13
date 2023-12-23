import BossHeader from "@/components/Boss/BossHeader";
import BossSidebar from "@/components/Boss/BossSidebar";

type BossLayoutProps = {
  children: React.ReactNode;
};
const BossLayout = ({ children }: BossLayoutProps) => {
  return (
    <div className="relative top-0 left-0 h-screen w-full bg-indigo-50">
      {/* #f8f9fa */}
      <div className="w-full h-full xs:p-[32px] flex flex-row gap-6">
        <BossSidebar></BossSidebar>
        <div className="flex flex-col gap-8 flex-grow">
          <BossHeader></BossHeader>
          {children}
        </div>
      </div>
    </div>
  );
};
export default BossLayout;
