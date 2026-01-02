import React, { useState, useMemo, useEffect } from "react";
import { Search, ChevronLeft, ChevronRight, Scooter, SlidersHorizontal , BookUser, Ban, SquareCheckBig, } from "lucide-react";

/* ================= TYPES ================= */
type RiderStatus = "Active" | "On Delivery" | "Waiting" | "InActive";

type Rider = {
  id: number;
  name: string;
  phone: string;
  deliveries: number;
  rating: number;
  status: RiderStatus;
  vehicle: string;

  joinedDate: string;
  vehicleReg: string;
  city: string;
  store: string;
  jobType: string;
  dob: string;
  gender: string;
  fatherName: string;
  aadhaar: string;
  pan: string;
  bankAcc: string;
  bankName: string;
  ifsc: string;

  profileImage: string;
  aadhaarImg: string;
  panImg: string;
  passbookImg: string;
};

/* ================= DATA ================= */
const initialRiders: Rider[] = [
  {
    id: 1,
    name: "Tarun Jain",
    phone: "+91 9876543210",
    deliveries: 18,
    rating: 4.5,
    status: "Active",
    vehicle: "Motorcycle",
    joinedDate: "23-12-2025",
    vehicleReg: "MP09 AB 1234",
    city: "Indore",
    store: "Shop No. 12, Vijay Nagar Main Road, Scheme No. 54, Indore, M.P.",
    jobType: "Full Time",
    dob: "11-Nov-2006",
    gender: "Male",
    fatherName: "Kqdfkquyedbf",
    aadhaar: "5461615526548",
    pan: "5116516441",
    bankAcc: "5468464654",
    bankName: "SBI",
    ifsc: "646YGSU6514CD",
    aadhaarImg: "/aadhar.png",
    panImg: "/aadhar.png",
    passbookImg: "/aadhar.png",
    profileImage: "/dashboard/avatar.png",
  },
  {
    id: 2,
    name: "Rohit Verma",
    phone: "+91 9123456780",
    deliveries: 12,
    rating: 4.2,
    status: "InActive",
    vehicle: "BaaliGaddi",
    joinedDate: "11-11-2025",
    vehicleReg: "MP04 XY 7788",
    city: "Bhopal",
    store: "MP Nagar Zone 1",
    jobType: "Part Time",
    dob: "09-Feb-2004",
    gender: "Male",
    fatherName: "Ram Verma",
    aadhaar: "874561234567",
    pan: "ABCDE1234F",
    bankAcc: "7894561230",
    bankName: "HDFC",
    ifsc: "HDFC0001234",
    aadhaarImg: "/aadhar.png",
    panImg: "/aadhar.png",
    passbookImg: "/aadhar.png",
    profileImage: "/dashboard/avatar.png",
  },
  {
    id: 2,
    name: "Rohit Verma",
    phone: "+91 9123456780",
    deliveries: 12,
    rating: 4.2,
    status: "InActive",
    vehicle: "BaaliGaddi",
    joinedDate: "11-11-2025",
    vehicleReg: "MP04 XY 7788",
    city: "Bhopal",
    store: "MP Nagar Zone 1",
    jobType: "Part Time",
    dob: "09-Feb-2004",
    gender: "Male",
    fatherName: "Ram Verma",
    aadhaar: "874561234567",
    pan: "ABCDE1234F",
    bankAcc: "7894561230",
    bankName: "HDFC",
    ifsc: "HDFC0001234",
    aadhaarImg: "/aadhar.png",
    panImg: "/aadhar.png",
    passbookImg: "/aadhar.png",
    profileImage: "/dashboard/avatar.png",
  },
  {
    id: 2,
    name: "Rohit Verma",
    phone: "+91 9123456780",
    deliveries: 12,
    rating: 4.2,
    status: "InActive",
    vehicle: "BaaliGaddi",
    joinedDate: "11-11-2025",
    vehicleReg: "MP04 XY 7788",
    city: "Bhopal",
    store: "MP Nagar Zone 1",
    jobType: "Part Time",
    dob: "09-Feb-2004",
    gender: "Male",
    fatherName: "Ram Verma",
    aadhaar: "874561234567",
    pan: "ABCDE1234F",
    bankAcc: "7894561230",
    bankName: "HDFC",
    ifsc: "HDFC0001234",
    aadhaarImg: "/aadhar.png",
    panImg: "/aadhar.png",
    passbookImg: "/aadhar.png",
    profileImage: "/dashboard/avatar.png",
  },
  {
    id: 2,
    name: "Rohit Verma",
    phone: "+91 9123456780",
    deliveries: 12,
    rating: 4.2,
    status: "InActive",
    vehicle: "BaaliGaddi",
    joinedDate: "11-11-2025",
    vehicleReg: "MP04 XY 7788",
    city: "Bhopal",
    store: "MP Nagar Zone 1",
    jobType: "Part Time",
    dob: "09-Feb-2004",
    gender: "Male",
    fatherName: "Ram Verma",
    aadhaar: "874561234567",
    pan: "ABCDE1234F",
    bankAcc: "7894561230",
    bankName: "HDFC",
    ifsc: "HDFC0001234",
    aadhaarImg: "/aadhar.png",
    panImg: "/aadhar.png",
    passbookImg: "/aadhar.png",
    profileImage: "/dashboard/avatar.png",
  },
];

