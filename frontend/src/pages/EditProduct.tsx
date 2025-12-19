import React from "react";
import { ArrowLeft, Plus } from "lucide-react";
import DashboardLayout from "../layouts/DashboardLayout";
import {useNavigate} from 'react-router-dom';

const EditProduct: React.FC = () => {
      const navigate = useNavigate();

  return (
    <DashboardLayout>
      <div className="min-h-screen bg-[#f7faff]">

        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <button className="w-9 h-9 rounded-full bg-white shadow flex items-center justify-center">
            <ArrowLeft onClick={() => navigate("/products")} size={16} />
          </button>
          <div>
            <h1 className="text-lg font-semibold text-gray-800">
              Edit Products
            </h1>
            <p className="text-sm text-gray-500">
              Edit available products
            </p>
          </div>
        </div>

        {/* Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* LEFT COLUMN */}
          <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm p-6">

            <h2 className="font-semibold text-gray-800 mb-4">
              Basic Information
            </h2>

            {/* Product Name & Brand */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="text-sm text-gray-600">
                  Product Name<span className="text-red-500">*</span>
                </label>
                <input
                  defaultValue="Basmati Rice"
                  className="mt-1 w-full border rounded-lg px-3 py-2 text-sm"
                />
              </div>

              <div>
                <label className="text-sm text-gray-600">
                  Brand<span className="text-red-500">*</span>
                </label>
                <select className="mt-1 w-full border rounded-lg px-3 py-2 text-sm">
                  <option>Dawaat</option>
                </select>
              </div>
            </div>

            {/* Description */}
            <div className="mb-4">
              <label className="text-sm text-gray-600">
                Description<span className="text-red-500">*</span>
              </label>
              <textarea
                defaultValue="Basmati Rice as Product Description..."
                className="mt-1 w-full border rounded-lg px-3 py-2 text-sm h-28 resize-none"
              />
              <p className="text-xs text-gray-400 mt-1">
                Description should be in 100–150 words.
              </p>
            </div>

            {/* Price / Discount */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <div>
                <label className="text-sm text-gray-600">
                  Price (Rs)<span className="text-red-500">*</span>
                </label>
                <input
                  defaultValue="260"
                  className="mt-1 w-full border rounded-lg px-3 py-2 text-sm"
                />
              </div>

              <div>
                <label className="text-sm text-gray-600">
                  Discount type<span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <select className="mt-1 w-full appearance-none border rounded-lg px-3 pr-10 py-2 text-sm">
                    <option>Percentage</option>
                    <option>Fixed</option>
                  </select>
                  <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">
                    ▼
                  </span>
                </div>
              </div>

              <div>
                <label className="text-sm text-gray-600">
                  Discount Value<span className="text-red-500">*</span>
                </label>
                <input
                  defaultValue="5"
                  className="mt-1 w-full border border-green-500 bg-green-50 rounded-lg px-3 py-2 text-sm"
                />
              </div>
            </div>

            {/* Product Tags */}
            <div className="mb-4">
              <label className="text-sm text-gray-600">
                Product Tags
              </label>
              <div className="mt-2 border border-green-500 bg-green-50 p-3 rounded-lg flex flex-wrap gap-2">
                {["Wafers", "Chocolates", "Biscuits"].map(tag => (
                  <span
                    key={tag}
                    className="bg-green-600 text-white text-sm px-3 py-1 rounded-full"
                  >
                    {tag} ×
                  </span>
                ))}
              </div>
            </div>

            {/* Product Images */}
            <div className="border p-3 rounded-lg border-gray-300">
              <label className="text-base text-gray-600">
                Products Images
              </label>

              <div className="mt-3 grid grid-cols-1 md:grid-cols-4 gap-4">
                {[1, 2].map(i => (
                  <div
                    key={i}
                    className="border rounded-lg p-2 flex items-center justify-center"
                  >
                    <img
                      src="/product/product-shirt.png"
                      alt="product"
                      className="h-24 object-contain"
                    />
                  </div>
                ))}

                <div className="border-2 border-dashed rounded-lg flex flex-col items-center justify-center text-gray-400">
                  <Plus />
                  <p className="text-xs mt-1 text-center">
                    Add More Product Images
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="space-y-6">

            {/* Categories */}
            <div className="bg-white rounded-2xl shadow-sm p-6">
              <h2 className="font-semibold text-gray-800 mb-4">
                Categories
              </h2>

              <select className="mt-1 w-full border rounded-lg px-3 py-2 text-sm mb-3">
                <option>Grocery & Kitchen</option>
              </select>

              <select className="mt-1 w-full border rounded-lg px-3 py-2 text-sm mb-3">
                <option>Atta, Rice & Dal</option>
              </select>

              <select className="mt-1 w-full border border-green-500 bg-green-50 rounded-lg px-3 py-2 text-sm">
                <option>Rice</option>
              </select>
            </div>

            {/* Inventory Settings */}
            <div className="bg-white rounded-2xl shadow-sm p-6">
              <h2 className="font-semibold text-gray-800 mb-4">
                Inventory Settings
              </h2>

              <input
                defaultValue="10018064001545"
                className="mt-1 w-full border rounded-lg px-3 py-2 text-sm mb-3"
              />

              <input
                defaultValue="200"
                className="mt-1 w-full border rounded-lg px-3 py-2 text-sm mb-3"
              />

              <input
                defaultValue="10"
                className="mt-1 w-full border border-green-500 bg-green-50 rounded-lg px-3 py-2 text-sm mb-3"
              />

              <input
                defaultValue="50"
                className="mt-1 w-full border rounded-lg px-3 py-2 text-sm"
              />
            </div>

            {/* Product Status */}
            <div className="bg-white rounded-2xl shadow-sm p-6">
              <h2 className="font-semibold text-gray-800 mb-4">
                Product Status
              </h2>
              <select className="w-full border rounded-lg px-3 py-2 text-sm">
                <option>🟢 Active</option>
                <option>🔴 Inactive</option>
              </select>
            </div>

            {/* Actions */}
            <div className="space-y-3">
              <button  onClick={() => navigate("/products")} className="w-full bg-green-600 text-white py-2 rounded-lg text-sm font-medium">
                Save Changes
              </button>
              <button className="w-full border py-2 rounded-lg text-sm text-gray-600">
                Cancel
              </button>
            </div>

          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default EditProduct;
