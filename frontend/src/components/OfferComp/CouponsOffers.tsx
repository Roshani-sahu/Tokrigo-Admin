import React, { useEffect, useMemo, useState } from "react";
import {
  Plus,
  Copy,
  Filter,
  Gift,
  Award,
  Search,
  X,
  TrendingUp,
  UsersRound,
  ChevronLeft,
  ChevronRight,
  Form,
  Edit,
  Trash
} from "lucide-react";

/* ================= STATS ================= */
const stats = [
  {
    title: "Total Referrals",
    value: "1,245",
    icon: UsersRound,
    colour: "text-blue-500",
    bg: "bg-blue-100",
  },
  {
    title: "Point Earned",
    value: "34,890",
    icon: Gift,
    colour: "text-green-500",
    bg: "bg-green-100",
  },
  {
    title: "Active Users",
    value: 892,
    icon: TrendingUp,
    colour: "text-purple-500",
    bg: "bg-purple-100",
  },
  {
    title: "Rewards Redeemed",
    value: 456,
    icon: Award,
    colour: "text-orange-500",
    bg: "bg-orange-100",
  },
];

/* ================= TYPES ================= */
type Coupon = {
  code: string;
  type: "Percentage" | "Fixed";
  value: string;
  minOrder: string;
  usage: string;
  validUntil: string;
  status: "Active" | "Expired";
};

/* ================= INITIAL DATA ================= */
const initialCoupons: Coupon[] = [
  {
    code: "WELCOME20",
    type: "Percentage",
    value: "20%",
    minOrder: "$50",
    usage: "245 / 1000",
    validUntil: "2025-12-31",
    status: "Active",
  },
  {
    code: "SAVE10",
    type: "Fixed",
    value: "$10",
    minOrder: "$30",
    usage: "567 / 2000",
    validUntil: "2025-12-31",
    status: "Active",
  },
  {
    code: "FIRSTORDER",
    type: "Percentage",
    value: "25%",
    minOrder: "$40",
    usage: "892 / 1500",
    validUntil: "2025-12-15",
    status: "Active",
  },
  {
    code: "SUMMER50",
    type: "Fixed",
    value: "$50",
    minOrder: "$100",
    usage: "456 / 500",
    validUntil: "2025-06-30",
    status: "Expired",
  },
];

