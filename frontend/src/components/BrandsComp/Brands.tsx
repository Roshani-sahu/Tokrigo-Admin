import { Box, AlertTriangle, Search, Filter } from "lucide-react";

/* ================= STATS DATA ================= */
const brandStats = [
  {
    title: "Total Brands Available",
    value: "1,245",
    icon: <Box size={18} />,
    bg: "bg-blue-100",
    colour: "text-blue-600",
  },
  {
    title: "Live Brand Promotions",
    value: "1,245",
    icon: <AlertTriangle size={18} />,
    bg: "bg-orange-100",
    colour: "text-orange-600",
  },
  {
    title: "Top Selling Brands",
    value: "1,245",
    icon: <Box size={18} />,
    bg: "bg-blue-100",
    colour: "text-blue-600",
  },
  {
    title: "Low Stock Brands",
    value: "1,245",
    icon: <Box size={18} />,
    bg: "bg-blue-100",
    colour: "text-blue-600",
  },
  {
    title: "Inactive or blocked Brands",
    value: "1,245",
    icon: <Box size={18} />,
    bg: "bg-blue-100",
    colour: "text-blue-600",
  },
];

/* ================= TABLE DATA ================= */
const brandsTable = [
  {
    name: "Tata Sampann",
    image: "/icons/tataIcon.png",
    sales: "Rs. 45,000/-",
    units: "450",
    returnRate: "4%pm",
    frequency: "60%pm",
    rating: "4.5",
    deadStock: "0%",
  },
  {
    name: "Tata Sampann",
    image: "/icons/tataIcon.png",
    sales: "Rs. 45,000/-",
    units: "450",
    returnRate: "4%pm",
    frequency: "60%pm",
    rating: "4.5",
    deadStock: "0%",
  },
  {
    name: "Tata Sampann",
    image: "/icons/tataIcon.png",
    sales: "Rs. 45,000/-",
    units: "450",
    returnRate: "4%pm",
    frequency: "60%pm",
    rating: "4.5",
    deadStock: "0%",
  },
  {
    name: "Tata Sampann",
    image: "/icons/tataIcon.png",
    sales: "Rs. 45,000/-",
    units: "450",
    returnRate: "4%pm",
    frequency: "60%pm",
    rating: "4.5",
    deadStock: "0%",
  },
  {
    name: "Tata Sampann",
    image: "/icons/tataIcon.png",
    sales: "Rs. 45,000/-",
    units: "450",
    returnRate: "4%pm",
    frequency: "60%pm",
    rating: "4.5",
    deadStock: "0%",
  },
  {
    name: "Tata Sampann",
    image: "/icons/tataIcon.png",
    sales: "Rs. 45,000/-",
    units: "450",
    returnRate: "4%pm",
    frequency: "60%pm",
    rating: "4.5",
    deadStock: "0%",
  },
  {
    name: "Aashirvaad",
    image: "/icons/tataIcon.png",
    sales: "Rs. 38,200/-",
    units: "390",
    returnRate: "3%pm",
    frequency: "55%pm",
    rating: "4.2",
    deadStock: "1%",
  },
];

