import { Box, AlertTriangle } from "lucide-react";

/* ================= STATS ================= */
const collabStats = [
  {
    title: "Total Collaborations",
    value: "1,245",
    icon: <Box size={18} />,
    bg: "bg-blue-100",
    colour: "text-blue-600",
  },
  {
    title: "Active Partnership",
    value: "1,245",
    icon: <AlertTriangle size={18} />,
    bg: "bg-orange-100",
    colour: "text-orange-600",
  },
  {
    title: "Pending Approval",
    value: "1,245",
    icon: <Box size={18} />,
    bg: "bg-blue-100",
    colour: "text-blue-600",
  },
  {
    title: "Expired Collaboration",
    value: "1,245",
    icon: <Box size={18} />,
    bg: "bg-blue-100",
    colour: "text-blue-600",
  },
  {
    title: "Revenue From Collaboration",
    value: "1,245",
    icon: <Box size={18} />,
    bg: "bg-blue-100",
    colour: "text-blue-600",
  },
];

/* ================= TABLE DATA ================= */
const collaborations = [
  {
    brand: "Tata Sampann",
    image:
      "/icons/tataIcon.png",
    type: "Promotional",
    start: "02-03-2025",
    end: "02-05-2025",
    commission: "18%",
    status: "Active",
  },
  {
    brand: "Aashirvaad",
    image:
      "/icons/tataIcon.png",
    type: "Exclusive Brand",
    start: "10-02-2025",
    end: "10-06-2025",
    commission: "22%",
    status: "Active",
  },
];

const Collaboration = () => {
  return (
    <div className="mt-8">
      {/* ================= HEADER ================= */}
      <h2 className="text-lg font-semibold text-gray-800">
        Collaboration & Partnership Management
      </h2>
      <p className="text-sm text-gray-500 mb-4">
        Manage brand collaborations and partnerships
      </p>

      {/* ================= STATS ================= */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-6">
        {collabStats.map((s, i) => (
          <div
            key={i}
            className="relative group bg-white rounded-2xl p-5 shadow-sm overflow-hidden cursor-pointer"
          >
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm text-gray-500 h-[40px]">
                  {s.title}
                </p>
                <p className="text-lg mt-4 font-semibold text-gray-800">
                  {s.value}
                </p>
              </div>

              <div
                className={`w-10 h-10 flex items-center justify-center rounded-lg ${s.bg} ${s.colour}`}
              >
                {s.icon}
              </div>
            </div>

            {/* HOVER OVERLAY */}
            <div className="absolute inset-0 pointer-events-none">
              <div
                className="absolute top-0 left-0 right-0 h-[65%]
                           bg-black/20
                           opacity-0 group-hover:opacity-100
                           transition duration-300"
              />
              <div
                className="absolute bottom-0 left-0 right-0 h-[35%]
                           bg-green-500
                           flex items-center justify-center
                           text-white text-sm font-medium
                           opacity-0 group-hover:opacity-100
                           transition duration-300"
              >
                <span className="flex items-center gap-2">
                  See Details <span className="text-lg">→</span>
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ================= TABLE ================= */}
      <div className="bg-white rounded-2xl shadow-sm p-5">
        {/* TABLE HEADER */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
          <h3 className="font-semibold text-gray-800">
            Collaborations Overview
          </h3>

          <div className="flex items-center gap-2">
            <input
              placeholder="Search brands here..."
              className="px-4 py-2 text-sm border rounded-lg focus:outline-none"
            />
            <button className="px-3 py-2 border rounded-lg text-sm">
              Filter
            </button>
          </div>
        </div>

        {/* TABLE */}
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-green-100">
                <th className="p-3 text-left">Brand Identity</th>
                <th className="p-3 text-left">Collab Type</th>
                <th className="p-3 text-left">Start Date</th>
                <th className="p-3 text-left">End Date</th>
                <th className="p-3 text-left">Commission</th>
                <th className="p-3 text-left">Status</th>
              </tr>
            </thead>

            <tbody>
              {collaborations.map((c, i) => (
                <tr key={i} className="border-b hover:bg-gray-50">
                  {/* BRAND + IMAGE */}
                  <td className="p-3">
                    <div className="flex items-center gap-3">
                      <img
                        src={c.image}
                        alt={c.brand}
                        className="w-8 h-8 rounded-full border object-contain bg-white"
                      />
                      <span className="font-medium text-gray-800">
                        {c.brand}
                      </span>
                    </div>
                  </td>

                  <td className="p-3">
                    <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded text-xs">
                      {c.type}
                    </span>
                  </td>

                  <td className="p-3">{c.start}</td>
                  <td className="p-3">{c.end}</td>
                  <td className="p-3">{c.commission}</td>

                  <td className="p-3">
                    <span className="bg-green-100 text-green-600 px-3 py-1 rounded text-xs">
                      {c.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* MOBILE VIEW */}
<div className="md:hidden space-y-3">
  {collaborations.map((c, i) => (
    <div
      key={i}
      className="bg-white border rounded-xl p-4 shadow-sm"
    >
      {/* HEADER */}
      <div className="flex items-center gap-3 mb-3">
        <img
          src={c.image}
          alt={c.brand}
          className="w-10 h-10 rounded-full border object-contain bg-white"
        />

        <div className="flex-1">
          <p className="font-semibold text-gray-800">{c.brand}</p>
          <span className="inline-block mt-1 bg-orange-100 text-orange-600 px-3 py-1 rounded text-xs">
            {c.type}
          </span>
        </div>

        <span className="bg-green-100 text-green-600 px-3 py-1 rounded text-xs">
          {c.status}
        </span>
      </div>

      {/* DETAILS */}
      <div className="grid grid-cols-2 gap-3 text-sm">
        <div>
          <p className="text-gray-400 text-xs">Start Date</p>
          <p className="font-medium">{c.start}</p>
        </div>

        <div>
          <p className="text-gray-400 text-xs">End Date</p>
          <p className="font-medium">{c.end}</p>
        </div>

        <div>
          <p className="text-gray-400 text-xs">Commission</p>
          <p className="font-medium">{c.commission}</p>
        </div>
      </div>
    </div>
  ))}
</div>

      </div>
    </div>
  );
};

export default Collaboration;
