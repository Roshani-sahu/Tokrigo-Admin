import React, { useState } from "react";
import DashboardLayout from "../layouts/DashboardLayout";
import { Search, ChevronLeft, ChevronRight, Filter } from "lucide-react";




/* ===================== TYPES ===================== */
type Order = {
  orderId: string;
  date: string;
  amount: string;
  status: "Delivered" | "Pending" | "Cancelled";
};

type Customer = {
  id: number;
  name: string;
  phone: string;
  wallet: string;
  orders: number;
  spend: string;
  status: "Active" | "InActive";
  referrals: string;
  joinedDate: string;
  orderHistory: Order[];
};

/* ===================== MOCK DATA ===================== */
const customers: Customer[] = [
  {
    id: 1,
    name: "Tarun Jain",
    phone: "+91 9876543210",
    wallet: "4250 coins",
    orders: 45,
    spend: "Rs.15,000",
    status: "Active",
    referrals: "17 Users",
    joinedDate: "23-12-2025",
    orderHistory: [
      { orderId: "#ORD-1245", date: "23-12-2025", amount: "Rs.400", status: "Delivered" },
      { orderId: "#ORD-1246", date: "22-12-2025", amount: "Rs.250", status: "Delivered" },
      { orderId: "#ORD-1247", date: "20-12-2025", amount: "Rs.600", status: "Delivered" },
    ],
  },
  {
    id: 2,
    name: "Rohit Sharma",
    phone: "+91 9123456780",
    wallet: "1200 coins",
    orders: 12,
    spend: "Rs.4,200",
    status: "InActive",
    referrals: "5 Users",
    joinedDate: "10-11-2025",
    orderHistory: [
      { orderId: "#ORD-1320", date: "20-12-2025", amount: "Rs.700", status: "Pending" },
    ],
  },
  {
    id: 3,
    name: "Ankit Verma",
    phone: "+91 9988776655",
    wallet: "3100 coins",
    orders: 28,
    spend: "Rs.9,800",
    status: "Active",
    referrals: "11 Users",
    joinedDate: "01-10-2025",
    orderHistory: [
      { orderId: "#ORD-1401", date: "21-12-2025", amount: "Rs.350", status: "Delivered" },
      { orderId: "#ORD-1402", date: "18-12-2025", amount: "Rs.900", status: "Delivered" },
    ],
  },
  {
    id: 3,
    name: "Ankit Verma",
    phone: "+91 9988776655",
    wallet: "3100 coins",
    orders: 28,
    spend: "Rs.9,800",
    status: "Active",
    referrals: "11 Users",
    joinedDate: "01-10-2025",
    orderHistory: [
      { orderId: "#ORD-1401", date: "21-12-2025", amount: "Rs.350", status: "Delivered" },
      { orderId: "#ORD-1402", date: "18-12-2025", amount: "Rs.900", status: "Delivered" },
    ],
  },
  {
    id: 3,
    name: "Ankit Verma",
    phone: "+91 9988776655",
    wallet: "3100 coins",
    orders: 28,
    spend: "Rs.9,800",
    status: "Active",
    referrals: "11 Users",
    joinedDate: "01-10-2025",
    orderHistory: [
      { orderId: "#ORD-1401", date: "21-12-2025", amount: "Rs.350", status: "Delivered" },
      { orderId: "#ORD-1402", date: "18-12-2025", amount: "Rs.900", status: "Delivered" },
    ],
  },
  {
    id: 3,
    name: "Ankit Verma",
    phone: "+91 9988776655",
    wallet: "3100 coins",
    orders: 28,
    spend: "Rs.9,800",
    status: "Active",
    referrals: "11 Users",
    joinedDate: "01-10-2025",
    orderHistory: [
      { orderId: "#ORD-1401", date: "21-12-2025", amount: "Rs.350", status: "Delivered" },
      { orderId: "#ORD-1402", date: "18-12-2025", amount: "Rs.900", status: "Delivered" },
      { orderId: "#ORD-1402", date: "18-12-2025", amount: "Rs.900", status: "Delivered" },
      { orderId: "#ORD-1402", date: "18-12-2025", amount: "Rs.900", status: "Delivered" },
      { orderId: "#ORD-1402", date: "18-12-2025", amount: "Rs.900", status: "Delivered" },
      { orderId: "#ORD-1402", date: "18-12-2025", amount: "Rs.900", status: "Delivered" },
      { orderId: "#ORD-1402", date: "18-12-2025", amount: "Rs.900", status: "Delivered" },
      { orderId: "#ORD-1402", date: "18-12-2025", amount: "Rs.900", status: "Delivered" },
      { orderId: "#ORD-1402", date: "18-12-2025", amount: "Rs.900", status: "Delivered" },
      { orderId: "#ORD-1402", date: "18-12-2025", amount: "Rs.900", status: "Delivered" },
    ],
  },
];