/* ================= COMPONENT ================= */
const Brands = () => {
  return (
    <div>
      {/* HEADER */}
      <h1 className="text-xl font-semibold text-gray-800">
        Brands & Collaborations
      </h1>
      <p className="text-sm text-gray-500 mb-4">
        Manage promotional codes and discounts
      </p>

      {/* ================= STATS ================= */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-6">
        {brandStats.map((s, i) => (
          <div
            key={i}
            className="relative group bg-white rounded-2xl p-5 shadow-sm overflow-hidden cursor-pointer"
          >
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm text-gray-500 w-[80%] h-[40px]">
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

            {/* Hover Overlay */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-0 h-[65%] w-full bg-black/20 opacity-0 group-hover:opacity-100 transition" />
              <div className="absolute bottom-0 h-[35%] w-full bg-green-500 flex items-center justify-center text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition">
                See Detailed Products →
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ================= TABLE CARD ================= */}
      <div className="bg-white rounded-2xl shadow-sm p-5">
        {/* TABLE HEADER */}
        <div className="flex flex-col gap-4 mb-4 md:flex-row md:items-center md:justify-between">
  
  {/* TITLE */}
  <h3 className="font-semibold text-gray-800 text-base md:text-lg">
    Brands Performance Analytics
  </h3>

  {/* CONTROLS */}
  <div className="flex flex-col sm:flex-row gap-2 w-full md:w-auto">
    
    {/* SEARCH */}
    <div className="relative w-full sm:w-64">
      <Search className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" />
      <input
        placeholder="Search Brands here..."
        className="w-full pl-9 pr-3 py-2 text-sm border rounded-lg focus:outline-none"
      />
    </div>

    {/* FILTER */}
    <button className="w-full sm:w-auto px-3 py-2 border rounded-lg text-sm flex items-center justify-center gap-1">
      <Filter size={14} />
      Filter
    </button>
  </div>
</div>


        {/* TABLE */}
        <div className="hidden rounded-xl md:block overflow-x-auto">
          <table className="w-full  text-sm">
            <thead>
              <tr className="bg-green-100 ">
                <th className="p-3 text-left">Brands Identity</th>
                <th className="p-3 text-left">Net Sales</th>
                <th className="p-3 text-left">Unit Sold</th>
                <th className="p-3 text-left">Return Rate</th>
                <th className="p-3 text-left">Order Frequency</th>
                <th className="p-3 text-left">Avg. Rating</th>
                <th className="p-3 text-left">Dead Stock %</th>
              </tr>
            </thead>

            <tbody>
              {brandsTable.map((b, i) => (
                <tr key={i} className="border-b hover:bg-gray-50">
                  {/* BRAND WITH IMAGE */}
                  <td className="p-3">
                    <div className="flex items-center gap-2">
                      <img
                        src={b.image}
                        alt={b.name}
                        className="w-8 h-8 rounded-full object-contain bg-gray-100"
                      />
                      <span className="font-medium">{b.name}</span>
                    </div>
                  </td>

                  <td className="p-3">{b.sales}</td>
                  <td className="p-3">{b.units}</td>
                  <td className="p-3">{b.returnRate}</td>
                  <td className="p-3">{b.frequency}</td>

                  {/* RATING */}
                  <td className="p-3 text-yellow-500 flex items-center gap-1">
                    ⭐ {b.rating}
                  </td>

                  <td className="p-3">{b.deadStock}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* MOBILE VIEW Table*/}
<div className="md:hidden space-y-3 ">
  {brandsTable.map((b, i) => (
    <div
      key={i}
      className="bg-white border rounded-xl p-4 shadow-sm"
    >
      {/* HEADER */}
      <div className="flex items-center gap-3 mb-3">
        <img
          src={b.image}
          alt={b.name}
          className="w-10 h-10 rounded-full object-contain bg-gray-100"
        />
        <div>
          <p className="font-semibold text-gray-800">{b.name}</p>
          <p className="text-sm text-yellow-500">⭐ {b.rating}</p>
        </div>
      </div>

      {/* DATA */}
      <div className="grid grid-cols-2 gap-3 text-sm">
        <div>
          <p className="text-gray-400 text-xs">Net Sales</p>
          <p className="font-medium">{b.sales}</p>
        </div>

        <div>
          <p className="text-gray-400 text-xs">Units Sold</p>
          <p className="font-medium">{b.units}</p>
        </div>

        <div>
          <p className="text-gray-400 text-xs">Return Rate</p>
          <p className="font-medium">{b.returnRate}</p>
        </div>

        <div>
          <p className="text-gray-400 text-xs">Order Frequency</p>
          <p className="font-medium">{b.frequency}</p>
        </div>

        <div>
          <p className="text-gray-400 text-xs">Dead Stock %</p>
          <p className="font-medium">{b.deadStock}</p>
        </div>
      </div>
    </div>
  ))}
</div>

      </div>
    </div>
  );
};

export default Brands;
