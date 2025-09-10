// app/page.jsx
import React from "react";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Lite",
    duration: "Valid for 2 months",
    price: "$49.99",
    features: ["Key Drivers", "Key Trends", "Visual charts", "PDF export", "Templates"],
  },
  {
    name: "Pro",
    duration: "Valid for 12 months",
    price: "$149.99",
    features: [
      "Key Drivers",
      "Key Trends",
      "Visual charts",
      "PDF export",
      "Templates",
      "Admin Tools",
      "Services",
    ],
  },
];

export default function SubscriptionPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
      {/* Title */}
      <h2 className="text-2xl font-semibold text-gray-800 mb-2">Subscription</h2>
      <p className="text-gray-500 mb-10">Choose the plan that best fits your needs</p>

      {/* Pricing Cards */}
      <div className="grid md:grid-cols-2 gap-8 w-full max-w-4xl">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center border hover:shadow-lg transition"
          >
            {/* Plan Name */}
            <h3 className="text-xl font-bold text-gray-800 mb-1">{plan.name}</h3>
            <p className="text-sm text-gray-500 mb-4">{plan.duration}</p>

            {/* Price */}
            <p className="text-3xl font-bold text-gray-900 mb-4">{plan.price}</p>

            {/* Button */}
            <button className="bg-[#199A86] text-white px-6 py-2 rounded-lg hover:bg-teal-700 transition mb-6 w-[396px]">
              choose plan
            </button>

            {/* Features */}
            <ul className="space-y-2 text-gray-600 w-full">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-2">
                  <Check size={18} className="text-teal-600" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </main>
  );
}
