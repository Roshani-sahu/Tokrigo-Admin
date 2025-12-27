import { Box, Plus } from "lucide-react";

const WarehouseManagement = () => {
  const stats = [
    { title: "Total Warehouse under Tokrigo", value: "4" },
    { title: "Full Active Warehouse", value: "3" },
    { title: "Inactive or warehouse under maintainance", value: "1" },
    { title: "Total Stock Value", value: "Rs.4.23L" },
    { title: "Net Capacity Used (%)", value: "60%" },
  ];

  return (
    <div>
      {/* HEADER */}
      <div className="flex justify-between items-center mb-5">
        <div>
          <h2 className="text-lg font-semibold text-gray-800">
            Warehouse Management
          </h2>
          <p className="text-sm text-gray-500">
            Monitor and manage your stock levels
          </p>
        </div>

        <button className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium">
          <Plus size={14} className="border border-white rounded-full p-[1px]" />
          Add Warehouse
        </button>
      </div>

      {/* STAT CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {stats.map((s, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl p-5 shadow-sm flex flex-col justify-between h-[120px]"
          >
            {/* TITLE */}
            <p className="text-sm text-gray-500 mb-4 leading-tight">
              {s.title}
            </p>

            {/* BOTTOM ROW */}
            <div className="flex items-center justify-between">
              {/* ICON */}
              <div className="w-9 h-9 bg-blue-100 rounded-lg flex items-center justify-center">
                <Box size={18} className="text-blue-600" />
              </div>

              {/* VALUE */}
              <p className="text-lg font-semibold text-gray-800">
                {s.value}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WarehouseManagement;
