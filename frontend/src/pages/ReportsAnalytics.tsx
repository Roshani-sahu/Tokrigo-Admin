import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";
import { TrendingUp, ShoppingCart, Users } from "lucide-react";
import DashboardLayout from "../layouts/DashboardLayout";

/* ================= DATA ================= */

const salesData = [
  { month: "Jan", sales: 28000, orders: 420 },
  { month: "Feb", sales: 22000, orders: 380 },
  { month: "Mar", sales: 28000, orders: 450 },
  { month: "Apr", sales: 24000, orders: 400 },
  { month: "May", sales: 38000, orders: 520 },
  { month: "Jun", sales: 28000, orders: 430 },
  { month: "Jul", sales: 36000, orders: 500 },
  { month: "Aug", sales: 20000, orders: 350 },
  { month: "Sep", sales: 24000, orders: 390 },
  { month: "Oct", sales: 35000, orders: 540 },
  { month: "Nov", sales: 88000, orders: 1020 },
  { month: "Dec", sales: 76000, orders: 920 },
];

const userGrowth = [
  { month: "Jan", users: 1400 },
  { month: "Feb", users: 1650 },
  { month: "Mar", users: 2000 },
  { month: "Apr", users: 1400 },
  { month: "May", users: 1850 },
  { month: "Jun", users: 2500 },
];

/* ================= COMPONENT ================= */

const ReportsAnalytics: React.FC = () => {
  return (
    <DashboardLayout>
      <div className="min-h-screen bg-[#F7FAFF] ">
        {/* HEADER */}
        <div className="mb-6">
          <h1 className="text-xl font-semibold text-gray-800">
            Reports & Analytics
          </h1>
          <p className="text-sm text-gray-400">
            Comprehensive business insights
          </p>
        </div>

        {/* STATS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-6">
          {/* Revenue */}
          <div className="bg-white rounded-xl p-5 shadow-sm">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-gray-500 text-sm">Total Revenue</p>
                <h2 className="text-2xl font-semibold mt-1">
                  ₹7,62,000
                </h2>
                <p className="text-green-600 text-sm mt-2">
                  +18.9% from last year
                </p>
              </div>
              <div className="bg-green-100 p-2 rounded-lg">
                <TrendingUp className="text-green-600" size={20} />
              </div>
            </div>
          </div>

          {/* Orders */}
          <div className="bg-white rounded-xl p-5 shadow-sm">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-gray-500 text-sm">Total Orders</p>
                <h2 className="text-2xl font-semibold mt-1">
                  34,890
                </h2>
                <p className="text-blue-600 text-sm mt-2">
                  +12.9% from last year
                </p>
              </div>
              <div className="bg-blue-100 p-2 rounded-lg">
                <ShoppingCart
                  className="text-blue-600"
                  size={20}
                />
              </div>
            </div>
          </div>

          {/* Users */}
          <div className="bg-white rounded-xl p-5 shadow-sm">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-gray-500 text-sm">Total Users</p>
                <h2 className="text-2xl font-semibold mt-1">
                  11,345
                </h2>
                <p className="text-pink-600 text-sm mt-2">
                  +12.9% from last year
                </p>
              </div>
              <div className="bg-pink-100 p-2 rounded-lg">
                <Users className="text-pink-600" size={20} />
              </div>
            </div>
          </div>
        </div>

        {/* CHARTS */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* SALES & ORDER REPORT */}
          <div className="bg-white rounded-xl p-5 shadow-sm">
            <h3 className="font-semibold text-gray-800 mb-4">
              Sales & Order Report
            </h3>

            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={salesData}>
                  <CartesianGrid
                    strokeDasharray="3 3"
                    vertical={false}
                  />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <YAxis
                    yAxisId="right"
                    orientation="right"
                  />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="sales"
                    stroke="#22c55e"
                    strokeWidth={2}
                    dot={{ r: 3 }}
                  />
                  <Line
                    type="monotone"
                    dataKey="orders"
                    yAxisId="right"
                    stroke="#3b82f6"
                    strokeWidth={2}
                    dot={{ r: 3 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* USER GROWTH */}
          <div className="bg-white rounded-xl p-5 shadow-sm">
            <h3 className="font-semibold text-gray-800 mb-4">
              User Growth
            </h3>

            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={userGrowth}>
                  <CartesianGrid
                    strokeDasharray="3 3"
                    vertical={false}
                  />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Bar
                    dataKey="users"
                    fill="#7ADC9E"
                    barSize={35}
              
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default ReportsAnalytics;
