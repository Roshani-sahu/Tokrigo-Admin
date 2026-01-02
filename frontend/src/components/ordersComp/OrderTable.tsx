import React, { useMemo, useState } from "react";
import {
  TrendingUp,
  Search,
  SlidersHorizontal,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";


/* ================= TYPES ================= */
type Order = {
  id: string;
  customer: string;
  items: number;
  amount: number;
  payment: "UPI" | "COD";
  status: "Shipped" | "Processing" | "Returned" | "Cancelled";
  date: string;
};

/* ================= CONSTANTS ================= */
const ITEMS_PER_PAGE = 4;

/* ================= DATA ================= */
const ordersData: Order[] = [
  {
    id: "#C5B94",
    customer: "Amisha Dubey",
    items: 8,
    amount: 6000,
    payment: "UPI",
    status: "Shipped",
    date: "02-08-25",
  },
  {
    id: "#C5B95",
    customer: "Abhishek Dubey",
    items: 3,
    amount: 2100,
    payment: "COD",
    status: "Processing",
    date: "03-08-25",
  },
  {
    id: "#C5B96",
    customer: "Umashree Joshi",
    items: 5,
    amount: 4200,
    payment: "UPI",
    status: "Returned",
    date: "04-08-25",
  },
  {
    id: "#C5B97",
    customer: "Ajeet Singh Bhadoriya",
    items: 2,
    amount: 1800,
    payment: "COD",
    status: "Cancelled",
    date: "04-08-25",
  },
  {
    id: "#C5B98",
    customer: "Pooja Jain",
    items: 6,
    amount: 5200,
    payment: "UPI",
    status: "Shipped",
    date: "05-08-25",
  },
  {
    id: "#C5B99",
    customer: "Yukti Jain",
    items: 4,
    amount: 3600,
    payment: "COD",
    status: "Processing",
    date: "06-08-25",
  },
];

/* ================= COMPONENT ================= */
const OrdersTable: React.FC = () => {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] =
    useState<"All" | Order["status"]>("All");
  const [page, setPage] = useState(1);
  const [filterOpen, setFilterOpen] = useState(false);

  /* ================= FILTER + SEARCH ================= */
  const filteredOrders = useMemo(() => {

    return ordersData.filter((order) => {
      const matchesSearch = order.customer
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchesStatus =
        statusFilter === "All" || order.status === statusFilter;

      return matchesSearch && matchesStatus;
    });
  }, [search, statusFilter]);

  /* ================= PAGINATION ================= */
  const totalPages = Math.ceil(filteredOrders.length / ITEMS_PER_PAGE);

  const paginatedOrders = useMemo(() => {
    const start = (page - 1) * ITEMS_PER_PAGE;
    return filteredOrders.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredOrders, page]);



  return (
    <div className="bg-white rounded-xl p-3 md:p-4 w-full">
      {/* ================= HEADER ================= */}
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-4">
        <div className="flex items-center gap-2">
          <div className="w-12 h-12 bg-gray-100 text-green-600 rounded-lg flex items-center justify-center">
            <TrendingUp size={28} />
          </div>
          <h2 className="text-[16px] md:text-[18px] font-semibold text-[#2D2D2D]">
            Complete Order Overview
          </h2>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-2">
          {/* Search */}
          <div className="relative w-[280px]">
            <Search className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" />
            <input
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setPage(1);
              }}
              placeholder="Search customer..."
              className="pl-10 w-full pr-3 py-2 text-sm border rounded-lg focus:outline-none focus:ring-1 focus:ring-indigo-500"
            />
          </div>

          {/* Filter */}
          <div className="relative">
            <button
              onClick={() => setFilterOpen((p) => !p)}
              className="flex items-center gap-1 border rounded-lg px-3 py-2 text-sm"
            >
              <SlidersHorizontal className="w-4 h-4" />
              Filter
            </button>

            {filterOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-white border rounded-lg shadow-lg z-50">
                {["All", "Shipped", "Processing", "Returned", "Cancelled"].map(
                  (status) => (
                    <button
                      key={status}
                      onClick={() => {
                        setStatusFilter(status as any);
                        setPage(1);
                        setFilterOpen(false);
                      }}
                      className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-100 ${
                        statusFilter === status
                          ? "bg-gray-100 font-medium"
                          : ""
                      }`}
                    >
                      {status}
                    </button>
                  )
                )}
              </div>
            )}
          </div>

          {/* Pagination */}
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
      <div className="hidden md:block overflow-x-auto rounded-lg">
        <table className="w-full border-collapse min-w-[1024px] text-[15px]">
          <thead className="bg-green-grad text-white">
            <tr>
              <th className="px-4 py-5 text-center">Order ID</th>
              <th className="px-4 py-5 text-center">Customer</th>
              <th className="px-4 py-5 text-center">Items</th>
              <th className="px-4 py-5 text-center">Amount</th>
              <th className="px-4 py-5 text-center">Payment Mode</th>
              <th className="px-4 py-5 text-center">Status</th>
              <th className="px-4 py-5 text-center">Date</th>
              <th className="px-4 py-5 text-center">Action</th>
            </tr>
          </thead>

          <tbody>
            {paginatedOrders.map((order) => (
              <tr key={order.id} className="border-b hover:bg-gray-50">
                <td className="px-4 py-4 text-center text-[#47449F]">
                  {order.id}
                </td>
                <td className="px-4 py-4 text-center">{order.customer}</td>
                <td className="px-4 py-4 text-center">{order.items}</td>
                <td className="px-4 py-4 text-center">
                  Rs.{order.amount.toLocaleString()}
                </td>
                <td className="px-4 py-4 text-center">
                  <span
                    className={`px-2 py-1 rounded-md text-sm ${
                      order.payment === "UPI"
                        ? "bg-[#FFEFCE] text-[#FF6600]"
                        : "bg-[#ECFAFF] text-[#007F70]"
                    }`}
                  >
                    {order.payment}
                  </span>
                </td>
                <td className="px-4 py-4 text-center">
                  <span
                    className={`px-3 py-1 rounded-md text-sm ${
                      order.status === "Shipped"
                        ? "bg-green-100 text-green-700"
                        : order.status === "Processing"
                        ? "bg-yellow-100 text-yellow-700"
                        : order.status === "Returned"
                        ? "bg-red-100 text-red-700"
                        : "bg-gray-100 text-gray-700"
                    }`}
                  >
                    {order.status}
                  </span>
                </td>
                <td className="px-4 py-4 text-center">{order.date}</td>
                <td className="px-4 py-4 text-center">
                  <button className="border border-[#0033FF] text-[#0033FF] rounded-md px-3 py-1 text-sm hover:bg-[#0033FF] hover:text-white transition">
                    See Receipt
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

{/* ================= MOBILE TABLE ================= */}
<div className="block md:hidden space-y-3">
  {paginatedOrders.map((order) => (
    <div
      key={order.id}
      className="border rounded-xl p-4 shadow-sm space-y-3"
    >
      {/* Top Row */}
      <div className="flex justify-between items-start">
        <div>
          <p className="text-[#47449F] font-medium">{order.id}</p>
          <p className="font-semibold text-[#2D2D2D]">
            {order.customer}
          </p>
        </div>

        <div className="text-right">
          <p className="text-sm">{order.items} items</p>
          <p className="font-semibold">
            Rs.{order.amount.toLocaleString()}
          </p>
        </div>
      </div>

      {/* Payment + Status */}
      <div className="flex justify-between border-t pt-3">
        {/* Payment */}
        <div>
          <p className="text-sm text-gray-500 mb-1">Payment</p>
          <span
            className={`px-3 py-1 rounded-md text-xs ${
              order.payment === "UPI"
                ? "bg-[#FFEFCE] text-[#FF6600]"
                : "bg-[#ECFAFF] text-[#007F70]"
            }`}
          >
            {order.payment}
          </span>
        </div>

        {/* Status */}
        <div className="text-right">
          <p className="text-sm text-gray-500 mb-1">Status</p>
          <span
            className={`px-3 py-1 rounded-md text-xs ${
              order.status === "Shipped"
                ? "bg-[#E8FFE8] text-[#16A34A]"
                : order.status === "Processing"
                ? "bg-[#FFF9DD78] text-[#FDA900]"
                : order.status === "Returned"
                ? "bg-[#F8DDFF78] text-[#9634AD]"
                : "bg-[#FFE1E1] text-[#FF4343]"
            }`}
          >
            {order.status}
          </span>
        </div>
      </div>

      {/* Date + Action */}
      <div className="flex justify-between items-center border-t pt-3">
        <p className="text-sm text-gray-600">
          Date: <span className="text-[#2D2D2D]">{order.date}</span>
        </p>

        <button className="border border-[#0033FF] text-[#0033FF] rounded-md px-3 py-1 text-xs hover:bg-[#0033FF] hover:text-white transition">
          See Receipt
        </button>
      </div>
    </div>
  ))}
</div>


      {/* ================= FOOTER ================= */}
      <div className="text-center text-sm text-gray-500 mt-4">
        Page {page} of {totalPages || 1}
      </div>
    </div>
  );
};

export default OrdersTable;
