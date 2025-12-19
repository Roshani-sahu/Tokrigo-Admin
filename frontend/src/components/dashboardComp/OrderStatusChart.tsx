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

const OrderStatusChart = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6 md:mr-5">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="font-semibold text-heading text-xl">
          Order Status
        </h2>
        <select className="text-sm border  border-gray-200 rounded-md px-2 py-1">
          <option>Monthly</option>
        </select>
      </div>

      <div className="flex flex-col md:flex-row items-center gap-10">
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
            <div className=" rounded-full p-4">
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
  );
};

export default OrderStatusChart;