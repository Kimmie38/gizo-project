import React from "react";

const SearchBar = ({
  placeholder = "Let's help you find...",
  locations = ["Location", "Lagos", "Abuja"],
  buttonLabel = "Search",
}) => {
  return (
    <div className="flex items-center mt-6 max-w-2xl bg-white rounded-full shadow-md overflow-hidden w-full">
      {/* Input */}
      <input
        type="text"
        placeholder={placeholder}
        className="flex-1 px-4 py-3 outline-none"
      />

      {/* Dropdown */}
      <select className="px-3 py-3 border-l text-gray-600 outline-none">
        {locations.map((loc, index) => (
          <option key={index}>{loc}</option>
        ))}
      </select>

      {/* Button */}
      <button className="bg-green-500 px-6 py-3 text-white font-medium hover:bg-green-600">
        {buttonLabel}
      </button>
    </div>
  );
};

export default SearchBar;
