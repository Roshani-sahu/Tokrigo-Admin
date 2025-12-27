import { Search, ChevronLeft, ChevronRight } from "lucide-react";

/* ================= TYPES ================= */
type Warehouse = {
  id: number;
  name: string;
  location: string;
  type: string;
  capacity: string;
  usedCapacity: string;
  status: "Active" | "Maintenance";
  manager: string;
};

/* ================= DATA ================= */
const warehouseList: Warehouse[] = [
  {
    id: 1,
    name: "Tokrigo_WH01",
    location: "Vijay Nagar, Indore",
    type: "Dark Store",
    capacity: "2000 Kgs",
    usedCapacity: "1550 Kgs",
    status: "Active",
    manager: "Tarun Jain",
  },
  {
    id: 2,
    name: "Tokrigo_WH02",
    location: "Scheme No. 54, Indore",
    type: "Dark Store",
    capacity: "2000 Kgs",
    usedCapacity: "1550 Kgs",
    status: "Active",
    manager: "Tarun Jain",
  },
  {
    id: 3,
    name: "Tokrigo_WH03",
    location: "Rajendra Nagar, Indore",
    type: "Dark Store",
    capacity: "2000 Kgs",
    usedCapacity: "1550 Kgs",
    status: "Maintenance",
    manager: "Tarun Jain",
  },
  {
    id: 4,
    name: "Tokrigo_WH04",
    location: "Palasia Square, Indore",
    type: "Dark Store",
    capacity: "2000 Kgs",
    usedCapacity: "1550 Kgs",
    status: "Active",
    manager: "Tarun Jain",
  },
];

/* ================= COMPONENT ================= */
const WarehouseTable = () => {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-6">

      {/* Header */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-4">
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 rounded bg-[#EAF0FF] flex items-center justify-center">
            <img
              src="/icons/GraphIcon.png"
              alt="Graph"
              className="w-8 h-8 object-contain"
            />
          </div>
          <h3 className="font-semibold text-gray-800">
            Tokrigo Warehouse Overview
          </h3>
        </div>

        <div className="flex items-center gap-2">
          <div className="relative">
            <Search className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" />
            <input
              placeholder="Search warehouse..."
              className="pl-9 pr-3 py-2 text-sm border rounded-lg"
            />
          </div>

          <button className="px-3 py-2 border rounded-lg text-sm">
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

      {/* Table */}
      <div className="overflow-x-auto rounded-xl">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-green-100">
              <th className="p-4 text-center font-semibold">Warehouse</th>
              <th className="p-3 text-center font-semibold">Location</th>
              <th className="p-3 text-center font-semibold">Type</th>
              <th className="p-3 text-center font-semibold">Capacity (Kgs)</th>
              <th className="p-3 text-center font-semibold">
                Used Capacity (Kgs)
              </th>
              <th className="p-3 text-center font-semibold">Status</th>
              <th className="p-3 text-center font-semibold">Manager Name</th>
              <th className="p-3 text-center font-semibold">Action</th>
            </tr>
          </thead>

          <tbody>
            {warehouseList.map((w) => (
              <tr
                key={w.id}
                className="border-b text-center hover:bg-gray-50"
              >
                <td className="p-3">{w.name}</td>

                {/* Truncated Location */}
                <td
                  className="p-2 max-w-[140px] truncate"
                  title={w.location}
                >
                  {w.location.length > 15
                    ? `${w.location.slice(0, 15)}...`
                    : w.location}
                </td>

                <td className="p-3">
                  <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-lg text-xs">
                    {w.type}
                  </span>
                </td>

                <td className="p-3">{w.capacity}</td>
                <td className="p-3">{w.usedCapacity}</td>

                <td className="p-3">
                  <span
                    className={`px-3 py-1 rounded-lg text-xs ${
                      w.status === "Maintenance"
                        ? "bg-orange-100 text-orange-600"
                        : "bg-green-100 text-green-600"
                    }`}
                  >
                    {w.status}
                  </span>
                </td>

                <td className="p-3">{w.manager}</td>

                <td className="p-3">
                  <button className="text-blue-600 border border-blue-500 px-3 py-1 rounded-lg text-xs">
                    See Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default WarehouseTable;
