import React, { useState, useMemo, useEffect } from "react";
import DashboardLayout from "../layouts/DashboardLayout";
import { Search, ChevronLeft, ChevronRight, Users, BookUser, Ban, SquareCheckBig, SlidersHorizontal } from "lucide-react";




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
    id: 4,
    name: "Suresh Raina",
    phone: "+91 9988776644",
    wallet: "2100 coins",
    orders: 15,
    spend: "Rs.5,800",
    status: "Active",
    referrals: "8 Users",
    joinedDate: "15-10-2025",
    orderHistory: [
      { orderId: "#ORD-1501", date: "22-12-2025", amount: "Rs.300", status: "Delivered" },
    ],
  },
  {
    id: 5,
    name: "MS Dhoni",
    phone: "+91 7777777777",
    wallet: "7777 coins",
    orders: 77,
    spend: "Rs.77,000",
    status: "Active",
    referrals: "77 Users",
    joinedDate: "07-07-2025",
    orderHistory: [
      { orderId: "#ORD-0007", date: "07-12-2025", amount: "Rs.777", status: "Delivered" },
    ],
  },
  {
    id: 6,
    name: "Virat Kohli",
    phone: "+91 8888888888",
    wallet: "1800 coins",
    orders: 18,
    spend: "Rs.18,000",
    status: "Active",
    referrals: "18 Users",
    joinedDate: "18-11-2025",
    orderHistory: [
      { orderId: "#ORD-0018", date: "18-12-2025", amount: "Rs.1818", status: "Delivered" },
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
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [filterOpen, setFilterOpen] = useState(false);

  const itemsPerPage = 5;

  // Filter and search customers
  const filteredCustomers = useMemo(() => {
    return customerList.filter((c) => {
      const matchesSearch =
        c.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        c.phone.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesStatus =
        statusFilter === "All" || c.status === statusFilter;
      return matchesSearch && matchesStatus;
    });
  }, [customerList, searchTerm, statusFilter]);

  // Pagination
  const totalPages = Math.ceil(filteredCustomers.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const displayCustomers = filteredCustomers.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  useEffect(() => {
    if (currentPage > totalPages && totalPages > 0) {
      setCurrentPage(1);
    }
  }, [currentPage, totalPages]);

  const toggleStatus = (id: number) => {
    setCustomerList((prev) =>
      prev.map((c) =>
        c.id === id
          ? { ...c, status: c.status === "Active" ? "InActive" : "Active" }
          : c
      )
    );
  };

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
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
   <div className="flex items-center gap-2">
          <div className="w-12 h-12 bg-gray-100 text-green-600 rounded-lg flex items-center justify-center">
            <Users size={28} />
          </div>
          <h2 className="text-[16px] md:text-[18px] font-semibold text-[#2D2D2D]">
            All Customers of tokrigo
          </h2>
        </div>

  {/* Controls */}
  <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">

    {/* Search */}
    <div className="relative w-full sm:w-64">
      <Search className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" />
      <input
        type="text"
        placeholder="Search by number..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full pl-9 pr-3 py-2 text-sm border rounded-lg focus:outline-none"
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
          {["All", "Active", "InActive"].map((status) => (
            <button
              key={status}
              onClick={() => {
                setStatusFilter(status);
                setCurrentPage(1);
                setFilterOpen(false);
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

    {/* Pagination */}
    <div className="flex gap-2">
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="border rounded-lg p-2 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors"
      >
        <ChevronLeft size={16} />
      </button>
      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages || totalPages === 0}
        className="border rounded-lg p-2 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors"
      >
        <ChevronRight size={16} />
      </button>
    </div>
  </div>
</div>


          {/* TABLE */}
          <div className="hidden md:block rounded-xl overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-green-grad text-white">
                  <th className="p-3 py-5 text-center">Customer</th>
                  <th className="p-3 py-5 text-center">Phone</th>
                  <th className="p-3 py-5 text-center">Wallet</th>
                  <th className="p-3 py-5 text-center">Orders</th>
                  <th className="p-3 py-5 text-center">Spend</th>
                  <th className="p-3 py-5 text-center">Status</th>
                  <th className="p-3 py-5 text-center">Referrals</th>
                  <th className="p-3 py-5 text-center">Action</th>
                </tr>
              </thead>

              <tbody>
                {displayCustomers.map((c) => (

                  <tr key={c.id} className="border-b hover:bg-gray-50">
                    <td className="p-3 py-6 text-center">{c.name}</td>
                    <td className="p-3 py-6 text-center">{c.phone}</td>
                    <td className="p-3 py-6 text-center">{c.wallet}</td>
                    <td className="p-3 py-6 text-center">{c.orders}</td>
                    <td className="p-3 py-6 text-center">{c.spend}</td>
                    <td className="p-3 py-6 text-center">
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
      className="w-8 h-8 rounded flex items-center justify-center"
      title="View Details"
    >
      <BookUser className="text-blue-400" />
    </button>

    {/* ACTIVE / INACTIVE */}
    <button
      onClick={() => toggleStatus(c.id)}
      className={`w-8 h-8 rounded flex items-center justify-center `}
      title={c.status === "Active" ? "Deactivate" : "Activate"}
    >
      {c.status === "Active" ? <Ban className="text-red-500" /> : <SquareCheckBig className="text-green-500" />}
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
  {displayCustomers.map((c) => (
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

          {/* Pagination Status */}
          <div className="flex items-center justify-between mt-6 pt-4 ">
            <div className="text-sm text-gray-500">
              Showing {filteredCustomers.length > 0 ? startIndex + 1 : 0}-
              {Math.min(startIndex + itemsPerPage, filteredCustomers.length)} of{" "}
              {filteredCustomers.length} customers
            </div>
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
