"use client";

import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import {
  FiHome,
  FiBox,
  FiFileText,
  FiSettings,
  FiBell,
  FiShare2,
  FiEye,
  FiShoppingCart,
} from "react-icons/fi";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import AddListingModal from "./Listing/page";

// Sidebar nav items
const navItems = [
  { name: "Home", href: "/dashboard", icon: FiHome },
  { name: "Products/Services", href: "/dashboard/products", icon: FiBox },
  { name: "Orders/Inquiries", href: "/dashboard/orders", icon: FiFileText },
  { name: "Settings", href: "/dashboard/settings", icon: FiSettings },
];

// Business Overview cards
const cards = [
  { title: "Products and Services", value: "24", subtitle: "Active Listings", icon: FiBox },
  { title: "Orders & Inquiries", value: "18", subtitle: "Pending responses", icon: FiShoppingCart },
  { title: "Profile Views", value: "1,123", subtitle: "Monthly Traffic", icon: FiEye },
];

// Chart data
const chartData = [
  { day: "Mon", views: 1200 },
  { day: "Tue", views: 1800 },
  { day: "Wed", views: 9000 },
  { day: "Thu", views: 3200 },
  { day: "Fri", views: 4200 },
  { day: "Sat", views: 3800 },
  { day: "Sun", views: 6200 },
];

export default function Dashboard() {
  const pathname = usePathname();
  const router = useRouter();
  const [showAddListing, setShowAddListing] = useState(false);

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 shrink-0 bg-white border-r h-screen flex flex-col fixed left-0 top-0">
        {/* Logo */}
        <div className="px-6 py-6 flex items-center space-x-2">
          <div className="w-7 h-7 bg-emerald-600 rounded-full flex items-center justify-center text-white font-bold">
            Q
          </div>
          <span className="font-semibold text-gray-800">Company name</span>
        </div>

        {/* Nav */}
        <nav className="flex-1 px-4 space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const active = pathname === item.href;
            return (
              <button
                key={item.name}
                onClick={() => router.push(item.href)}
                className={`w-full flex items-center px-4 py-2 rounded-lg text-sm font-medium transition ${
                  active
                    ? "bg-emerald-600 text-white"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                <Icon className="w-5 h-5 mr-3" />
                {item.name}
              </button>
            );
          })}
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col bg-gray-50 ml-64">
        {/* Topbar */}
        <header className="px-6 pt-6">
          <div className="bg-white shadow-sm rounded-xl px-6 py-4 flex justify-between items-center max-w-[950px] mx-auto">
            {/* Search */}
            <div className="flex-1 max-w-lg">
              <input
                type="text"
                placeholder="Search your products"
                className="w-full px-4 py-2 rounded-full border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>

            {/* Right side */}
            <div className="flex items-center space-x-6 ml-6">
              <FiBell className="w-5 h-5 text-gray-600 cursor-pointer" />
              <FiShare2 className="w-5 h-5 text-gray-600 cursor-pointer" />
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-full bg-emerald-700"></div>
                <div>
                  <p className="text-sm font-semibold text-gray-800">TechBiz Solutions</p>
                  <p className="text-xs text-gray-500">IT Services & Digital Solutions</p>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 px-6 mt-6">
          <div className="max-w-[950px] mx-auto">
            {/* Business Overview */}
            <section>
              <h2 className="text-xl font-bold mb-1">Business Overview</h2>
              <p className="text-gray-500 mb-4">
                Track your marketplace performance and growth
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {cards.map((card) => {
                  const Icon = card.icon;
                  return (
                    <div
                      key={card.title}
                      className="bg-white rounded-xl shadow-sm p-6 flex flex-col items-start"
                    >
                      <div className="flex items-center justify-between w-full mb-4">
                        <p className="text-sm font-medium text-gray-500">{card.title}</p>
                        <div className="w-8 h-8 rounded-full bg-emerald-50 flex items-center justify-center">
                          <Icon className="w-5 h-5 text-emerald-600" />
                        </div>
                      </div>
                      <p className="text-2xl font-bold text-gray-800">{card.value}</p>
                      <p className="text-sm text-emerald-600">{card.subtitle}</p>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* Weekly Views */}
            <section className="mt-8 bg-white rounded-xl shadow-sm p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-bold text-gray-800">Weekly Views</h2>
                <select className="border border-gray-300 rounded-md px-3 py-1 text-sm">
                  <option>Weekly</option>
                  <option>Monthly</option>
                </select>
              </div>
              <div className="w-full h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={chartData}>
                    <defs>
                      <linearGradient id="grad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#10b981" stopOpacity={0.2} />
                        <stop offset="95%" stopColor="#10b981" stopOpacity={0.02} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="day" />
                    <YAxis />
                    <Tooltip />
                    <Area
                      type="monotone"
                      dataKey="views"
                      stroke="#059669"
                      fill="url(#grad)"
                      strokeWidth={2}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </section>

            {/* Quick Actions */}
            <section className="mt-8 bg-white rounded-xl shadow-sm p-6 mb-12">
              <h2 className="text-lg font-bold mb-4">Quick Actions</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Add Product/Service */}
                <button
                  onClick={() => setShowAddListing(true)}
                  className="bg-emerald-600 text-white rounded-xl p-6 text-left shadow-sm hover:shadow-md transition"
                >
                  <div className="flex items-center mb-2">
                    <span className="w-6 h-6 flex items-center justify-center rounded-full bg-white/20 mr-3">
                      +
                    </span>
                    <span className="font-semibold">Add Product/Service</span>
                  </div>
                  <p className="text-sm opacity-90">List a new offer</p>
                </button>

                {/* Share Business Link */}
                <button className="bg-white border border-gray-200 rounded-xl p-6 text-left shadow-sm hover:shadow-md transition">
                  <div className="flex items-center mb-2">
                    <FiShare2 className="w-5 h-5 text-emerald-600 mr-3" />
                    <span className="font-semibold text-gray-800">Share Business Link</span>
                  </div>
                  <p className="text-sm text-gray-500">Get your unique marketplace URL</p>
                </button>

                {/* View Orders/Inquiries */}
                <button className="bg-white border border-gray-200 rounded-xl p-6 text-left shadow-sm hover:shadow-md transition">
                  <div className="flex items-center mb-2">
                    <FiFileText className="w-5 h-5 text-emerald-600 mr-3" />
                    <span className="font-semibold text-gray-800">View Orders/Inquiries</span>
                  </div>
                  <p className="text-sm text-gray-500">Review every order placed</p>
                </button>
              </div>
            </section>
          </div>
        </main>
      </div>

      {/* Modal Overlay */}
      {showAddListing && <AddListingModal onClose={() => setShowAddListing(false)} />}
    </div>
  );
}
