import DashboardLayout from '../layouts/DashboardLayout'
import React from "react";
import { Search, ChevronLeft, ChevronRight, Filter } from "lucide-react";

type Customer = {
  name: string;
  phone: string;
  wallet: string;
  orders: number;
  spend: string;
  status: "Active" | "InActive";
  referrals: string;
};

const customers: Customer[] = Array.from({ length: 9 }).map(() => ({
  name: "Tarun jain",
  phone: "+91 ******708",
  wallet: "4250 coins",
  orders: 5,
  spend: "Rs.15,000",
  status: Math.random() > 0.7 ? "InActive" : "Active",
  referrals: "17 Users",
}));

const CustomerManagement: React.FC = () => {
  return (
    <DashboardLayout>
    <div className=" bg-[#f7faff] min-h-screen">

      {/* Page Header */}
      <div className="mb-6">
        <h1 className="text-xl font-semibold text-[#353535]">
          Customer Management
        </h1>
        <p className="text-sm text-gray-500">
          Manage your customer base
        </p>
      </div>

      {/* Card */}
      <div className="bg-white rounded-2xl shadow-sm p-4 md:p-5">

        {/* Card Header */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-4">
          <div className='flex items-center gap-2'>
          <div className='w-12 h-12 rounded bg-[#EAF0FF] flex items-center justify-center flex-shrink-0'>
            <img
              src='/icons/GraphIcon.png'
              alt='Graph'
              className='w-8 md:w-12 h-6 md:h-10 object-contain'
            />
          </div>
          <h2 className='text-[16px] md:text-[18px] font-semibold text-[#2D2D2D] whitespace-nowrap'>
            All Customers of tokrigo
          </h2>
        </div>

          {/* Controls */}
          <div className="flex flex-wrap items-center gap-2">
            <div className="relative">
              <Search className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search by number..."
                className="pl-9 pr-24 py-2 text-sm border rounded-lg focus:outline-none"
              />
            </div>

            <button className="flex items-center gap-1 px-3 py-2 border rounded-lg text-sm">
              <Filter size={14} />
              Filter
            </button>

            <button className="border rounded-lg p-2">
              <ChevronLeft size={16} />
            </button>
            <button className="border rounded-lg p-2">
              <ChevronRight size={16} />
            </button>
          </div>
        </div>

        {/* ================= DESKTOP TABLE ================= */}
        <div className="hidden md:block rounded-xl overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-green-100 text-heading ">
                <th className="p-3 text-left">
                  {/* <input type="checkbox" /> */}
                </th>
                <th className="p-3 py-4 text-center">Customer</th>
                <th className="p-3 py-4 text-center">Phone No.</th>
                <th className="p-3 py-4 text-center">Wallet</th>
                <th className="p-3 py-4 text-center">Total orders</th>
                <th className="p-3 py-4 text-center">Total spend</th>
                <th className="p-3 py-4 text-center">Status</th>
                <th className="p-3 py-4 text-center">Direct referrals</th>
                <th className="p-3 py-4 text-center">Action</th>
              </tr>
            </thead>

            <tbody>
              {customers.map((c, index) => (
                <tr
                  key={index}
                  className="border-b last:border-none hover:bg-gray-50"
                >
                  <td className="p-3">
                    <input type="checkbox" />
                  </td>
                  <td className="p-3 text-center">{c.name}</td>
                  <td className="p-3 text-center">{c.phone}</td>
                  <td className="p-3 text-center">{c.wallet}</td>
                  <td className="p-3 text-center">{c.orders}</td>
                  <td className="p-3 text-center">{c.spend}</td>
                  <td className="p-3 text-center">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
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
                      <button className="w-8 h-8 rounded  bg-yellow-100">
                        📄
                      </button>
                      <button
                        className={`w-8 h-8 rounded ${
                          c.status === "Active"
                            ? "bg-red-100"
                            : "bg-green-100"
                        }`}
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
          {customers.map((c, index) => (
            <div
              key={index}
              className="border rounded-xl p-4 shadow-sm text-sm space-y-2"
            >
              <div className="flex justify-between items-center">
                <p className="font-semibold">{c.name}</p>
                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium ${
                    c.status === "Active"
                      ? "bg-green-100 text-green-600"
                      : "bg-red-100 text-red-600"
                  }`}
                >
                  {c.status}
                </span>
              </div>

              <p className="text-gray-500">{c.phone}</p>

              <div className="grid grid-cols-2 gap-2 text-gray-600">
                <p>Wallet: {c.wallet}</p>
                <p>Orders: {c.orders}</p>
                <p>Spend: {c.spend}</p>
                <p>Referrals: {c.referrals}</p>
              </div>

              <div className="flex gap-2 pt-2">
                <button className="flex-1 py-2 rounded bg-yellow-100">
                  View
                </button>
                <button
                  className={`flex-1 py-2 rounded ${
                    c.status === "Active"
                      ? "bg-red-100"
                      : "bg-green-100"
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
    </DashboardLayout>
  );
};

export default CustomerManagement;
