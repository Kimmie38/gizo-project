"use client";

export default function AddListingModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
      <div className="bg-white rounded-xl shadow-lg w-full max-w-2xl p-6 overflow-y-auto max-h-[90vh]">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-lg font-bold">Add New Listing</h1>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 text-xl"
          >
            ×
          </button>
        </div>

        <p className="text-gray-500 mb-6">
          Fill out the form below to add a new product or service
        </p>

        {/* Form */}
        <form className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Product/Service Name"
              className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-emerald-500"
            />
            <input
              type="number"
              placeholder="Price (USD)"
              className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          <select className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-emerald-500">
            <option>Category</option>
            <option>Electronics</option>
            <option>Services</option>
            <option>Clothing</option>
          </select>

          <textarea
            placeholder="Description"
            rows="4"
            className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-emerald-500"
          />

          {/* Upload */}
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
            <p className="text-gray-500">Drop your product pictures here</p>
            <p className="text-gray-400 text-sm mb-4">OR</p>
            <label className="inline-block bg-emerald-600 text-white px-4 py-2 rounded-lg cursor-pointer">
              Upload file
              <input type="file" className="hidden" />
            </label>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-3 justify-end">
            <button
              type="submit"
              className="bg-emerald-600 text-white px-6 py-2 rounded-lg hover:bg-emerald-700"
            >
              Add Listing
            </button>
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-200 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-300"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
