import React, { useState } from "react";
import { Plus, Pencil, Trash2, X, Upload } from "lucide-react";
import DashboardLayout from "../layouts/DashboardLayout";


/* ================= TYPES ================= */
type Audience = "Customers" | "Delivery Partner";

type Banner = {
  id: number;
  banner: string;
  title: string;
  type: string;
  status: "Active";
  image?: string;
};

/* ================= INITIAL DATA ================= */
const initialData: Record<Audience, Banner[]> = {
  Customers: [
    {
      id: 1,
      banner: 'The "Green Organic" Standard',
      title: "Green Organic",
      type: "Offers and discount",
      status: "Active",
    },
    {
      id: 2,
      banner: "Weekend Mega Savings",
      title: "Mega Savings",
      type: "New Feature",
      status: "Active",
    },
  ],
  "Delivery Partner": [
    {
      id: 3,
      banner: "Farm-to-Door Freshness",
      title: "Freshness",
      type: "New service",
      status: "Active",
    },
    {
      id: 4,
      banner: "Doorstep Essentials Express",
      title: "Essentials Express",
      type: "Ads",
      status: "Active",
    },
  ],
};

/* ================= MODAL ================= */
const BannerModal = ({
  open,
  onClose,
  onSave,
  initial,
}: {
  open: boolean;
  onClose: () => void;
  onSave: (data: Omit<Banner, "id" | "status">) => void;
  initial?: Banner | null;
}) => {
  const [banner, setBanner] = useState( "");
  const [title, setTitle] = useState( "");
  const [type, setType] = useState( "");
  const [image, setImage] = useState<string | undefined>(undefined);

  React.useEffect(() => {
    if (initial) {
      setBanner(initial.banner);
      setTitle(initial.title);
      setType(initial.type);
      setImage(initial.image);
    } else {
      setBanner("");
      setTitle("");
      setType("");
      setImage(undefined);
    }
  }, [initial, open]);

  if (!open) return null;

  const handleImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setImage(URL.createObjectURL(file));
  };

  const handleSubmit = () => {
    if (!banner || !title || !type) {
      alert("All fields are required");
      return;
    }

    onSave({ banner, title, type, image });
    onClose();
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full z-50 bg-black/70 flex items-center justify-center">
      <div className="bg-white w-full max-w-sm rounded-2xl p-6 relative">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-400"
        >
          <X size={18} />
        </button>

        <h2 className="text-lg font-semibold mb-4">
          {initial ? "Edit Banner" : "Add New Banner"}
        </h2>

        {/* BANNER */}
        <label className="text-sm text-gray-600">Banner</label>
        <input
          value={banner}
          onChange={(e) => setBanner(e.target.value)}
          className="w-full border rounded-lg px-3 py-2 text-sm mb-3"
          placeholder="Enter banner text"
        />

        {/* TITLE */}
        <label className="text-sm text-gray-600">Title</label>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border rounded-lg px-3 py-2 text-sm mb-3"
          placeholder="Enter title"
        />

        {/* TYPE */}
        <label className="text-sm text-gray-600">Type</label>
        <input
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="w-full border rounded-lg px-3 py-2 text-sm mb-4"
          placeholder="Offers / Ads / Feature"
        />

        {/* IMAGE */}
        <label className="text-sm text-gray-600">Banner Image</label>
        <div className="bg-gray-200 rounded-xl p-5 mt-2 mb-6 text-center">
          {image ? (
            <img
              src={image}
              alt="Preview"
              className="mx-auto h-28 object-contain mb-3"
            />
          ) : (
            <>
              <Upload className="mx-auto text-gray-500 mb-2" />
              <p className="text-xs text-gray-500 mb-2">
                PNG, JPG or PDF (max. 800x400px)
              </p>
            </>
          )}

          <input
            type="file"
            accept="image/*"
            id="upload"
            className="hidden"
            onChange={handleImage}
          />
          <label
            htmlFor="upload"
            className="inline-block bg-green-600 text-white px-4 py-2 rounded-lg text-sm cursor-pointer"
          >
            Choose from device
          </label>
        </div>

        {/* ACTIONS */}
        <div className="flex justify-between">
          <button onClick={onClose} className="text-sm text-gray-500">
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm"
          >
            {initial ? "Update Banner" : "Create Banner"}
          </button>
        </div>
      </div>
    </div>
  );
};

