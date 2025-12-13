import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex bg-[#F6F9FF] ">
      <Sidebar />
      <div className="flex-1">
        <Header />
        <main className="p-6 pr-12">{children}</main>
      </div>
    </div>
  );
};

export default DashboardLayout;
