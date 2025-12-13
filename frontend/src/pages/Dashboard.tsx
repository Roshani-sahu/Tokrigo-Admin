import DashboardLayout from "../layouts/DashboardLayout";
import StatCard from "../components/StatCard";

const Dashboard = () => {
  return (
    <DashboardLayout>
      <h1 className="text-xl font-semibold mb-6">Dashboard</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard title="Net Revenue" value="₹35,000" trend="+2.08%" />
        <StatCard title="Total Sales" value="20,000" trend="-2.08%" />
        <StatCard title="Order Cancelled" value="5,000" trend="-2.08%" />
        <StatCard title="Total Visitors" value="15,000" trend="-2.08%" />
      </div>

      <div className="mt-8 bg-white rounded-xl shadow-sm p-6">
        <h2 className="font-semibold mb-4">Current Stock Overview</h2>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-green-50 text-gray-600">
              <tr>
                <th className="p-3 text-left">Order ID</th>
                <th>Date</th>
                <th>Item</th>
                <th>Status</th>
                <th className="text-right">Amount</th>
              </tr>
            </thead>
            <tbody>
              {Array.from({ length: 6 }).map((_, i) => (
                <tr key={i} className="border-b">
                  <td className="p-3 text-blue-600">#fc5b94</td>
                  <td>02 Dec 2025</td>
                  <td>2 Items</td>
                  <td>
                    <span className="px-3 py-1 text-xs rounded-full bg-green-100 text-green-600">
                      Delivered
                    </span>
                  </td>
                  <td className="text-right">₹5,750</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
