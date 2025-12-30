import DashboardLayout from "../layouts/DashboardLayout";
import { ArrowUpRight, ArrowDownRight , ChartNoAxesCombined, Package , Ban, Users} from "lucide-react";
 import RevenueOverviewChart from "../components/dashboardComp/RevenueOverviewChart";
import CurrentStockOverview from "../components/dashboardComp/CurrentStockOverview";
 import BusyPeriodsHeatMap from "../components/dashboardComp/BusyPeriodsHeatMap";
 import OrderStatusChart from "../components/dashboardComp/OrderStatusChart";


const stats = [
  {
    title: "Net Revenue",
    value: "Rs.35,000",
    trend: "+2.08%",
    positive: true,
    iconBg: "bg-blue-500",
    icon: ChartNoAxesCombined,
    
  },
  {
    title: "Total Sales (Units)",
    value: "20,000",
    trend: "-2.08%",
    positive: false,
    iconBg: "bg-green-500",
    icon: Package,
  },
  {
    title: "Order Cancelled",
    value: "5,000",
    trend: "-2.08%",
    positive: false,
    iconBg: "bg-red-500",
    icon: Ban,
  },
  {
    title: "Total Visitors",
    value: "15,000",
    trend: "-2.08%",
    positive: false,
    iconBg: "bg-yellow-400",
    icon: Users,
  },
];



const Dashboard = () => {
  return (
    <DashboardLayout>
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-xl font-semibold text-gray-800">
          Dashboard
        </h1>
        <p className="text-sm text-gray-500">
          Welcome back! Here’s your overview
        </p>
      </div>

      {/* Stat Cards */}
     <div className="grid grid-cols-1 lg:grid-cols-[55%_45%]  gap-6">

  {/* LEFT: Stats */}
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
    {stats.map((item, i) => (
      <div
        key={i}
        className="bg-white rounded-xl shadow-sm p-5 flex justify-between"
      >
        <div>
          <p className="text-sm font-medium text-gray-500">{item.title}</p>
          <p className="text-xl font-semibold mt-1">
            {item.value}
          </p>

          <div
            className={`flex items-center gap-1 text-xs mt-2 ${
              item.positive ? "text-green-600" : "text-red-500"
            }`}
          >
            {item.positive ? (
              <ArrowUpRight size={14} />
            ) : (
              <ArrowDownRight size={14} />
            )}
            {item.trend} vs last month
          </div>
        </div>

        <div
          className={`w-10 h-10 rounded-full flex items-center justify-center text-white ${item.iconBg}`}
        >
                    <item.icon className="w-5 h-5" />
          
        </div>
      </div>
    ))}
  </div>

  {/* RIGHT: Order Status  */}
 
   <OrderStatusChart/>

</div>


      {/* Middle Section */}
   <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] gap-6 mt-8">

  {/* LEFT: Busy Periods  */}
  <BusyPeriodsHeatMap/>


  {/* RIGHT: Revenue Overview  */}
   <RevenueOverviewChart/>

   </div>

     <CurrentStockOverview/>
     
    </DashboardLayout>
  );
};

export default Dashboard;