/* ================= STATUS STYLE ================= */
const statusStyle = (status: RiderStatus) => {
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

/* ================= MODAL ================= */
const RiderDetailsModal = ({
  rider,
  onClose,
}: {
  rider: Rider;
  onClose: () => void;
}) => (
  <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center px-3">
    <div className="bg-white w-full max-w-3xl rounded-2xl p-6 relative max-h-[90vh]">

      <button
        onClick={onClose}
        className="absolute right-2 top-3 text-gray-400 hover:text-black"
      >
        ✕
      </button>

      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-semibold ">
          Delivery Partners Details
        </h2>
<img
  src={rider.profileImage}   // replace with your actual image path or URL
  alt="Thumbnail"
  className="w-16 h-16 rounded-lg object-cover bg-gray-200"
/>
      </div>

      <div className="overflow-y-auto  max-h-[72vh] pr-2">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">

          <Info label="Name" value={rider.name} />
          <Info label="Phone No." value={rider.phone} />
          <Info label="Joined Date" value={rider.joinedDate} />

          <Info label="Vehicle Type" value={rider.vehicle} />
          <Info label="Vehicle Reg. no." value={rider.vehicleReg} />
          <Info label="Selected City" value={rider.city} />

          <Info label="Selected Dark Store" value={rider.store} full />

          <Info label="Job Type" value={rider.jobType} />
          <Info label="Adhar no." value={rider.aadhaar} />
          <Info label="PAN no." value={rider.pan} />

          <Info label="D.O.B." value={rider.dob} />
          <Info label="Gender" value={rider.gender} />
          <Info label="Father Name" value={rider.fatherName} />

          <Info label="Bank acc. no." value={rider.bankAcc} />
          <Info label="Bank Name" value={rider.bankName} />
          <Info label="IFSC Code" value={rider.ifsc} />
        </div>

        {/* DOCUMENTS */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
          <DocumentCard title="Aadhaar" img={rider.aadhaarImg} />
          <DocumentCard title="PAN" img={rider.panImg} />
          <DocumentCard title="Passbook" img={rider.passbookImg} />
        </div>
      </div>
    </div>
  </div>
);

/* ================= HELPERS ================= */
const Info = ({
  label,
  value,
  full,
}: {
  label: string;
  value: string;
  full?: boolean;
}) => (
  <div className={full ? "md:col-span-3" : ""}>
    <p className="text-gray-400">{label}</p>
    <p className="font-medium text-gray-800">{value}</p>
  </div>
);

/* ================= DOCUMENT CARD ================= */
const DocumentCard = ({
  title,
  img,
}: {
  title: string;
  img: string;
}) => {
  const download = () => {
    const a = document.createElement("a");
    a.href = img;
    a.download = title;
    a.click();
  };

  return (
    <div className="relative border rounded-xl p-2 bg-gray-50">
      <div className="absolute top-2 right-2 flex gap-1">
        <button
          onClick={() => window.open(img, "_blank")}
          className="bg-white border rounded p-1 text-xs"
        >
          👁️
        </button>
        <button
          onClick={download}
          className="bg-white border rounded p-1 text-xs"
        >
          ⬇️
        </button>
      </div>

      <p className="text-sm text-gray-500 mb-1">{title}</p>
      <div className="h-28 bg-white rounded-lg overflow-hidden flex items-center justify-center">
        <img src={img} alt={title} className="object-contain h-full w-full" />
      </div>
    </div>
  );
};

/* ================= MAIN ================= */
const DeliveryPartnersTable: React.FC = () => {
  const [riders, setRiders] = useState<Rider[]>(initialRiders);
  const [selectedRider, setSelectedRider] = useState<Rider | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [filterOpen, setFilterOpen] = useState(false);

  const itemsPerPage = 5;

  // Filter and search riders
  const filteredRiders = useMemo(() => {
    return riders.filter((r) => {
      const matchesSearch =
        r.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        r.phone.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesStatus =
        statusFilter === "All" || r.status === statusFilter;
      return matchesSearch && matchesStatus;
    });
  }, [riders, searchTerm, statusFilter]);

  // Pagination
  const totalPages = Math.ceil(filteredRiders.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const displayRiders = filteredRiders.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  useEffect(() => {
    if (currentPage > totalPages && totalPages > 0) {
      setCurrentPage(1);
    }
  }, [currentPage, totalPages]);

  const toggleStatus = (id: number) => {
    setRiders((prev) =>
      prev.map((r) =>
        r.id === id
          ? { ...r, status: r.status === "InActive" ? "Active" : "InActive" }
          : r
      )
    );
  };

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <>
      <div className="bg-white rounded-2xl shadow-sm p-4 md:p-5">

        {/* RESPONSIVE HEADER */}
        <div className="flex flex-col gap-4 mb-4  md:flex-row md:justify-between md:items-center">
          

           <div className="flex items-center gap-2">
          <div className="w-12 h-12 bg-gray-100 text-green-600 rounded-lg flex items-center justify-center">
            <Scooter size={28} />
          </div>
          <h2 className="text-[16px] md:text-[18px] font-semibold text-[#2D2D2D]">
            All Delivery Partners of tokrigo
          </h2>
        </div>

          <div className="flex flex-wrap gap-2 items-center w-full md:w-auto">
            <div className="relative w-full sm:w-64">
              <Search className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search riders by name or phone..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-9 pr-3 py-2 text-sm border rounded-lg focus:outline-none"
              />
            </div>

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
                  {["All", "Active", "On Delivery", "Waiting", "InActive"].map(
                    (status) => (
                      <button
                        key={status}
                        onClick={() => {
                          setStatusFilter(status);
                          setCurrentPage(1);
                          setFilterOpen(false);
                        }}
                        className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-100 ${
                          statusFilter === status
                            ? "bg-gray-100 font-medium"
                            : ""
                        }`}
                      >
                        {status}
                      </button>
                    )
                  )}
                </div>
              )}
            </div>

            <div className="flex gap-2">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="border p-2 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors"
              >
                <ChevronLeft size={16} />
              </button>
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages || totalPages === 0}
                className="border p-2 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* TABLE */}
        <div className="hidden md:block rounded-lg overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-green-grad text-white">
                <th className="p-3 py-4 text-center">Rider</th>
                <th className="p-3 py-4 text-center">Phone</th>
                <th className="p-3 py-4 text-center">Deliveries</th>
                <th className="p-3 py-4 text-center">Rating</th>
                <th className="p-3 py-4 text-center">Status</th>
                <th className="p-3 py-4 text-center">Vehicle</th>
                <th className="p-3 py-4 text-center">Action</th>
              </tr>
            </thead>

            <tbody>
              {displayRiders.map((r) => (
                <tr key={r.id} className="border-b">
                  <td className="p-3 py-6 text-center">{r.name}</td>
                  <td className="p-3 py-6 text-center">{r.phone}</td>
                  <td className="p-3 py-6 text-center">{r.deliveries}</td>
                  <td className="p-3 py-6 text-center">⭐ {r.rating}</td>
                  <td className="p-3 py-6 text-center">
                    <span className={`px-3 py-1 rounded-full text-xs ${statusStyle(r.status)}`}>
                      {r.status}
                    </span>
                  </td>
                  <td className="p-3 text-center">{r.vehicle}</td>
                  <td className="p-3 text-center">
                    <div className="flex gap-2 justify-center">
                      <button
                        onClick={() => setSelectedRider(r)}
                        className="  rounded"
                      >
                        <BookUser className="text-blue-400" />
                      </button>
                      <button
                        onClick={() => toggleStatus(r.id)}
                        className={`w-8 h-8 rounded `}
                      >
                        {r.status === "InActive" ? <Ban className="text-red-500" /> : <SquareCheckBig className="text-green-500" />}
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
{/* MOBILE VIEW */}
<div className="md:hidden space-y-3">
  {displayRiders.map((r) => (
    <div
      key={r.id}
      className="bg-white border rounded-xl p-4 shadow-sm"
    >
      {/* TOP */}
      <div className="flex items-center gap-3 mb-3">
        <img
          src={r.profileImage}
          alt={r.name}
          className="w-12 h-12 rounded-lg object-cover bg-gray-200"
        />

        <div className="flex-1">
          <p className="font-semibold text-gray-800">{r.name}</p>
          <p className="text-sm text-gray-500">{r.phone}</p>
        </div>

        <span
          className={`px-3 py-1 rounded-full text-xs ${statusStyle(
            r.status
          )}`}
        >
          {r.status}
        </span>
      </div>

      {/* DETAILS */}
      <div className="grid grid-cols-2 gap-2 text-sm mb-3">
        <div>
          <p className="text-gray-400">Deliveries</p>
          <p className="font-medium">{r.deliveries}</p>
        </div>
        <div>
          <p className="text-gray-400">Rating</p>
          <p className="font-medium">⭐ {r.rating}</p>
        </div>
        <div>
          <p className="text-gray-400">Vehicle</p>
          <p className="font-medium">{r.vehicle}</p>
        </div>
        <div>
          <p className="text-gray-400">City</p>
          <p className="font-medium">{r.city}</p>
        </div>
      </div>

      {/* ACTIONS */}
      <div className="flex gap-2">
        <button
          onClick={() => setSelectedRider(r)}
          className="flex-1 py-2 rounded-lg bg-yellow-100 text-sm"
        >
          View Details
        </button>

        <button
          onClick={() => toggleStatus(r.id)}
          className={`flex-1 py-2 rounded-lg text-sm ${
            r.status === "InActive"
              ? "bg-green-100"
              : "bg-red-100"
          }`}
        >
          {r.status === "InActive" ? "Activate" : "Deactivate"}
        </button>
      </div>
    </div>
  ))}
</div>

        {/* Pagination Status */}
        <div className="flex items-center justify-between mt-6 pt-4 ">
          <div className="text-sm text-gray-500">
            Showing {filteredRiders.length > 0 ? startIndex + 1 : 0}-
            {Math.min(startIndex + itemsPerPage, filteredRiders.length)} of{" "}
            {filteredRiders.length} delivery partners
          </div>
        </div>
      </div>

      {selectedRider && (
        <RiderDetailsModal
          rider={selectedRider}
          onClose={() => setSelectedRider(null)}
        />
      )}
    </>
  );
};

export default DeliveryPartnersTable;