/* ================= MAIN ================= */
const CouponsOffers: React.FC = () => {
  const [couponList, setCouponList] = useState<Coupon[]>(initialCoupons);
  const [openModal, setOpenModal] = useState(false);
  const [editCoupon, setEditCoupon] = useState<Coupon | null>(null);

  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] =
    useState<"All" | "Active" | "Expired">("All");
  const [filterOpen, setFilterOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 4;

  const [form, setForm] = useState({
    code: "",
    type: "",
    value: "",
    minOrder: "",
    validUntil: "",
  });

  /* ================= SEARCH + FILTER ================= */
  const filteredCoupons = useMemo(() => {
    return couponList.filter((c) => {
      const matchesSearch = c.code
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const matchesStatus =
        statusFilter === "All" || c.status === statusFilter;
      return matchesSearch && matchesStatus;
    });
  }, [couponList, searchTerm, statusFilter]);

  /* ================= PAGINATION ================= */
  const totalPages = Math.ceil(filteredCoupons.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;

  const paginatedCoupons = filteredCoupons.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, statusFilter]);

  /* ================= ACTIONS ================= */
  const handleDelete = (code: string) => {
    setCouponList((prev) => prev.filter((c) => c.code !== code));
  };

  const handleEdit = (coupon: Coupon) => {
    setEditCoupon(coupon);
    setOpenModal(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    if (editCoupon) {
      setCouponList((prev) =>
        prev.map((c) =>
          c.code === editCoupon.code
            ? {
                ...c,
                code: form.code,
                type: form.type as any,
                value:
                  form.type === "Percentage"
                    ? `${form.value}%`
                    : `$${form.value}`,
                minOrder: `$${form.minOrder}`,
                validUntil: form.validUntil,
              }
            : c
        )
      );
    } else {
      setCouponList((prev) => [
        ...prev,
        {
          code: form.code,
          type: form.type as any,
          value:
            form.type === "Percentage"
              ? `${form.value}%`
              : `$${form.value}`,
          minOrder: `$${form.minOrder}`,
          usage: "0 / 0",
          validUntil: form.validUntil,
          status: "Active",
        },
      ]);
    }

    setOpenModal(false);
    setEditCoupon(null);
    setForm({
      code: "",
      type: "",
      value: "",
      minOrder: "",
      validUntil: "",
    });
  };

  /* ================= PREFILL EDIT ================= */
  useEffect(() => {
    if (editCoupon) {
      setForm({
        code: editCoupon.code,
        type: editCoupon.type,
        value: editCoupon.value.replace("%", "").replace("$", ""),
        minOrder: editCoupon.minOrder.replace("$", ""),
        validUntil: editCoupon.validUntil,
      });
    }
  }, [editCoupon]);

  return (
    <div className="bg-[#f7faff] min-h-screen ">
      {/* ================= HEADER ================= */}
      <div className="mb-6 flex flex-col md:flex-row justify-between gap-4">
        <div>
          <h1 className="text-xl font-semibold">Coupons & Discounts</h1>
          <p className="text-sm text-gray-500">
            Manage promotional codes and discounts
          </p>
        </div>

        <button
          onClick={() => setOpenModal(true)}
          className="flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-lg text-sm"
        >
          <Plus size={16} /> Create Coupon
        </button>
      </div>

      {/* ================= STATS ================= */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        {stats.map((s) => (
          <div
            key={s.title}
            className="bg-white rounded-xl p-4 flex justify-between"
          >
            <div>
              <p className="text-sm">{s.title}</p>
              <p className="text-xl font-semibold mt-4">{s.value}</p>
            </div>
            <div
              className={`w-10 h-10 flex items-center justify-center rounded-lg ${s.bg}`}
            >
              {React.createElement(s.icon, {
                size: 20,
                className: s.colour,
              })}
            </div>
          </div>
        ))}
      </div>

      {/* ================= CARD ================= */}
      <div className="bg-white rounded-2xl p-4">


           <div className="flex flex-col md:flex-row justify-between">
             <div className="flex items-center mb-5 gap-2">
           <div className="w-12 h-12 bg-gray-100 text-green-600 rounded-lg flex items-center justify-center"> 
            <Form size={28} />
             </div> 
           <h2 className="text-[16px] md:text-[18px] font-semibold text-[#2D2D2D]"> All Coupons </h2> 
           </div>



        {/* CONTROLS */}
        <div className="flex flex-wrap gap-2 mb-4">
          <div className="relative w-full sm:w-64">
            <Search className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" />
            <input
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search coupon..."
              className="w-full pl-9 pr-3 py-2 border rounded-lg text-sm"
            />
          </div>

          <div className="relative">
            <button
              onClick={() => setFilterOpen((p) => !p)}
              className="flex items-center gap-1 px-3 py-2 border rounded-lg text-sm"
            >
              <Filter size={14} /> Filter
            </button>

            {filterOpen && (
              <div className="absolute right-0 mt-2 w-32 bg-white border rounded-lg shadow-lg z-50">
                {["All", "Active", "Expired"].map((s) => (
                  <button
                    key={s}
                    onClick={() => {
                      setStatusFilter(s as any);
                      setFilterOpen(false);
                    }}
                    className={`w-full px-4 py-2 text-left text-sm hover:bg-gray-100 ${
                      statusFilter === s ? "bg-gray-100 font-medium" : ""
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            )}
          </div>

          <button
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            disabled={currentPage === 1}
            className="border p-2 rounded-lg"
          >
            <ChevronLeft size={16} />
          </button>
          <button
            onClick={() =>
              setCurrentPage((p) => Math.min(totalPages, p + 1))
            }
            disabled={currentPage === totalPages}
            className="border p-2 rounded-lg"
          >
            <ChevronRight size={16} />
          </button>
        </div>
           </div>


       

        {/* ================= DESKTOP TABLE ================= */}
        <div className="hidden md:block overflow-x-auto rounded-xl">
          <table className="w-full text-sm ">
            <thead className="bg-green-grad text-white ">
              <tr>
                <th className="p-3 py-5 text-center">Coupon</th>
                <th className="p-3 py-5 text-center">Type</th>
                <th className="p-3 py-5 text-center">Value</th>
                <th className="p-3 py-5 text-center">Min Order</th>
                <th className="p-3 py-5 text-center">Usage</th>
                <th className="p-3 py-5 text-center">Valid Until</th>
                <th className="p-3 py-5 text-center">Status</th>
                <th className="p-3 py-5 text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {paginatedCoupons.map((c) => (
                <tr key={c.code} className="border-b hover:bg-gray-50">
                  <td className="p-3 py-6 text-center font-mono"><div className=" p-3 flex justify-center items-center gap-2"> <span className="bg-gray-100 px-3 py-1 rounded-md font-mono"> {c.code} </span> <Copy size={14} className="text-gray-400" /> </div> </td>
                  <td className="p-3 py-6 text-center">{c.type}</td>
                  <td className="p-3 py-6 text-center">{c.value}</td>
                  <td className="p-3 py-6 text-center">{c.minOrder}</td>
                  <td className="p-3 py-6 text-center">{c.usage}</td>
                  <td className="p-3 py-6 text-center">{c.validUntil}</td>
                  <td className="p-3 py-6 text-center">
                    <span
                      className={`px-3 py-1 rounded-full text-xs ${
                        c.status === "Active"
                          ? "bg-green-100 text-green-600"
                          : "bg-gray-100 text-gray-500"
                      }`}
                    >
                      {c.status}
                    </span>
                  </td>
                  <td className="p-3">
                    <div className="flex gap-2 justify-center">
                      <button
                        onClick={() => handleEdit(c)}
                        className=" text-blue-400 rounded"
                      >
                        <Edit />
                      </button>
                      <button
                        onClick={() => handleDelete(c.code)}
                        className=" text-red-500 rounded"
                      >
                        <Trash />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* ================= MOBILE ================= */}
        <div className="md:hidden space-y-4">
          {paginatedCoupons.map((c) => (
            <div key={c.code} className="border rounded-xl p-4">
              <div className="flex justify-between mb-2">
                <p className="font-mono font-semibold">{c.code}</p>
                <span
                  className={`px-3 py-1 rounded-full text-xs ${
                    c.status === "Active"
                      ? "bg-green-100 text-green-600"
                      : "bg-gray-100 text-gray-500"
                  }`}
                >
                  {c.status}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-2 text-sm text-gray-600">
                <p>Type: {c.type}</p>
                <p>Value: {c.value}</p>
                <p>Min: {c.minOrder}</p>
                <p>Usage: {c.usage}</p>
              </div>

              <p className="text-gray-500 mt-2">
                Valid Till: {c.validUntil}
              </p>

              <div className="flex gap-2 mt-4">
                <button
                  onClick={() => handleEdit(c)}
                  className="flex-1 py-2 rounded bg-yellow-100"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(c.code)}
                  className="flex-1 py-2 rounded bg-red-100"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>

        <p className="text-sm text-gray-500 mt-4">
          Showing {startIndex + 1}–
          {Math.min(startIndex + itemsPerPage, filteredCoupons.length)} of{" "}
          {filteredCoupons.length} coupons
        </p>
      </div>

      {/* ================= MODAL ================= */}
      {openModal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center px-4 z-50">
          <div className="bg-white max-w-md w-full rounded-2xl p-6 relative">
            <button
              onClick={() => setOpenModal(false)}
              className="absolute top-4 right-4"
            >
              <X size={18} />
            </button>

            <h2 className="font-semibold mb-4">
              {editCoupon ? "Edit Coupon" : "Create Coupon"}
            </h2>

            <div className="space-y-3 text-sm">
              <input
                name="code"
                value={form.code}
                onChange={handleChange}
                placeholder="Coupon Code"
                className="w-full border px-3 py-2 rounded-lg"
              />
              <select
                name="type"
                value={form.type}
                onChange={handleChange}
                className="w-full border px-3 py-2 rounded-lg"
              >
                <option value="">Select Type</option>
                <option value="Percentage">Percentage</option>
                <option value="Fixed">Fixed</option>
              </select>
              <input
                name="value"
                value={form.value}
                onChange={handleChange}
                placeholder="Value"
                className="w-full border px-3 py-2 rounded-lg"
              />
              <input
                name="minOrder"
                value={form.minOrder}
                onChange={handleChange}
                placeholder="Min Order"
                className="w-full border px-3 py-2 rounded-lg"
              />
              <input
                type="date"
                name="validUntil"
                value={form.validUntil}
                onChange={handleChange}
                className="w-full border px-3 py-2 rounded-lg"
              />
            </div>

            <div className="flex gap-2 mt-5">
              <button
                onClick={handleSubmit}
                className="flex-1 bg-green-500 text-white py-2 rounded-lg"
              >
                Save
              </button>
              <button
                onClick={() => setOpenModal(false)}
                className="flex-1 border py-2 rounded-lg"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CouponsOffers;
