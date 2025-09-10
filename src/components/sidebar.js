"use client";

import { usePathname, useRouter } from "next/navigation";
import { FiHome, FiBox, FiFileText, FiSettings } from "react-icons/fi";

// Sidebar nav items
const navItems = [
  { name: "Home", href: "/dashboard", icon: FiHome },
  { name: "Products/Services", href: "/dashboard/products", icon: FiBox },
  { name: "Orders/Inquiries", href: "/dashboard/orders", icon: FiFileText },
  { name: "Settings", href: "/dashboard/settings", icon: FiSettings },
];

export default function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();

  return (
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
  );
}