/* ================= MAIN PAGE ================= */
const OffersAds: React.FC = () => {
  const [audience, setAudience] = useState<Audience>("Customers");
  const [banners, setBanners] =
    useState<Record<Audience, Banner[]>>(initialData);
  const [openModal, setOpenModal] = useState(false);
  const [editing, setEditing] = useState<Banner | null>(null);
  const [deleteTarget, setDeleteTarget] = useState<Banner | null>(null);


  const handleSave = (data: Omit<Banner, "id" | "status">) => {
    if (editing) {
      setBanners((prev) => ({
        ...prev,
        [audience]: prev[audience].map((b) =>
          b.id === editing.id ? { ...b, ...data } : b
        ),
      }));
      setEditing(null);
    } else {
      setBanners((prev) => ({
        ...prev,
        [audience]: [
          {
            id: Date.now(),
            status: "Active",
            ...data,
          },
          ...prev[audience],
        ],
      }));
    }
  };

//   const handleDelete = (id: number) => {
//     if (!confirm("Delete this banner?")) return;
//     setBanners((prev) => ({
//       ...prev,
//       [audience]: prev[audience].filter((b) => b.id !== id),
//     }));
//   };

  const DeleteConfirmModal = ({
  open,
  onClose,
  onConfirm,
  title = "Delete Banner",
  description = "Are you sure you want to delete this banner? This action cannot be undone.",
}: {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title?: string;
  description?: string;
}) => {
  if (!open) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-full z-50 bg-black/70 flex items-center justify-center">
      <div className="bg-white w-full max-w-sm rounded-2xl p-6">
        {/* HEADER */}
        <h3 className="text-lg font-semibold text-gray-800 mb-2">
          {title}
        </h3>

        {/* MESSAGE */}
        <p className="text-sm text-gray-500 mb-6">
          {description}
        </p>

        {/* ACTIONS */}
        <div className="flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 text-sm border rounded-lg"
          >
            Cancel
          </button>

          <button
            onClick={onConfirm}
            className="px-4 py-2 text-sm bg-red-600 text-white rounded-lg"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};


  return (
    <DashboardLayout>
    <div className="min-h-screen ">
<div className="mb-6">
        <h1 className="text-lg font-semibold text-gray-800">
          Offers & Ads
        </h1>
        <p className="text-sm text-gray-400">
          Manage promotional codes and discounts
        </p>
      </div>
      <div className="bg-white rounded-xl shadow-sm p-5">
        {/* TOP BAR */}
        <div className="flex flex-col gap-3 mb-6 md:flex-row md:items-center md:justify-between">
          {/* LEFT */}
          <div className="flex items-center gap-2">
            <span className="font-medium">Banners</span>
            <select
              value={audience}
              onChange={(e) => setAudience(e.target.value as Audience)}
              className="border rounded px-3 py-2 text-sm"
            >
              <option>Customers</option>
              <option>Delivery Partner</option>
            </select>
          </div>

          {/* RIGHT */}
          <button
            onClick={() => {
              setEditing(null);
              setOpenModal(true);
            }}
            className="w-full md:w-auto bg-green-600 text-white px-4 py-2 rounded-lg text-sm flex items-center justify-center gap-2 hover:bg-green-700 transition"
          >
            <Plus size={18} />
            Add Banner
          </button>
        </div>

        {/* TABLE */}
        <table className="w-full text-sm hidden md:table">
          <thead>
            <tr className="text-gray-500 border-b text-left">
              <th className="py-4 font-semibold text-gray-600">Banner</th>
              <th className="py-4 font-semibold text-gray-600">Title</th>
              <th className="py-4 font-semibold text-gray-600">Type</th>
              <th className="py-4 font-semibold text-gray-600">Status</th>
              <th className="py-4 font-semibold text-gray-600">Actions</th>
            </tr>
          </thead>
          <tbody>
            {banners[audience].map((b) => (
              <tr key={b.id} className="border-b hover:bg-gray-50 transition">
                <td className="py-4 text-gray-800">{b.banner}</td>
                <td className="py-4 text-gray-800">{b.title}</td>
                <td className="py-4 text-gray-800">{b.type}</td>
                <td className="py-4">
                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-medium">
                    Active
                  </span>
                </td>
                <td className="py-4 flex gap-3">
                  <button
                    onClick={() => {
                      setEditing(b);
                      setOpenModal(true);
                    }}
                    className="text-blue-500 hover:text-blue-700 hover:bg-blue-50 p-2 rounded transition"
                    title="Edit banner"
                  >
                    <Pencil size={16} />
                  </button>
                  <button
                    onClick={() => setDeleteTarget(b)}
                    className="text-red-500 hover:text-red-700 hover:bg-red-50 p-2 rounded transition"
                    title="Delete banner"
                  >
                    <Trash2 size={16} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* MOBILE VIEW */}
        <div className="md:hidden space-y-3">
  {banners[audience].map((b) => (
    <div
      key={b.id}
      className="bg-white border rounded-xl p-4 shadow-sm"
    >
      {/* HEADER */}
      <div className="flex justify-between items-start mb-2">
        <div>
          <p className="font-semibold text-gray-800">{b.banner}</p>
          <p className="text-sm text-gray-500">{b.title}</p>
        </div>

        <span className="bg-green-100 text-green-600 px-3 py-1 rounded text-xs">
          {b.status}
        </span>
      </div>

      {/* DETAILS */}
      <div className="grid grid-cols-2 gap-3 text-sm mb-3">
        <div>
          <p className="text-xs text-gray-400">Type</p>
          <p className="font-medium">{b.type}</p>
        </div>
      </div>

      {/* ACTIONS */}
      <div className="flex gap-2">
        <button
          onClick={() => {
            setEditing(b);
            setOpenModal(true);
          }}
          className="flex-1 border py-2 rounded-lg text-sm"
        >
          Edit
        </button>

        <button
          onClick={() => setDeleteTarget(b)}
          className="flex-1 border py-2 rounded-lg text-sm text-red-600"
        >
          Delete
        </button>
      </div>
    </div>
  ))}
</div>
      </div>

      <DeleteConfirmModal
  open={!!deleteTarget}
  onClose={() => setDeleteTarget(null)}
  onConfirm={() => {
    if (!deleteTarget) return;

    setBanners((prev) => ({
      ...prev,
      [audience]: prev[audience].filter(
        (b) => b.id !== deleteTarget.id
      ),
    }));

    setDeleteTarget(null);
  }}
/>


      <BannerModal
        open={openModal}
        onClose={() => {
          setOpenModal(false);
          setEditing(null);
        }}
        onSave={handleSave}
        initial={editing}
      />
    </div>
    </DashboardLayout>
  );
};

export default OffersAds;
