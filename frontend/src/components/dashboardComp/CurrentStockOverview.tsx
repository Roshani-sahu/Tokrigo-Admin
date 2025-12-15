import { Search, ChevronLeft, ChevronRight, SlidersHorizontal } from "lucide-react";

type StockItem = {
  id: string;
  product: string;
  stock: string;
  threshold: string;
  reorder: string;
  status: "In-Stock" | "Re-Order" | "Out of Stock";
  supplier: string;
  time: string;
};

const stockData: StockItem[] = [
  {
    id: "#fc5b94",
    product: "Marie Gold Biscuits",
    stock: "884 Units",
    threshold: "100 Units",
    reorder: "200 Units",
    status: "In-Stock",
    supplier: "Mr. Bean",
    time: "2 Days",
  },
  {
    id: "#fc5b94",
    product: "Marie Gold Biscuits",
    stock: "50 Units",
    threshold: "100 Units",
    reorder: "200 Units",
    status: "Re-Order",
    supplier: "Mr. Bean",
    time: "2 Days",
  },
  {
    id: "#fc5b94",
    product: "Marie Gold Biscuits",
    stock: "0 Units",
    threshold: "100 Units",
    reorder: "200 Units",
    status: "Out of Stock",
    supplier: "Mr. Bean",
    time: "2 Days",
  },
];

const statusStyles: Record<string, string> = {
  "In-Stock": "bg-green-100 text-green-700",
  "Re-Order": "bg-orange-100 text-orange-600",
  "Out of Stock": "bg-red-100 text-red-600",
};

const StockOverview = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm p-4 mt-8 md:p-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        <h2 className="text-lg font-semibold flex items-center gap-2">
          📊 Current Stock Overview
        </h2>

        <div className="flex items-center gap-2">
          <div className="relative">
            <Search className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search products in stocks..."
              className="pl-9 pr-3 py-2 text-sm border rounded-lg focus:outline-none focus:ring-1 focus:ring-indigo-500"
            />
          </div>

          <button className="flex items-center gap-1 border rounded-lg px-3 py-2 text-sm">
            <SlidersHorizontal className="w-4 h-4" />
            Filter
          </button>

          <div className="flex gap-1">
            <button className="border rounded-lg p-2">
              <ChevronLeft size={16} />
            </button>
            <button className="border rounded-lg p-2">
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* Desktop Table */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full border-collapse">
          <thead className="bg-gray-50 text-sm text-gray-600">
            <tr>
              <th className="px-4 py-3 text-left">Products ID</th>
              <th className="px-4 py-3 text-left">Products</th>
              <th className="px-4 py-3 text-left">Current Stock</th>
              <th className="px-4 py-3 text-left">Threshold</th>
              <th className="px-4 py-3 text-left">Reorder Quantity</th>
              <th className="px-4 py-3 text-left">Status</th>
              <th className="px-4 py-3 text-left">Supplier</th>
              <th className="px-4 py-3 text-left">Reorder Time</th>
            </tr>
          </thead>

          <tbody className="text-sm">
            {stockData.map((item, index) => (
              <tr key={index} className="border-b last:border-none">
                <td className="px-4 py-3 text-indigo-600 font-medium">
                  {item.id}
                </td>
                <td className="px-4 py-3">{item.product}</td>
                <td className="px-4 py-3">{item.stock}</td>
                <td className="px-4 py-3">{item.threshold}</td>
                <td className="px-4 py-3">{item.reorder}</td>
                <td className="px-4 py-3">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${statusStyles[item.status]}`}
                  >
                    {item.status}
                  </span>
                </td>
                <td className="px-4 py-3">{item.supplier}</td>
                <td className="px-4 py-3">{item.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Cards */}
      <div className="md:hidden space-y-4">
        {stockData.map((item, index) => (
          <div
            key={index}
            className="border rounded-xl p-4 text-sm space-y-2 shadow-sm"
          >
            <div className="flex justify-between">
              <span className="text-indigo-600 font-medium">{item.id}</span>
              <span
                className={`px-3 py-1 rounded-full text-xs font-medium ${statusStyles[item.status]}`}
              >
                {item.status}
              </span>
            </div>

            <p className="font-semibold">{item.product}</p>

            <div className="grid grid-cols-2 gap-2 text-gray-600">
              <p>Stock: {item.stock}</p>
              <p>Threshold: {item.threshold}</p>
              <p>Reorder: {item.reorder}</p>
              <p>Supplier: {item.supplier}</p>
            </div>

            <p className="text-gray-500">Reorder Time: {item.time}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StockOverview;
