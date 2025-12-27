import React, { useEffect, useState } from "react";
import {
  Plus,
  Copy,
  Filter,
  Gift,
  TrendingUp,
  Award,
  Search,
  X,
  UsersRound,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";




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

  const [form, setForm] = useState({
    code: "",
    type: "",
    value: "",
    minOrder: "",
    usageLimit: "",
    validUntil: "",
  });

  /* ================= FORM HANDLING ================= */
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleDelete = (code: string) => {
    setCouponList((prev) => prev.filter((c) => c.code !== code));
  };

  const handleEdit = (coupon: Coupon) => {
    setEditCoupon(coupon);
    setOpenModal(true);
  };

  const handleSubmit = () => {
    if (editCoupon) {
      setCouponList((prev) =>
        prev.map((c) =>
          c.code === editCoupon.code
            ? {
                ...c,
                code: form.code,
                type: form.type as "Percentage" | "Fixed",
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
          type: form.type as "Percentage" | "Fixed",
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
      usageLimit: "",
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
        usageLimit: "",
        validUntil: editCoupon.validUntil,
      });
    }
  }, [editCoupon]);

  return (
    <div className="bg-[#f7faff] min-h-screen ">

      {/* ================= HEADER ================= */}
      <div className="mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
            <h1 className="text-xl font-semibold text-[#353535]">
          Coupons & Discounts
        </h1>
        <p className="text-sm text-gray-500">
          Manage promotional codes and discounts
        </p>
        </div>

         <button
              onClick={() => setOpenModal(true)}
              className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium"
            >
              <Plus size={16} /> Create Coupon
            </button>
      </div>

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
        {/* <p className="text-xs text-gray-400">
          {s.subtitle}
        </p> */}
        <p className="text-xl font-semibold pt-5 text-gray-900">
          {s.value}
        </p>
      </div>

      {/* Top-right image */}
      <div className={`w-10 h-10 flex items-center justify-center rounded-lg ${s.bg}`}>
        {/* <img
          src="/icons/rider.png"
          alt={s.title}
          className="w-5 h-5 object-contain"
        /> */}
        {React.createElement(s.icon, { size: 20, className: s.colour })}
      </div>
    </div>
  ))}
</div>


      {/* ================= CARD ================= */}
      <div className="bg-white rounded-2xl shadow-sm p-4">

        {/* HEADER CONTROLS */}
             <div className="flex flex-col gap-4 mb-4  md:flex-row md:justify-between md:items-center">
          <h2 className="text-lg font-semibold">
            All Coupons
          </h2>

          <div className="flex flex-wrap gap-2 items-center w-full md:w-auto">
            <div className="relative w-full sm:w-64">
              <Search className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" />
              <input
                placeholder="Search riders by phone..."
                className="w-full pl-9 pr-3 py-2 text-sm border rounded-lg"
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

        {/* ================= DESKTOP TABLE ================= */}
        <div className="hidden md:block rounded-xl overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-green-100">
                <th className="p-3 text-center">Coupon</th>
                <th className="p-3 text-center">Type</th>
                <th className="p-3 text-center">Value</th>
                <th className="p-3 text-center">Min Order</th>
                <th className="p-3 text-center">Usage</th>
                <th className="p-3 text-center">Valid Until</th>
                <th className="p-3 text-center">Status</th>
                <th className="p-3 text-center">Action</th>
              </tr>
            </thead>

            <tbody>
              {couponList.map((c) => (
                <tr key={c.code} className="border-b hover:bg-gray-50">
 <div className=" p-3 flex justify-center items-center gap-2">
                      <span className="bg-gray-100 px-3 py-1 rounded-md font-mono">
                        {c.code}
                      </span>
                      <Copy size={14} className="text-gray-400" />
                    </div>                  
                  <td className="p-3 text-center">{c.type}</td>
                  <td className="p-3 text-center">{c.value}</td>
                  <td className="p-3 text-center">{c.minOrder}</td>
                  <td className="p-3 text-center">{c.usage}</td>
                  <td className="p-3 text-center">{c.validUntil}</td>
                  <td className="p-3 text-center">
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
                        className="w-8 h-8 rounded bg-yellow-100 flex items-center justify-center"
                      >
                        ✏️
                      </button>
                      <button
                        onClick={() => handleDelete(c.code)}
                        className="w-8 h-8 rounded bg-red-100 flex items-center justify-center"
                      >
                        🗑️
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
          {couponList.map((c) => (
            <div
              key={c.code}
              className="bg-white border rounded-xl p-4 shadow-sm text-sm"
            >
              <div className="flex justify-between items-center mb-2">
                <p className="font-semibold font-mono">{c.code}</p>
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

              <div className="grid grid-cols-2 gap-2 text-gray-600">
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
      </div>

      {/* ================= MODAL ================= */}
      {openModal && (
        <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center px-4">
          <div className="bg-white w-full max-w-md rounded-2xl p-6 relative">

            <button
              onClick={() => {
                setOpenModal(false);
                setEditCoupon(null);
              }}
              className="absolute right-4 top-4 text-gray-400"
            >
              <X size={18} />
            </button>

            <h2 className="text-lg font-semibold mb-5">
              {editCoupon ? "Edit Coupon" : "Create New Coupon"}
            </h2>

            <div className="space-y-4 text-sm">
              <Input label="Coupon Code" name="code" value={form.code} onChange={handleChange} />
              <Select label="Discount Type" name="type" value={form.type} onChange={handleChange} />
              <Input label="Discount Value" name="value" value={form.value} onChange={handleChange} />
              <Input label="Min Order Amount ($)" name="minOrder" value={form.minOrder} onChange={handleChange} />
              <Input label="Valid Until" type="date" name="validUntil" value={form.validUntil} onChange={handleChange} />
            </div>

            <div className="flex gap-3 mt-6">
              <button
                onClick={handleSubmit}
                className="flex-1 bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg"
              >
                {editCoupon ? "Update Coupon" : "Create Coupon"}
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

/* ================= HELPERS ================= */
const Input = ({ label, ...props }: any) => (
  <div>
    <label className="text-gray-500">{label}</label>
    <input {...props} className="w-full mt-1 px-3 py-2 border rounded-lg" />
  </div>
);

const Select = ({ label, ...props }: any) => (
  <div>
    <label className="text-gray-500">{label}</label>
    <select {...props} className="w-full mt-1 px-3 py-2 border rounded-lg">
      <option value="">Select type</option>
      <option value="Percentage">Percentage</option>
      <option value="Fixed">Fixed</option>
    </select>
  </div>
);

export default CouponsOffers;
