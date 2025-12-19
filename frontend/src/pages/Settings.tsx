import React from "react";
import { Settings as SettingsIcon } from "lucide-react";
import DashboardLayout from "../layouts/DashboardLayout";

const Settings: React.FC = () => {
  return (
    <DashboardLayout>
    <div className=" bg-[#f7faff] ">

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
      <div className="max-w-xl bg-white rounded-2xl shadow-sm p-6">

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
            required
              defaultValue="TokriGo"
              className="mt-1 w-full border rounded-lg px-3 py-2 text-sm"
            />
          </div>

          {/* Base Value */}
          <div>
            <label className="text-sm text-gray-600">
              Base Value
            </label>
            <input
              defaultValue="100"
              className="mt-1 w-full border rounded-lg px-3 py-2 text-sm"
            />
          </div>

          {/* TokriGo Coin Value */}
          <div>
            <label className="text-sm text-gray-600">
              TokriGo coin value
            </label>
            <input
              defaultValue="250"
              className="mt-1 w-full border rounded-lg px-3 py-2 text-sm"
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
                defaultValue="5"
                required
                className="mt-1 w-full border rounded-lg px-3 py-2 text-sm"
              />
            </div>

            <div>
              <label className="text-sm  text-gray-600">
                Minimum Order Amount (Rs)
                <span className="text-red-500">*</span>
              </label>
              <input
                defaultValue="5000"
                required
                className="mt-7 w-full border  rounded-lg px-3 py-2 text-sm"
              />
            </div>
          </div>

          {/* Save Button */}
          <button className="w-full bg-green-600 hover:bg-green-700 text-white text-sm font-medium py-2 rounded-lg mt-2">
            Save Changes
          </button>

        </div>
      </div>

    </div>
    </DashboardLayout>
  );
};

export default Settings;
