import React, { useState } from "react";
import { Settings as SettingsIcon, Pencil } from "lucide-react";
import DashboardLayout from "../layouts/DashboardLayout";

const Settings: React.FC = () => {
  const [isEditing, setIsEditing] = useState(false);

  const handleSave = () => {
    // 🔗 API call goes here later
    setIsEditing(false);
  };

  return (
    <DashboardLayout>
      <div className="bg-[#f7faff]">

        {/* Page Header */}
        <div className="mb-6">
          <h1 className="text-lg font-semibold text-gray-800">
            Settings
          </h1>
          <p className="text-sm text-gray-500">
            Manage your application settings
          </p>
        </div>

        {/* Settings Card */}
        <div className="relative max-w-xl bg-white rounded-2xl shadow-sm p-6">

          {/* Edit Icon (Top Right) */}
          <button
            onClick={() => setIsEditing(true)}
            className={`absolute top-4 right-4 p-2 rounded-lg border ${
              isEditing ? "hidden" : "hover:bg-gray-100"
            }`}
          >
            <Pencil size={16} />
          </button>

          {/* Card Header */}
          <div className="flex items-center gap-2 mb-5">
            <div className="w-10 h-10 rounded-lg bg-[#3F6BA18F] flex items-center justify-center">
              <SettingsIcon size={24} className="text-white" />
            </div>
            <h2 className="font-semibold text-gray-800">
              General Settings
            </h2>
          </div>

          {/* Form */}
          <div className="space-y-4">

            {/* App Name */}
            <div>
              <label className="text-sm text-gray-600">
                App Name<span className="text-red-500">*</span>
              </label>
              <input
                disabled={!isEditing}
                defaultValue="TokriGo"
                className={`mt-1 w-full border rounded-lg px-3 py-2 text-sm ${
                  !isEditing && "bg-gray-100 cursor-not-allowed"
                }`}
              />
            </div>

            {/* Base Value */}
            <div>
              <label className="text-sm text-gray-600">
                Base Value
              </label>
              <input
                disabled={!isEditing}
                defaultValue="100"
                className={`mt-1 w-full border rounded-lg px-3 py-2 text-sm ${
                  !isEditing && "bg-gray-100 cursor-not-allowed"
                }`}
              />
            </div>

            {/* TokriGo Coin Value */}
            <div>
              <label className="text-sm text-gray-600">
                TokriGo coin value
              </label>
              <input
                disabled={!isEditing}
                defaultValue="250"
                className={`mt-1 w-full border rounded-lg px-3 py-2 text-sm ${
                  !isEditing && "bg-gray-100 cursor-not-allowed"
                }`}
              />
            </div>

            {/* Discount + Minimum Order */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-gray-600">
                  Reward Discount Percentage Value (%)
                  <span className="text-red-500">*</span>
                </label>
                <input
                  disabled={!isEditing}
                  defaultValue="5"
                  className={`mt-1 w-full border rounded-lg px-3  py-2 text-sm ${
                    !isEditing && "bg-gray-100 cursor-not-allowed"
                  }`}
                />
              </div>

              <div>
                <label className="text-sm text-gray-600">
                  Minimum Order Amount (Rs)
                  <span className="text-red-500">*</span>
                </label>
                <input
                  disabled={!isEditing}
                  defaultValue="5000"
                  className={`mt-7 w-full border rounded-lg px-3 py-2 text-sm ${
                    !isEditing && "bg-gray-100 cursor-not-allowed"
                  }`}
                />
              </div>
            </div>

            {/* Save Button (Only in Edit Mode) */}
            {isEditing && (
              <button
                onClick={handleSave}
                className="w-full bg-green-600 hover:bg-green-700 text-white text-sm font-medium py-2 rounded-lg mt-4"
              >
                Save Changes
              </button>
            )}

          </div>
        </div>

      </div>
    </DashboardLayout>
  );
};

export default Settings;