/* ===================== MODAL ===================== */
const CustomerDetailsModal = ({
  customer,
  onClose,
}: {
  customer: Customer;
  onClose: () => void;
}) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-white w-full max-w-lg rounded-2xl p-6 relative">

        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-400 hover:text-black"
        >
          ✕
        </button>

        <h2 className="text-lg font-semibold mb-4">Customer Details</h2>

        <div className="grid grid-cols-2 gap-4 text-sm mb-5">
          <div>
            <p className="text-gray-400">Name</p>
            <p className="font-medium">{customer.name}</p>
          </div>

          <div>
            <p className="text-gray-400">Phone No.</p>
            <p className="font-medium">{customer.phone}</p>
          </div>

          <div>
            <p className="text-gray-400">Joined Date</p>
            <p className="font-medium">{customer.joinedDate}</p>
          </div>

          <div>
            <p className="text-gray-400">Total Orders</p>
            <p className="font-medium">{customer.orders}</p>
          </div>

          <div>
            <p className="text-gray-400">Total Spent</p>
            <p className="font-medium">{customer.spend}</p>
          </div>
        </div>

        <h3 className="font-semibold mb-2">Order History</h3>

        <div className="max-h-56 overflow-y-auto border rounded-lg">
          <table className="w-full text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="p-2 text-left">Order ID</th>
                <th className="p-2 text-center">Date</th>
                <th className="p-2 text-center">Amount</th>
                <th className="p-2 text-center">Status</th>
              </tr>
            </thead>
            <tbody>
              {customer.orderHistory.map((o, i) => (
                <tr key={i} className="border-t">
                  <td className="p-2">{o.orderId}</td>
                  <td className="p-2 text-center">{o.date}</td>
                  <td className="p-2 text-center">{o.amount}</td>
                  <td className="p-2 text-center">
                    <span className="px-2 py-1 rounded bg-green-100 text-green-600 text-xs">
                      {o.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
};

/* ===================== MAIN PAGE ===================== */
const CustomerManagement: React.FC = () => {
const [customerList, setCustomerList] = useState<Customer[]>(customers);
const [selectedCustomer, setSelectedCustomer] = useState<Customer | null>(null);

const toggleStatus = (id: number) => {
  setCustomerList((prev) =>
    prev.map((c) =>
      c.id === id
        ? { ...c, status: c.status === "Active" ? "InActive" : "Active" }
        : c
    )
  );
};

  return (
    <DashboardLayout>
      <div className="bg-[#f7faff] min-h-screen">

        <div className="mb-6">
          <h1 className="text-xl font-semibold text-[#353535]">
            Customer Management
          </h1>
          <p className="text-sm text-gray-500">
            Manage your customer base
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm p-4">

          {/* Header */}
          {/* Header */}
<div className="flex flex-col gap-4 mb-4
                md:flex-row md:items-center md:justify-between">

  {/* Title */}
  <h2 className="text-base sm:text-lg font-semibold text-gray-800">
    All Customers
  </h2>

  {/* Controls */}
  <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">

    {/* Search */}
    <div className="relative w-full sm:w-64">
      <Search className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" />
      <input
        type="text"
        placeholder="Search by number..."
        className="w-full pl-9 pr-3 py-2 text-sm border rounded-lg focus:outline-none"
      />
    </div>

    {/* Filter */}
    <button className="flex items-center gap-1 px-3 py-2 border rounded-lg text-sm whitespace-nowrap">
      <Filter size={14} /> Filter
    </button>

    {/* Pagination */}
    <div className="flex gap-2">
      <button className="border rounded-lg p-2">
        <ChevronLeft size={16} />
      </button>
      <button className="border rounded-lg p-2">
        <ChevronRight size={16} />
      </button>
    </div>
  </div>
</div>


          {/* TABLE */}
          <div className="hidden md:block rounded-xl overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-green-100">
                  <th className="p-3 text-center">Customer</th>
                  <th className="p-3 text-center">Phone</th>
                  <th className="p-3 text-center">Wallet</th>
                  <th className="p-3 text-center">Orders</th>
                  <th className="p-3 text-center">Spend</th>
                  <th className="p-3 text-center">Status</th>
                  <th className="p-3 text-center">Referrals</th>
                  <th className="p-3 text-center">Action</th>
                </tr>
              </thead>

              <tbody>
                {customerList.map((c) => (

                  <tr key={c.id} className="border-b hover:bg-gray-50">
                    <td className="p-3 text-center">{c.name}</td>
                    <td className="p-3 text-center">{c.phone}</td>
                    <td className="p-3 text-center">{c.wallet}</td>
                    <td className="p-3 text-center">{c.orders}</td>
                    <td className="p-3 text-center">{c.spend}</td>
                    <td className="p-3 text-center">
                      <span
                        className={`px-3 py-1 rounded-full text-xs ${
                          c.status === "Active"
                            ? "bg-green-100 text-green-600"
                            : "bg-red-100 text-red-600"
                        }`}
                      >
                        {c.status}
                      </span>
                    </td>
                    <td className="p-3 text-center">{c.referrals}</td>
                    <td className="p-3">
  <div className="flex gap-2 justify-center">
    
    {/* DETAILS */}
    <button
      onClick={() => setSelectedCustomer(c)}
      className="w-8 h-8 rounded bg-yellow-100 flex items-center justify-center"
      title="View Details"
    >
      📄
    </button>

    {/* ACTIVE / INACTIVE */}
    <button
      onClick={() => toggleStatus(c.id)}
      className={`w-8 h-8 rounded flex items-center justify-center ${
        c.status === "Active" ? "bg-red-100" : "bg-green-100"
      }`}
      title={c.status === "Active" ? "Deactivate" : "Activate"}
    >
      {c.status === "Active" ? "🚫" : "✅"}
    </button>

  </div>
</td>

                  </tr>
                ))}
              </tbody>
            </table>
          </div>
{/* ================= MOBILE CARDS ================= */}
<div className="md:hidden space-y-4">
  {customerList.map((c) => (
    <div
      key={c.id}
      className="bg-white border rounded-xl p-4 shadow-sm text-sm"
    >
      <div className="flex justify-between items-center mb-2">
        <p className="font-semibold text-gray-800">{c.name}</p>
        <span
          className={`px-3 py-1 rounded-full text-xs ${
            c.status === "Active"
              ? "bg-green-100 text-green-600"
              : "bg-red-100 text-red-600"
          }`}
        >
          {c.status}
        </span>
      </div>

      <p className="text-gray-500 mb-2">{c.phone}</p>

      <div className="grid grid-cols-2 gap-2 text-gray-600">
        <p>Wallet: {c.wallet}</p>
        <p>Orders: {c.orders}</p>
        <p>Spend: {c.spend}</p>
        <p>Referrals: {c.referrals}</p>
      </div>

      <div className="flex gap-2 mt-4">
        <button
          onClick={() => setSelectedCustomer(c)}
          className="flex-1 py-2 rounded bg-yellow-100 font-medium"
        >
          View
        </button>

        <button
          onClick={() => toggleStatus(c.id)}
          className={`flex-1 py-2 rounded font-medium ${
            c.status === "Active" ? "bg-red-100" : "bg-green-100"
          }`}
        >
          {c.status === "Active" ? "Block" : "Activate"}
        </button>
      </div>
    </div>
  ))}
</div>

        </div>
      </div>

      {selectedCustomer && (
        <CustomerDetailsModal
          customer={selectedCustomer}
          onClose={() => setSelectedCustomer(null)}
        />
      )}
    </DashboardLayout>
  );
};

export default CustomerManagement;
