"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function UserProfilePage() {
  const { slug } = useParams(); // now this is "kimmie-fashion-hub"
  const [user, setUser] = useState(null);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!slug) return;

    async function fetchData() {
      try {
        const userRes = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/user/slug/${slug}`
        );
        const userData = await userRes.json();

        const productRes = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/user/slug/${slug}/products`
        );
        const productData = await productRes.json();

        setUser(userData.success === false ? null : userData);
        setProducts(Array.isArray(productData) ? productData : []);
      } catch (err) {
        console.error("❌ Error fetching data:", err);
        setUser(null);
        setProducts([]);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [slug]);

  if (loading) return <p className="text-center mt-10">Loading...</p>;
  if (!user) return <p className="text-center mt-10">User not found</p>;

  return (
    <div className="min-h-screen bg-gray-50 py-10">
      {/* User info */}
      <div className="max-w-2xl mx-auto bg-white p-6 rounded-xl shadow-md text-center mb-8">
        <div className="w-20 h-20 mx-auto rounded-full bg-emerald-600 text-white flex items-center justify-center text-2xl font-bold mb-4">
          {user.fullName?.[0]?.toUpperCase() || "U"}
        </div>
        <h1 className="text-2xl font-bold">{user.fullName}</h1>
        <p className="text-gray-600">{user.email}</p>
        {user.businessName && (
          <p className="text-emerald-600 font-semibold mt-2">
            {user.businessName}
          </p>
        )}
      </div>

      {/* Products */}
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-xl font-bold mb-4 text-gray-800">
          Products & Services
        </h2>

        {products.length === 0 ? (
          <p className="text-gray-500">No products listed yet.</p>
        ) : (
          <div className="grid gap-4 grid-cols-[repeat(auto-fit,minmax(220px,1fr))]">
            {products.map((p) => (
              <div
                key={p._id}
                className="bg-white border rounded-lg overflow-hidden flex flex-col hover:shadow transition"
              >
                <img
                  src={p.image || "/placeholder.png"}
                  alt={p.title}
                  className="w-full h-32 object-cover"
                />
                <div className="p-4 flex flex-col flex-1">
                  <h3 className="font-semibold text-gray-800 text-sm">
                    {p.title}
                  </h3>
                  <p className="text-gray-500 text-xs flex-1">{p.desc}</p>
                  <p className="text-emerald-600 font-bold mt-1 text-sm">
                    ₦{p.price?.toLocaleString()}
                  </p>
                  <p className="text-[10px] text-gray-400">{p.category}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
