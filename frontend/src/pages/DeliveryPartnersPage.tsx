import React from "react";
import DeliveryPartnersTable from "../components/deliveryComp/DeliveryPartnersTable";
import DashboardLayout from "../layouts/DashboardLayout";

const stats = [
  {
    title: "Total Riders",
    subtitle: "Today’s Delivery Fleet",
    value: 100,
  },
  {
    title: "Active Riders",
    subtitle: "Riders active for delivery",
    value: 80,
  },
  {
    title: "Riders On Delivery",
    subtitle: "Riders on delivery process",
    value: 60,
  },
  {
    title: "Riders Waiting On Lobby",
    subtitle: "Today’s Delivery Fleet",
    value: 20,
  },
];


const DeliveryPartnersPage: React.FC = () => {
  return (
    <DashboardLayout>
    <div className=" bg-[#f7faff] min-h-screen">

      {/* Page Header */}
      <div className="mb-6">
        <h1 className="text-xl font-semibold text-gray-800">Delivery Partners</h1>
        <p className="text-sm text-gray-500">Manage your delivery team</p>
      </div>

      {/* Stats */}
     <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
  {stats.map((s) => (
    <div
      key={s.title}
      className="bg-white rounded-xl shadow-sm p-4 flex justify-between items-start"
    >
      {/* Left content */}
      <div className="space-y-1">
        <p className="text-sm font-medium text-gray-700">
          {s.title}
        </p>
        <p className="text-xs text-gray-400">
          {s.subtitle}
        </p>
        <p className="text-xl font-semibold pt-5 text-gray-900">
          {s.value}
        </p>
      </div>

      {/* Top-right image */}
      <div className="w-10 h-10 flex items-center justify-center rounded-full bg-orange-100">
        <img
          src="/icons/rider.png"
          alt={s.title}
          className="w-5 h-5 object-contain"
        />
      </div>
    </div>
  ))}
</div>


      {/* Table Card */}
      <DeliveryPartnersTable />

    </div>
    </DashboardLayout>
  );
};

export default DeliveryPartnersPage;
