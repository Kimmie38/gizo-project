"use client";
import { useState } from "react";
import AddListingModal from "@/components/AddlistingModal";
import Sidebar from "@/components/sidebar";
import { Menu } from "lucide-react";

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
  {
    id: 3,
    title: "Delivery Service",
    price: 5000,
    desc: "Fast same-day delivery",
    image: "https://picsum.photos/id/292/400/300",
    category: "Services",
  },
];

export default function ProductsPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showAddListing, setShowAddListing] = useState(false);
  const [products, setProducts] = useState(mockProducts);
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");

  // ✅ Filter + Search
  const filtered = products.filter(
    (p) =>
      (filter === "All" || p.category === filter) &&
      p.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex min-h-screen bg-gray-50 overflow-hidden">
      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Main Section */}
      <div className="flex-1 flex flex-col md:ml-64">
        {/* Topbar */}
        <header className="px-3 pt-4 sm:px-4 md:px-6 md:pt-6">
          <div className="bg-white shadow-sm rounded-xl px-3 py-3 sm:px-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            {/* Left: Hamburger + Search */}
            <div className="flex items-center gap-3 flex-1 w-full">
              {/* Mobile Hamburger */}
              <button
                className="p-2 rounded-md hover:bg-gray-100 md:hidden"
                onClick={() => setSidebarOpen(!sidebarOpen)}
              >
                <Menu className="w-6 h-6 text-gray-700" />
              </button>

              {/* Search */}
              <input
                type="text"
                placeholder="Search your products or services"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="flex-1 px-3 py-2 rounded-full border text-sm focus:ring-2 focus:ring-emerald-500 w-full"
              />
            </div>

            {/* Right: Filters + Add */}
            <div className="flex items-center gap-2 sm:gap-3 overflow-x-auto w-full sm:w-auto no-scrollbar">
              {["All", "Products", "Services"].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-3 sm:px-4 py-2 rounded-lg border text-sm whitespace-nowrap transition ${
                    filter === cat
                      ? "bg-emerald-600 text-white border-emerald-600"
                      : "bg-gray-100 text-gray-700 border-gray-200 hover:bg-gray-200"
                  }`}
                >
                  {cat}
                </button>
              ))}
              <button
                onClick={() => setShowAddListing(true)}
                className="bg-emerald-600 text-white px-3 sm:px-4 py-2 rounded-lg hover:bg-emerald-700 text-sm whitespace-nowrap transition"
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
    <div className="grid gap-4 grid-cols-[repeat(auto-fit,minmax(160px,1fr))]">
      {filtered.map((p) => (
        <div
          key={p.id}
          className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col hover:shadow-lg transition"
        >
          <img
            src={p.image}
            alt={p.title}
            className="w-full h-28 object-cover"  // ✅ smaller image height
          />
          <div className="p-3 flex flex-col flex-1">  {/* ✅ smaller padding */}
            <h3 className="font-semibold text-gray-800 text-sm">{p.title}</h3>
            <p className="text-gray-500 text-xs flex-1">{p.desc}</p>
            <p className="text-emerald-600 font-bold mt-1 text-sm">
              ₦{p.price.toLocaleString()}
            </p>
            <p className="text-[10px] text-gray-400">{p.category}</p>
            <button className="mt-2 bg-emerald-600 text-white rounded-md py-1 text-sm hover:bg-emerald-700">
              View More
            </button>
          </div>
        </div>
      ))}
    </div>
  )}
</main>

      </div>

      {/* Modal */}
      <AddListingModal
        isOpen={showAddListing}
        onClose={() => setShowAddListing(false)}
        onAdded={(newItem) =>
          setProducts((prev) => [
            ...prev,
            {
              id: prev.length + 1,
              title: newItem.title,
              price: newItem.price,
              desc: newItem.desc,
              image: newItem.image,
              category: newItem.category,
            },
          ])
        }
      />
    </div>
  );
}
