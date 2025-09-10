"use client";

import { useState } from "react";
import { FiUploadCloud, FiChevronDown } from "react-icons/fi";

export default function AddListing() {
  const [tab, setTab] = useState("products");
  const [description, setDescription] = useState("");

  return (
    <div className="max-w-3xl mx-auto p-6">
      {/* Header */}
      <h1 className="text-2xl font-bold mb-1">Add New Listing</h1>
      <p className="text-gray-500 mb-6">
        Fill out the form below to add a new product or service to the marketplace
      </p>

      {/* Tabs */}
      <div className="flex space-x-2 mb-6">
        <button
          onClick={() => setTab("products")}
          className={`px-4 py-2 rounded-full text-sm font-medium ${
            tab === "products"
              ? "bg-emerald-600 text-white"
              : "bg-gray-100 text-gray-600"
          }`}
        >
          Products
        </button>
        <button
          onClick={() => setTab("services")}
          className={`px-4 py-2 rounded-full text-sm font-medium ${
            tab === "services"
              ? "bg-emerald-600 text-white"
              : "bg-gray-100 text-gray-600"
          }`}
        >
          Services
        </button>
      </div>

      {/* Form */}
      <form className="space-y-4">
        {/* Name + Price */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Product/Service Name"
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
          <input
            type="number"
            placeholder="Price (USD)"
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
        </div>

        {/* Category */}
        <div className="relative">
          <select className="w-full px-4 py-3 border rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-emerald-500">
            <option value="">Category</option>
            <option value="tech">Technology</option>
            <option value="design">Design</option>
            <option value="consulting">Consulting</option>
          </select>
          <FiChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
        </div>

        {/* Description */}
        <div>
          <textarea
            rows={4}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Description"
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
          <p className="text-xs text-gray-500 mt-1">
            Brief description for your product. {description.length}/70
          </p>
        </div>

        {/* Upload Area */}
        <div className="border-2 border-dashed rounded-lg p-6 text-center text-gray-500">
          <FiUploadCloud className="mx-auto w-10 h-10 mb-3 text-emerald-600" />
          <p>Drop your product pictures here</p>
          <p className="text-sm my-2">OR</p>
          <button
            type="button"
            className="px-4 py-2 bg-emerald-600 text-white rounded-lg shadow-sm hover:bg-emerald-700 transition"
          >
            Upload file
          </button>
        </div>
      </form>
    </div>
  );
}
