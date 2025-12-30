import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Cell,
  LabelList,
} from "recharts";


const revenueData = [
  { month: "Jan", value: 56, dark: true },
  { month: "Feb", value: 64 },
  { month: "March", value: 76 },
  { month: "June", value: 78 },
  { month: "July", value: 70 },
  { month: "Aug", value: 37 },
];


const RevenueOverviewChart = () => {
  return (
   <div className="bg-white rounded-2xl shadow-sm p-6 md:mr-5">
   
         {/* Header */}
         <div className="flex justify-between items-center mb-4">
           <h2 className="text-sm font-semibold text-heading">
             Revenue Overview
           </h2>
           <span className="text-xs text-gray-400 cursor-pointer">
             view all
           </span>
         </div>
   
         {/* Chart */}
         <div className="h-96 w-[100%]">
           <ResponsiveContainer width="100%" height="100%">
             <BarChart
               data={revenueData}
               margin={{ top: 10, right: 0, left: -30, bottom: 0 }}
               barCategoryGap={24}
             >
               {/* Grid */}
               <CartesianGrid
                 strokeDasharray="3 3"
                 vertical={true}
                 stroke="#E5E7EB"
               />
   
               {/* Y Axis */}
               <YAxis
                 domain={[0, 100]}
                 tick={{ fontSize: 11, fill: "#6B7280" }}
                 axisLine={false}
                 tickLine={false}
               />
   
               {/* X Axis */}
               <XAxis
                 dataKey="month"
                 tick={{ fontSize: 11, fill: "#6B7280" }}
                 axisLine={false}
                 tickLine={false}
               />
   
               {/* Bars */}
               <Bar
                 dataKey="value"
                 radius={[1, 1, 0, 0]}
                 barSize={36}
               >
                 {revenueData.map((entry, index) => (
                   <Cell
                     key={index}
                     fill={entry.dark ? "#2F855A" : "#9AE6B4"}
                   />
                 ))}
   
                 {/* Value labels on top */}
                 <LabelList
                   dataKey="value"
                   position="top"
                   fill="#4B5563"
                   fontSize={11}
                 />
               </Bar>
             </BarChart>
           </ResponsiveContainer>
         </div>
   
         {/* Footer */}
         <p className="text-xs text-gray-400 mt-3 flex items-center gap-2">
           <span className="w-2 h-2 text-center bg-green-400 rounded-full" />
           Values in per 1000s.
         </p>
       </div>
  );
};

export default RevenueOverviewChart;