"use client";
import { useState } from "react";
import AddListingModal from "../Listing/page";
import Sidebar from "@/components/sidebar";
import { Menu } from "lucide-react"; // ✅ hamburger icon

// Mock product data
const mockProducts = [
  {
    id: 1,
    title: "10 Basket of Tomatoes",
    price: 20000,
    desc: "Freshly harvested tomatoes",
    image: "https://picsum.photos/id/1080/400/300",
    category: "Products",
  },
  {
    id: 2,
    title: "Spinach",
    price: 20000,
    desc: "Fresh spinach",
    image: "https://picsum.photos/id/292/400/300",
    category: "Products",
  },
];

export default function ProductsPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showAddListing, setShowAddListing] = useState(false);
  const [products, setProducts] = useState(mockProducts);
  const [filter, setFilter] = useState("Products");
  const [search, setSearch] = useState("");

  // ✅ Filter + Search
  const filtered = products.filter(
    (p) =>
      (filter === "All" || p.category === filter) &&
      p.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Main Section */}
      <div className="flex-1 flex flex-col md:ml-64">
        {/* Topbar */}
        <header className="px-4 pt-4 md:px-6 md:pt-6">
          <div className="bg-white shadow-sm rounded-xl px-4 py-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            {/* Left: Hamburger + Search */}
            <div className="flex items-center gap-3 flex-1">
              {/* Hamburger - hidden on md+ */}
              <button
                className="p-2 rounded-md hover:bg-gray-100 md:hidden"
                onClick={() => setSidebarOpen(!sidebarOpen)}
              >
                <Menu className="w-6 h-6 text-gray-700" />
              </button>

              {/* Search */}
              <input
                type="text"
                placeholder="Search your products"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="flex-1 px-4 py-2 rounded-full border text-sm focus:ring-2 focus:ring-emerald-500"
              />
            </div>

            {/* Right: Filter + Add */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => setFilter("Products")}
                className={`px-4 py-2 rounded-lg border ${
                  filter === "Products"
                    ? "bg-emerald-600 text-white border-emerald-600"
                    : "bg-gray-100 text-gray-700 border-gray-200"
                }`}
              >
                Products
              </button>
              <button
                onClick={() => setFilter("Services")}
                className={`px-4 py-2 rounded-lg border ${
                  filter === "Services"
                    ? "bg-emerald-600 text-white border-emerald-600"
                    : "bg-gray-100 text-gray-700 border-gray-200"
                }`}
              >
                Services
              </button>
              <button
                onClick={() => setShowAddListing(true)}
                className="bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700"
              >
                + Add New Listing
              </button>
            </div>
          </div>
        </header>

        {/* Products Grid */}
        <main className="flex-1 px-4 mt-6 md:px-6">
          {filtered.length === 0 ? (
            <p className="text-gray-500 text-center">No items found</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {filtered.map((p) => (
                <div
                  key={p.id}
                  className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col hover:shadow-lg transition"
                >
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-40 object-cover"
                  />
                  <div className="p-4 flex flex-col flex-1">
                    <h3 className="font-semibold text-gray-800">{p.title}</h3>
                    <p className="text-gray-500 text-sm flex-1">{p.desc}</p>
                    <p className="text-emerald-600 font-bold mt-2">
                      ₦{p.price.toLocaleString()}
                    </p>
                    <button className="mt-3 bg-emerald-600 text-white rounded-lg py-2 hover:bg-emerald-700">
                      View More
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </main>
      </div>

      {/* Add Listing Modal */}
      <AddListingModal
        isOpen={showAddListing}
        onClose={() => setShowAddListing(false)}
        onAdded={(newItem) =>
          setProducts((prev) => [
            ...prev,
            { ...newItem, id: prev.length + 1 }, // ✅ ensure unique id
          ])
        }
      />
    </div>
  );
}
