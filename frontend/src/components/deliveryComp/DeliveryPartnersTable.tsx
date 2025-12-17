import React from "react";
import { Search, Filter, ChevronLeft, ChevronRight } from "lucide-react";


type Rider = {
  name: string;
  phone: string;
  deliveries: number;
  rating: number;
  status: "Active" | "On Delivery" | "Waiting" | "InActive";
  vehicle: string;
};

const riders: Rider[] = Array.from({ length: 9 }).map((_, i) => ({
  name: "Tarun jain",
  phone: "+91 ******708",
  deliveries: 18,
  rating: 4.5,
  status:
    i === 1 ? "On Delivery" :
    i === 3 ? "Waiting" :
    i === 6 ? "InActive" :
    "Active",
  vehicle:
    i === 1 ? "BaaliGaddi" :
    i === 3 ? "SpaceShip" :
    i === 6 ? "Rail Gaddi" :
    "Motorcycle",
}));

const statusStyle = (status: Rider["status"]) => {
  switch (status) {
    case "Active":
      return "bg-green-100 text-green-600";
    case "On Delivery":
      return "bg-purple-100 text-purple-600";
    case "Waiting":
      return "bg-orange-100 text-orange-600";
    case "InActive":
      return "bg-red-100 text-red-600";
  }
};

const DeliveryPartnersTable: React.FC = () => {
  return (
    <>
     <div className="bg-white rounded-2xl shadow-sm p-4 md:p-5">
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
           All Delivery Partners of tokrigo
          </h2>
        </div>

          <div className="flex flex-wrap gap-2 items-center">
            <div className="relative">
              <Search className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" />
              <input
                placeholder="Search riders by phone..."
                className="pl-9 pr-3 py-2 text-sm border rounded-lg"
              />
            </div>

            <button className="flex items-center gap-1 px-3 py-2 border rounded-lg text-sm">
              <Filter size={14} /> Filter
            </button>

            <button className="border p-2 rounded-lg">
              <ChevronLeft size={16} />
            </button>
            <button className="border p-2 rounded-lg">
              <ChevronRight size={16} />
            </button>
          </div>
        </div>

        {/* Table */}
       {/* ================= DESKTOP TABLE ================= */}
      <div className="hidden  rounded-xl md:block overflow-x-auto">
        <table className="w-full  text-sm">
          <thead>
            <tr className="bg-green-100 text-heading">
              <th className="p-3  text-left">
                {/* <input type="checkbox" /> */}
                </th>
              <th className="p-3 text-center">Riders</th>
              <th className="p-3 text-center">Phone No.</th>
              <th className="p-3 text-center">Total Deliveries</th>
              <th className="p-3 text-center">Rider Rating</th>
              <th className="p-3 text-center">Status</th>
              <th className="p-3 text-center">Vehicle Type</th>
              <th className="p-3 text-center">Action</th>
            </tr>
          </thead>

          <tbody>
            {riders.map((r, i) => (
              <tr key={i} className="border-b hover:bg-gray-50">
                <td className="p-3 text-center"><input type="checkbox" /></td>
                <td className="p-3 text-center">{r.name}</td>
                <td className="p-3 text-center">{r.phone}</td>
                <td className="p-3 text-center">{r.deliveries}</td>
                <td className="p-3 flex items-center justify-center gap-1">
                  ⭐ {r.rating}
                </td>
                <td className="p-3 text-center">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${statusStyle(r.status)}`}>
                    {r.status}
                  </span>
                </td>
                <td className="p-3 text-center">{r.vehicle}</td>
                <td className="p-3">
                  <div className="flex justify-center gap-2">
                    <button className="w-8 h-8 bg-yellow-100 rounded">📄</button>
                    <button className={`w-8 h-8 rounded ${r.status === "InActive" ? "bg-green-100" : "bg-red-100"}`}>
                      {r.status === "InActive" ? "✅" : "🚫"}
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
        {riders.map((r, i) => (
          <div key={i} className="border rounded-xl p-4 shadow-sm space-y-2 text-sm">
            <div className="flex justify-between items-center">
              <p className="font-semibold">{r.name}</p>
              <span className={`px-3 py-1 rounded-full text-xs ${statusStyle(r.status)}`}>
                {r.status}
              </span>
            </div>

            <p className="text-gray-500">{r.phone}</p>

            <div className="grid grid-cols-2 gap-2 text-gray-600">
              <p>Deliveries: {r.deliveries}</p>
              <p>Rating: ⭐ {r.rating}</p>
              <p>Vehicle: {r.vehicle}</p>
            </div>

            <div className="flex gap-2 pt-2">
              <button className="flex-1 py-2 bg-yellow-100 rounded">View</button>
              <button className={`flex-1 py-2 rounded ${r.status === "InActive" ? "bg-green-100" : "bg-red-100"}`}>
                {r.status === "InActive" ? "Activate" : "Block"}
              </button>
            </div>
          </div>
        ))}
      </div>
      </div>
      
    </>
  );
};

export default DeliveryPartnersTable;
