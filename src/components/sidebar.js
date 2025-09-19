"use client";
import { useRouter, usePathname } from "next/navigation";
import {
  FiHome,
  FiBox,
  FiSettings,
} from "react-icons/fi";

const navItems = [
  { name: "Home", href: "/Dashboard", icon: FiHome },
  { name: "Products/Services", href: "/Dashboard/Products", icon: FiBox },
  { name: "Settings", href: "/dashboard/settings", icon: FiSettings },
];

export default function Sidebar({ sidebarOpen }) {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <aside
      className={`fixed top-0 left-0 h-full bg-white border-r w-64 transform transition-transform 
      ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 z-40`}
    >
      {/* Logo */}
      <div className="px-6 py-10 flex items-center space-x-4">
        <div className="w-7 h-7 bg-emerald-600 rounded-full flex items-center justify-center text-white font-bold">
          Q
        </div>
        <span className="font-semibold text-gray-800">Company name</span>
      </div>

      {/* Nav */}
      <nav className="px-4 space-y-4">
        {navItems.map((item) => {
          const Icon = item.icon;
          const active = pathname === item.href;
          return (
            <button
              key={item.name}
              onClick={() => router.push(item.href)}
              className={`w-full flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-colors border ${
                active
                  ? "bg-emerald-600 text-white border-emerald-700"
                  : "text-gray-600 border-transparent hover:bg-gray-100"
              }`}
            >
              <Icon
                className={`w-5 h-5 mr-3 ${active ? "text-white" : "text-gray-600"}`}
              />
              {item.name}
            </button>
          );
        })}
      </nav>
    </aside>
  );
}
