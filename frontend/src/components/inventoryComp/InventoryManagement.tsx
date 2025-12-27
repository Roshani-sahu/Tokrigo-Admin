import { Box, TrendingUp, TrendingDown, AlertTriangle } from "lucide-react";

const InventoryManagement = () => {
  const stats = [
    {
      title: "Total Products",
      value: "1,245",
      icon: <Box size={18} />,
      bg: "bg-blue-100",
      colour: "text-blue-600",
    },
    {
      title: "Low Stock Items",
      value: "120",
      icon: <AlertTriangle size={18} />,
      bg: "bg-orange-100",
      colour: "text-orange-600",
    },
    {
      title: "Out of Stock",
      value: "120",
      icon: <TrendingDown size={18} />,
      bg: "bg-red-100",
      colour: "text-red-600",
    },
    {
      title: "In Stock",
      value: "1,188",
      icon: <TrendingUp size={18} />,
      bg: "bg-green-100",
      colour: "text-green-600",
    },
    {
      title: "Expired Stock",
      value: "1,188",
      icon: <TrendingUp size={18} />,
      bg: "bg-green-100",
      colour: "text-green-600",
    },
  ];

  return (
    <div>
      <h1 className="text-xl font-semibold text-gray-800">
        Inventory Management
      </h1>
      <p className="text-sm text-gray-500 mb-4">
        Monitor and manage your stock levels
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-5 gap-4">
        {stats.map((s, i) => (
          <div
            key={i}
            className="relative group bg-white rounded-2xl p-5 shadow-sm cursor-pointer overflow-hidden"
          >
            <div className="flex justify-between items-start">
              <div >
                <p className="text-sm text-gray-500 mb-5 font-medium">{s.title}</p>
                <p className="text-lg font-semibold text-gray-800 mt-1">
                  {s.value}
                </p>
              </div>

              <div
                className={`w-10 h-10 flex items-center justify-center rounded-lg ${s.colour} ${s.bg}`}
              >
                {s.icon}
              </div>
            </div>

 {/* HOVER OVERLAY */}
<div className="absolute inset-0 pointer-events-none">

  {/* TOP DARK OVERLAY (70%) */}
  <div
    className="absolute top-0 left-0 right-0 h-[70%]
               bg-black/20
               opacity-0 group-hover:opacity-100
               transition duration-300"
  />

  {/* BOTTOM GREEN CTA (30%) */}
  <div
    className="absolute bottom-0 left-0 right-0 h-[35%]
               bg-green-500
               flex items-center justify-center
               text-white text-sm font-medium
                opacity-0 group-hover:opacity-100
               transition duration-300"
  >
    <span className="flex items-center gap-2">
      See Detailed Products
      <span className="text-lg">→</span>
    </span>
  </div>

</div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default InventoryManagement;
