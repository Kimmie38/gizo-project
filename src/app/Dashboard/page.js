"use client";

import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import {
  FiHome,
  FiBox,
  FiFileText,
  FiSettings,
  FiBell,
  FiShare2,
  FiEye,
  FiShoppingCart,
  FiMenu,
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

// Sidebar items
const navItems = [
  { name: "Home", href: "/dashboard", icon: FiHome },
  { name: "Products/Services", href: "/dashboard/products", icon: FiBox },
  { name: "Orders/Inquiries", href: "/dashboard/orders", icon: FiFileText },
  { name: "Settings", href: "/dashboard/settings", icon: FiSettings },
];

// Overview cards
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
  const router = useRouter();
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showAddListing, setShowAddListing] = useState(false);

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full bg-white border-r w-64 transform transition-transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 z-40`}
      >
        <div className="px-6 py-6 flex items-center space-x-2">
          <div className="w-7 h-7 bg-emerald-600 rounded-full flex items-center justify-center text-white font-bold">
            Q
          </div>
          <span className="font-semibold text-gray-800">Company name</span>
        </div>

        <nav className="px-4 space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const active = pathname === item.href;
            return (
              <button
                key={item.name}
                onClick={() => router.push(item.href)}
                className={`w-full flex items-center px-4 py-2 rounded-lg text-sm font-medium ${
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

      {/* Main */}
      <div className="flex-1 flex flex-col md:ml-64">
        {/* Topbar */}
        <header className="px-4 pt-4 md:px-6 md:pt-6">
          <div className="bg-white shadow-sm rounded-xl px-4 py-3 md:px-6 md:py-4 flex justify-between items-center">
            {/* Left: Menu + Search */}
            <div className="flex items-center gap-3 flex-1 max-w-lg">
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="md:hidden text-gray-600"
              >
                <FiMenu className="w-6 h-6" />
              </button>
              <input
                type="text"
                placeholder="Search your products"
                className="flex-1 px-4 py-2 rounded-full border text-sm focus:ring-2 focus:ring-emerald-500"
              />
            </div>

            {/* Right */}
            <div className="flex items-center space-x-4 ml-4">
              <FiBell className="w-5 h-5 text-gray-600 cursor-pointer" />
              <FiShare2 className="w-5 h-5 text-gray-600 cursor-pointer" />
              <div className="hidden sm:flex items-center space-x-2">
                <div className="w-8 h-8 rounded-full bg-emerald-700"></div>
                <div>
                  <p className="text-sm font-semibold text-gray-800">
                    TechBiz Solutions
                  </p>
                  <p className="text-xs text-gray-500">
                    IT Services & Digital Solutions
                  </p>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 px-4 mt-6 md:px-6">
          <div className="max-w-[950px] mx-auto">
            {/* Business Overview */}
            <section>
              <h2 className="text-xl font-bold mb-1">Business Overview</h2>
              <p className="text-gray-500 mb-4">
                Track your marketplace performance and growth
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {cards.map((card) => {
                  const Icon = card.icon;
                  return (
                    <div
                      key={card.title}
                      className="bg-white rounded-xl shadow-sm p-6 flex flex-col"
                    >
                      <div className="flex justify-between mb-4">
                        <p className="text-sm font-medium text-gray-500">
                          {card.title}
                        </p>
                        <div className="w-8 h-8 rounded-full bg-emerald-50 flex items-center justify-center">
                          <Icon className="w-5 h-5 text-emerald-600" />
                        </div>
                      </div>
                      <p className="text-2xl font-bold text-gray-800">
                        {card.value}
                      </p>
                      <p className="text-sm text-emerald-600">
                        {card.subtitle}
                      </p>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* Chart */}
            <section className="mt-8 bg-white rounded-xl shadow-sm p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-bold text-gray-800">
                  Weekly Views
                </h2>
                <select className="border rounded-md px-2 py-1 text-sm">
                  <option>Weekly</option>
                  <option>Monthly</option>
                </select>
              </div>
              <div className="w-full h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={chartData}>
                    <defs>
                      <linearGradient id="grad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#10b981" stopOpacity={0.2}/>
                        <stop offset="95%" stopColor="#10b981" stopOpacity={0.02}/>
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
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {/* Add Product */}
                <button
                  onClick={() => setShowAddListing(true)}
                  className="bg-emerald-600 text-white rounded-xl p-6 text-left hover:shadow-md"
                >
                  <div className="flex items-center mb-2">
                    <span className="w-6 h-6 flex items-center justify-center rounded-full bg-white/20 mr-3">
                      +
                    </span>
                    <span className="font-semibold">
                      Add Product/Service
                    </span>
                  </div>
                  <p className="text-sm opacity-90">List a new offer</p>
                </button>

                {/* Share */}
                <button className="bg-white border rounded-xl p-6 text-left hover:shadow-md">
                  <div className="flex items-center mb-2">
                    <FiShare2 className="w-5 h-5 text-emerald-600 mr-3" />
                    <span className="font-semibold text-gray-800">
                      Share Business Link
                    </span>
                  </div>
                  <p className="text-sm text-gray-500">
                    Get your unique marketplace URL
                  </p>
                </button>

                {/* Orders */}
                <button className="bg-white border rounded-xl p-6 text-left hover:shadow-md">
                  <div className="flex items-center mb-2">
                    <FiFileText className="w-5 h-5 text-emerald-600 mr-3" />
                    <span className="font-semibold text-gray-800">
                      View Orders/Inquiries
                    </span>
                  </div>
                  <p className="text-sm text-gray-500">
                    Review every order placed
                  </p>
                </button>
              </div>
            </section>
          </div>
        </main>
      </div>

      {/* Modal */}
      <AddListingModal
        isOpen={showAddListing}
        onClose={() => setShowAddListing(false)}
      />
    </div>
  );
}
