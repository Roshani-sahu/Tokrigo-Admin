import React from "react";
import { useNavigate } from "react-router-dom";
import DashboardLayout from "../../layouts/DashboardLayout";
import { Package, MapPin } from "lucide-react";

/* ================= METRICS ================= */
const stats = [
  { label: "Total Products (SKUs)", value: "450" },
  { label: "Total Products Units", value: "90000" },
  { label: "Low Stock Products", value: "200" },
  { label: "New Capacity Used (%)", value: "80%" },
  { label: "Total Stock Value", value: "Rs.1.23L" },
  { label: "Expired Products (SKU)", value: "20" },
  { label: "Operating Delivery Partners", value: "8 Riders" },
  { label: "Operating Staffs", value: "10 Staffs" },
];

/* ================= SKU CARD ================= */
const SkuCard = ({
  code,
  empty,
}: {
  code: string;
  empty?: boolean;
}) => (
  <div className="border rounded-xl p-3 text-center relative bg-white">
    {!empty ? (
      <>
        <span className="absolute top-2 right-2 text-red-500 text-xs">
          ✕
        </span>
        <img
          src="/product/kitkat.png"
          alt="KitKat"
          className="mx-auto h-16 mb-2"
        />
        <p className="text-xs font-medium">
          Nestle KitKat 4 Fingers Chocolate
        </p>
        <p className="text-[10px] text-green-600 mt-1">
          SKU: #c5b94_346784
        </p>
      </>
    ) : (
      <div className="flex flex-col items-center justify-center h-full text-gray-400 text-sm">
        <Package size={24} />
        Empty
      </div>
    )}
  </div>
);

/* ================= RACK ================= */
const Rack = ({
  title,
  items,
}: {
  title: string;
  items: { code: string; empty?: boolean }[];
}) => (
  <div className="mb-6">
    <h3 className="font-semibold mb-3">Rack no. [3x4] : {title}</h3>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
      {items.map((item, i) => (
        <SkuCard key={i} {...item} />
      ))}
    </div>
  </div>
);

/* ================= MAIN PAGE ================= */
const WarehouseOverview: React.FC = () => {
        const navigate = useNavigate();
    
  return (
    <DashboardLayout>
      <div className="min-h-screen bg-[#F7FAFF] ">
        {/* HEADER */}
        <div className="mb-4">
          <h1 className="text-lg font-semibold">
            Tokrigo_WH01 Warehouse
          </h1>
          <p className="text-sm text-gray-500 flex items-center gap-1">
            <MapPin size={14} />
            Vijay Nagar, Indore MP
          </p>
        </div>

        {/* STATS */}
       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
  {stats.map((s, i) => (
    <div
      key={i}
      className="bg-white rounded-2xl p-5 shadow-[0_8px_24px_rgba(0,0,0,0.04)] relative"
    >
      {/* ICON (TOP RIGHT) */}
      <div className="absolute top-4 right-4 w-9 h-9 bg-blue-100 rounded-lg flex items-center justify-center">
        <Package className="text-blue-600" size={18} />
      </div>

      {/* CONTENT */}
      <p className="text-sm text-gray-500 mb-1">
        {s.label}
      </p>

      <p className="text-xl font-semibold mt-7 text-gray-900">
        {s.value}
      </p>
    </div>
  ))}
</div>


        {/* RACK HEADER */}
        <div className="flex justify-between items-center mb-4">
          <div>
            <h2 className="font-semibold">
              Tokrigo_WH01 Warehouse – Racking Layout &
              SKUs Arrangement
            </h2>
            <p className="text-sm text-gray-500">
              Tokrigo’s Optimized Inventory Racking System
            </p>
          </div>
          <button onClick={() => navigate("/see-details1")} className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm">
            Manage Racks & SKUs Layout
          </button>
        </div>

        {/* RACK A */}
        <Rack
          title="A"
          items={[
            { code: "A1" },
            { code: "A2" },
            { code: "A3" },
            { code: "A4" },
            { code: "A5" },
            { code: "A6" },
            { code: "A7" },
            { code: "A8" },
            { code: "A9" },
            { code: "A10" },
            { code: "A11" },
            { code: "A12" },
          ]}
        />

        {/* RACK B */}
        <Rack
          title="B"
          items={[
            { code: "B1" },
            { code: "B2" },
            { code: "B3" },
            { code: "B4" },
            { code: "B5" },
            { code: "B6" },
            { code: "B7" },
            { code: "B8" },
            { code: "B9" },
            { code: "B10", empty: true },
            { code: "B11", empty: true },
            { code: "B12", empty: true },
          ]}
        />
      </div>
    </DashboardLayout>
  );
};

export default WarehouseOverview;
