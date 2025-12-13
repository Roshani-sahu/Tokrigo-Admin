import DashboardLayout from "../layouts/DashboardLayout";
import { ArrowUpRight, ArrowDownRight } from "lucide-react";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
} from "recharts";

const orderStatusData = [
  { name: "Out for Delivery", value: 8750, color: "#22c55e" },
  { name: "Completed", value: 4750, color: "#9333ea" },
  { name: "Pending", value: 5950, color: "#3b82f6" },
  { name: "Processing", value: 6750, color: "#f97316" },
];


const stats = [
  {
    title: "Net Revenue",
    value: "Rs.35,000",
    trend: "+2.08%",
    positive: true,
    iconBg: "bg-blue-500",
        icon: "/dashboard/icon1.png",

  },
  {
    title: "Total Sales (Units)",
    value: "20,000",
    trend: "-2.08%",
    positive: false,
    iconBg: "bg-green-500",
        icon: "/dashboard/icon2.png",

  },
  {
    title: "Order Cancelled",
    value: "5,000",
    trend: "-2.08%",
    positive: false,
    iconBg: "bg-red-500",
        icon: "/dashboard/icon2.png",

  },
  {
    title: "Total Visitors",
    value: "15,000",
    trend: "-2.08%",
    positive: false,
    iconBg: "bg-lime-400",
    icon: "/dashboard/icon4.png",
  },
];

const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

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
  <img
    src={item.icon}
    alt=""
    className="w-5 h-5 object-contain"
  />        </div>
      </div>
    ))}
  </div>

  {/* RIGHT: Order Status  */}
  <div className="bg-white rounded-xl shadow-sm p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="font-semibold text-heading text-xl">
          Order Status
        </h2>
        <select className="text-sm border  border-gray-200 rounded-md px-2 py-1">
          <option>Monthly</option>
        </select>
      </div>

      <div className="flex items-center gap-10">
        {/* Donut Chart */}
        <div className="w-72 h-40 relative">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={orderStatusData}
                dataKey="value"
                innerRadius={55}
                outerRadius={75}
                paddingAngle={2}
                stroke="none"
              >
                {orderStatusData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={entry.color}
                  />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>

          {/* Center Text */}
          <div className="absolute inset-0 flex flex-col items-center   justify-center">
            <div className="shadow-xl rounded-full p-4">
            <p className="text-xl font-semibold text-gray-800">
              35,000
            </p>
            <p className="text-xs text-gray-500">
              Total Orders
            </p>
            </div>
          </div>
        </div>

        {/* Legend */}
        <div className="space-y-3 bg-[#019D2B0D] p-4 rounded-xl text-sm w-full">
          {orderStatusData.map((item) => (
            <div
              key={item.name}
              className="flex justify-between items-center"
            >
              <span className="flex items-center gap-3">
                <span
                  className="w-2.5 h-2.5 rounded-full"
                  style={{ backgroundColor: item.color }}
                />
                {item.name}
              </span>
              <span className="font-medium">
                {item.value.toLocaleString()}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>


</div>


      {/* Middle Section */}
   <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] gap-6 mt-8">

  {/* LEFT: Busy Periods (55%) */}
  <div className="bg-white rounded-xl shadow-sm p-6">
    <div className="flex justify-between items-center mb-4">
      <h2 className="font-semibold text-[#585858]">
        Busy Periods
      </h2>
      <span className="text-sm text-gray-500">
        Less ▢▢▢▢▢ High
      </span>
    </div>

    <p className="text-sm text-gray-500 mb-4">
      Highest activity: <span className="font-medium">10AM–2PM</span>
      <span className="ml-2 text-green-600 font-medium">
        Avg daily shipment: 172 +3%
      </span>
    </p>

    <div className="space-y-3">
      {days.map((day) => (
        <div key={day} className="flex items-center gap-3">
          <span className="w-10 text-sm text-gray-500">
            {day}
          </span>

          <div className="flex gap-1">
            {Array.from({ length: 15 }).map((_, i) => (
              <div
                key={i}
                className={`w-4 h-4 rounded-sm ${
                  i % 5 === 0
                    ? "bg-green-500"
                    : "bg-green-200"
                }`}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>

  {/* RIGHT: Revenue Overview (45%) */}
  <div className="bg-white rounded-xl shadow-sm p-6">
    <div className="flex justify-between items-center mb-6">
      <h2 className="font-semibold text-[#585858]">
        Revenue Overview
      </h2>
      <span className="text-sm text-gray-500 cursor-pointer">
        view all
      </span>
    </div>

    <div className="flex items-end justify-between h-48">
      {[56, 64, 76, 78, 70, 37].map((val, i) => (
        <div key={i} className="flex flex-col items-center">
          <div
            className="w-8 rounded-md bg-green-500"
            style={{ height: `${val * 2}px` }}
          />
          <span className="text-xs text-gray-500 mt-2">
            {["Jan", "Feb", "Mar", "Jun", "Jul", "Aug"][i]}
          </span>
        </div>
      ))}
    </div>

    <p className="text-xs text-gray-500 mt-4">
      Values in per 1000s.
    </p>
  </div>

</div>


     
    </DashboardLayout>
  );
};

export default Dashboard;
