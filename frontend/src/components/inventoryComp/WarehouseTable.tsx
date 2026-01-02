import React, { useState, useMemo, useEffect } from "react";
import { Search, ChevronLeft, ChevronRight, SlidersHorizontal, TrendingUp } from "lucide-react";
import { useNavigate } from "react-router-dom";


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
const warehouses: Warehouse[] = [
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
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [filterOpen, setFilterOpen] = useState(false);
  const [warehouseList, setWarehouseList] = useState(warehouses);

  const itemsPerPage = 5;

  // Filter and search warehouses
  const filteredWarehouses = useMemo(() => {
    return warehouseList.filter((w) => {
      const matchesSearch =
        w.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        w.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
        w.manager.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesStatus =
        statusFilter === "All" || w.status === statusFilter;
      return matchesSearch && matchesStatus;
    });
  }, [warehouseList, searchTerm, statusFilter]);

  // Pagination
  const totalPages = Math.ceil(filteredWarehouses.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const displayWarehouses = filteredWarehouses.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  useEffect(() => {
    if (currentPage > totalPages && totalPages > 0) {
      setCurrentPage(1);
    }
  }, [currentPage, totalPages]);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };
    const navigate = useNavigate();


  return (
    <div className="bg-white rounded-2xl shadow-sm p-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-4">
        <div className="flex items-center gap-2">
          <div className="w-12 h-12 bg-gray-100 text-green-600 rounded-lg flex items-center justify-center">
            <TrendingUp size={28} />
          </div>
          <h3 className="font-semibold text-gray-800">
            Tokrigo Warehouse Overview
          </h3>
        </div>

        <div className="flex items-center gap-2">
          {/* Search */}
          <div className="relative w-full sm:w-64">
            <Search className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search warehouse..."
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
                {["All", "Active", "Maintenance"].map((status) => (
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
          <div className="flex items-center gap-2">
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

      {/* Desktop Table */}
      <div className="hidden md:block overflow-x-auto rounded-xl">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-green-grad text-white h-[52px]">
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
            {displayWarehouses.map((w) => (
              <tr key={w.id} className="border-b text-center hover:bg-gray-50">
                <td className="p-3">{w.name}</td>

                {/* Truncated Location */}
                <td className="p-2 max-w-[140px] truncate" title={w.location}>
                  {w.location.length > 15
                    ? `${w.location.slice(0, 15)}...`
                    : w.location}
                </td>

                <td className="p-3">
                  <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-lg text-xs">
                    {w.type}
                  </span>
                </td>

                <td className="p-6">{w.capacity}</td>
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
                  <button onClick={() => navigate("/see-details")} className="text-blue-600 border border-blue-500 px-3 py-1 rounded-lg text-xs">
                    See Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Cards */}
      <div className="md:hidden space-y-4">
        {displayWarehouses.map((w) => (
          <div
            key={w.id}
            className="bg-white border rounded-xl p-4 shadow-sm text-sm"
          >
            <div className="flex justify-between items-start mb-3">
              <div>
                <h3 className="font-semibold text-gray-800">{w.name}</h3>
                <p className="text-xs text-gray-500 mt-0.5">{w.location}</p>
              </div>
              <span
                className={`px-2 py-1 rounded text-[10px] font-medium ${
                  w.status === "Maintenance"
                    ? "bg-orange-100 text-orange-600"
                    : "bg-green-100 text-green-600"
                }`}
              >
                {w.status}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-4 py-3 border-y border-gray-50 my-3">
              <div>
                <p className="text-[10px] text-gray-400 uppercase tracking-wider mb-0.5">
                  Type
                </p>
                <p className="font-medium text-gray-700">{w.type}</p>
              </div>
              <div>
                <p className="text-[10px] text-gray-400 uppercase tracking-wider mb-0.5">
                  Manager
                </p>
                <p className="font-medium text-gray-700">{w.manager}</p>
              </div>
              <div>
                <p className="text-[10px] text-gray-400 uppercase tracking-wider mb-0.5">
                  Capacity
                </p>
                <p className="font-medium text-gray-700">{w.capacity}</p>
              </div>
              <div>
                <p className="text-[10px] text-gray-400 uppercase tracking-wider mb-0.5">
                  Used
                </p>
                <p className="font-medium text-[#546CFC]">{w.usedCapacity}</p>
              </div>
            </div>

            <button className="w-full py-2.5 rounded-lg border border-blue-500 text-blue-600 font-medium text-xs hover:bg-blue-50 transition-colors">
              See Details
            </button>
          </div>
        ))}
      </div>

      {/* Pagination Status */}
      <div className="flex items-center justify-between mt-6 pt-4 ">
        <div className="text-sm text-gray-500">
          Showing {filteredWarehouses.length > 0 ? startIndex + 1 : 0}-
          {Math.min(startIndex + itemsPerPage, filteredWarehouses.length)} of{" "}
          {filteredWarehouses.length} warehouses
        </div>
      </div>
    </div>
  );
};

export default WarehouseTable;
