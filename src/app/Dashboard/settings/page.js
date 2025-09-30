"use client";

import React, { useState } from "react";
import Image from "next/image";
import Sidebar from "../../../components/sidebar";
import { Bell, Share2 } from "lucide-react";

const ProfilePage = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [search, setSearch] = useState("");

  const [formData, setFormData] = useState({
    fullName: "Richard Azie",
    email: "richardazie@email.com",
    phone: "+1 202-555-0171",
    role: "Trader",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleUpdateProfile = () => alert("Profile updated! (connect to backend here)");
  const handleRenewPlan = () => alert("Renew subscription clicked!");
  const handleChangePassword = () => alert("Change password clicked!");

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Main content */}
      <div className="flex-1 pl-64 p-6 space-y-8">
        {/* Header */}
        <header className="bg-white shadow-sm rounded-xl px-4 py-3 flex items-center justify-between">
          {/* Search */}
          <div className="flex-1 max-w-md">
            <div className="relative">
              <span className="absolute inset-y-0 left-3 flex items-center text-gray-400">
                🔍
              </span>
              <input
                type="text"
                placeholder="Search Product"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-200 text-sm focus:ring-2 focus:ring-emerald-500"
              />
            </div>
          </div>

          {/* Icons + Profile */}
          <div className="flex items-center gap-3">
            <button className="p-2 rounded-full hover:bg-gray-100">
              <Bell className="w-5 h-5 text-gray-600" />
            </button>
            <button className="p-2 rounded-full hover:bg-gray-100">
              <Share2 className="w-5 h-5 text-gray-600" />
            </button>
            <div className="flex items-center gap-2 bg-white shadow px-3 py-2 rounded-xl">
              <div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center text-white font-medium">
                A
              </div>
              <div className="hidden sm:block">
                <p className="text-sm font-medium">TechBiz Solutions</p>
                <p className="text-xs text-gray-500">
                  IT service & Digital solutions
                </p>
              </div>
            </div>
          </div>
        </header>

        {/* Profile Section */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-4">Profile</h2>
          <div className="flex items-center mb-6">
            <Image
              src="/images/barber.png"
              alt="Profile"
              width={80}
              height={80}
              className="rounded-full"
            />
            <div className="ml-4">
              <p className="font-medium">{formData.fullName}</p>
              <p className="text-sm text-gray-500">{formData.email}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <InputField
              label="Full Name"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
            />
            <InputField
              label="Email"
              name="email"
              value={formData.email}
              disabled
            />
            <InputField
              label="Role"
              name="role"
              value={formData.role}
              onChange={handleChange}
            />
            <InputField
              label="Phone Number"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>

          <div className="mt-6 text-right">
            <button
              onClick={handleUpdateProfile}
              className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700"
            >
              Update Profile
            </button>
          </div>
        </div>

        {/* Subscription Section */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-4">Subscription</h2>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between">
            <div>
              <p className="text-gray-700 font-medium">Annual Plan - Active</p>
              <p className="text-sm text-gray-500">Next Renewal: Dec 7, 2024</p>
            </div>
            <div className="flex gap-2 mt-4 sm:mt-0">
              <button className="px-4 py-2 border rounded-md text-gray-600 hover:bg-gray-100">
                Billing History
              </button>
              <button
                onClick={handleRenewPlan}
                className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
              >
                Renew Subscription
              </button>
            </div>
          </div>
        </div>

        {/* Security Section */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-4">Security</h2>
          <button
            onClick={handleChangePassword}
            className="px-4 py-2 border rounded-md text-gray-600 hover:bg-gray-100"
          >
            Change Password
          </button>
        </div>
      </div>
    </div>
  );
};

const InputField = ({ label, name, value, onChange, disabled }) => (
  <div>
    <label className="block text-sm font-medium text-gray-600">{label}</label>
    <input
      type="text"
      name={name}
      value={value}
      onChange={onChange}
      disabled={disabled}
      className={`mt-1 block w-full rounded-md border border-gray-300 p-2 ${
        disabled ? "bg-gray-100 cursor-not-allowed" : ""
      }`}
    />
  </div>
);

export default ProfilePage;
