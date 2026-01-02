import { useState, useMemo } from "react";
import {
  Search,
  ChevronLeft,
  ChevronRight,
  SlidersHorizontal,
  TrendingUp,
} from "lucide-react";

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
    id: "[#fc5b94]",
    product: " Gold Biscuits",
    stock: "884 Units",
    threshold: "100 Units",
    reorder: "200 Units",
    status: "In-Stock",
    supplier: "Mr. Bean",
    time: "2 Days",
  },
  {
    id: "[#fc5b94]",
    product: "Marie Gold Biscuits",
    stock: "50 Units",
    threshold: "100 Units",
    reorder: "200 Units",
    status: "Re-Order",
    supplier: "Mr. Bean",
    time: "2 Days",
  },
  {
    id: "[#fc5b94]",
    product: "Marie Gold Biscuits",
    stock: "0 Units",
    threshold: "100 Units",
    reorder: "200 Units",
    status: "Out of Stock",
    supplier: "Mr. Bean",
    time: "2 Days",
  },
  {
    id: "[#fc5b94]",
    product: "Marie Gold Biscuits",
    stock: "0 Units",
    threshold: "100 Units",
    reorder: "200 Units",
    status: "Out of Stock",
    supplier: "Mr. Bean",
    time: "2 Days",
  },
  {
    id: "[#fc5b94]",
    product: "Marie Gold Biscuits",
    stock: "0 Units",
    threshold: "100 Units",
    reorder: "200 Units",
    status: "Out of Stock",
    supplier: "Mr. Bean",
    time: "2 Days",
  },
  {
    id: "[#fc5b94]",
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

const ITEMS_PER_PAGE = 4;

const StockOverview = () => {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [page, setPage] = useState(1);
const [isFilterOpen, setIsFilterOpen] = useState(false);

  /* ================= FILTER + SEARCH ================= */
  const filteredData = useMemo(() => {
    return stockData.filter((item) => {
      const matchesSearch =
        item.product.toLowerCase().includes(search.toLowerCase()) ||
        item.supplier.toLowerCase().includes(search.toLowerCase());

      const matchesStatus =
        statusFilter === "All" || item.status === statusFilter;

      return matchesSearch && matchesStatus;
    });
  }, [search, statusFilter]);

  /* ================= PAGINATION ================= */
  const totalPages = Math.ceil(filteredData.length / ITEMS_PER_PAGE);

  const paginatedData = useMemo(() => {
    const start = (page - 1) * ITEMS_PER_PAGE;
    return filteredData.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredData, page]);

  return (
    <div className="bg-white rounded-xl shadow-sm p-4 md:p-6 mt-8">
      {/* ================= HEADER ================= */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        <h2 className="text-lg font-semibold flex items-center gap-3">
          <div className="w-12 h-12 bg-gray-100 text-green-600 rounded-lg flex items-center justify-center">
            <TrendingUp size={24} />
          </div>
          Current Stock Overview
        </h2>

        <div className="flex flex-col md:flex-row gap-2 items-center">
          {/* Search */}
          <div className="relative w-[260px]">
            <Search className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" />
            <input
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setPage(1);
              }}
              placeholder="Search product or supplier..."
              className="pl-10 w-full pr-3 py-2 text-sm border rounded-lg focus:outline-none focus:ring-1 focus:ring-indigo-500"
            />
          </div>

          {/* Filter */}
         <div className="relative">
  {/* Filter Button */}
  <button
    onClick={() => setIsFilterOpen((prev) => !prev)}
    className="flex items-center gap-2 border rounded-lg px-3 py-2 text-sm bg-white hover:bg-gray-50"
  >
    <SlidersHorizontal className="w-4 h-4" />
    Filter
  </button>

  {/* Dropdown */}
  {isFilterOpen && (
    <div className="absolute right-0 mt-2 w-40 bg-white border rounded-lg shadow-lg z-50">
      {["All", "In-Stock", "Re-Order", "Out of Stock"].map((status) => (
        <button
          key={status}
          onClick={() => {
            setStatusFilter(status);
            setPage(1);
            setIsFilterOpen(false);
          }}
          className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-100 ${
            statusFilter === status ? "bg-gray-100 font-medium" : ""
          }`}
        >
          {status}
        </button>
      ))}
    </div>
  )}
</div>


          {/* Pagination Buttons */}
          <div className="flex gap-1">
            <button
              disabled={page === 1}
              onClick={() => setPage((p) => p - 1)}
              className="border rounded-lg p-2 disabled:opacity-40"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              disabled={page === totalPages}
              onClick={() => setPage((p) => p + 1)}
              className="border rounded-lg p-2 disabled:opacity-40"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* ================= DESKTOP TABLE ================= */}
      <div className="hidden rounded-xl md:block overflow-x-auto">
        <table className="w-full text-sm border-collapse">
          <thead className="bg-green-grad text-white">
            <tr>
              <th className="px-4 py-4 text-left">Product ID</th>
              <th className="px-4 py-4 text-left">Product</th>
              <th className="px-4 py-4 text-left">Stock</th>
              <th className="px-4 py-4 text-left">Threshold</th>
              <th className="px-4 py-4 text-left">Reorder</th>
              <th className="px-4 py-4 text-left">Status</th>
              <th className="px-4 py-4 text-left">Supplier</th>
              <th className="px-4 py-4 text-left">Time</th>
            </tr>
          </thead>

          <tbody>
            {paginatedData.map((item, i) => (
              <tr key={i} className="border-b last:border-none">
                <td className="px-4 py-4 text-indigo-600 font-medium">{item.id}</td>
                <td className="px-4 py-4">{item.product}</td>
                <td className="px-4 py-4">{item.stock}</td>
                <td className="px-4 py-4">{item.threshold}</td>
                <td className="px-4 py-4">{item.reorder}</td>
                <td className="px-4 py-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${statusStyles[item.status]}`}
                  >
                    {item.status}
                  </span>
                </td>
                <td className="px-4 py-4">{item.supplier}</td>
                <td className="px-4 py-4">{item.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ================= MOBILE CARDS ================= */}
      <div className="md:hidden space-y-4">
        {paginatedData.map((item, i) => (
          <div key={i} className="border rounded-xl p-4 shadow-sm space-y-2">
            <div className="flex justify-between">
              <span className="text-indigo-600 font-medium">{item.id}</span>
              <span
                className={`px-3 py-1 rounded-full text-xs font-medium ${statusStyles[item.status]}`}
              >
                {item.status}
              </span>
            </div>

            <p className="font-semibold">{item.product}</p>

            <div className="grid grid-cols-2 gap-2 text-gray-600 text-sm">
              <p>Stock: {item.stock}</p>
              <p>Threshold: {item.threshold}</p>
              <p>Reorder: {item.reorder}</p>
              <p>Supplier: {item.supplier}</p>
            </div>

            <p className="text-gray-500 text-sm">
              Reorder Time: {item.time}
            </p>
          </div>
        ))}
      </div>

      {/* ================= FOOTER ================= */}
      <div className="mt-4 text-sm text-gray-500 text-center">
        Page {page} of {totalPages || 1}
      </div>
    </div>
  );
};

export default StockOverview;
