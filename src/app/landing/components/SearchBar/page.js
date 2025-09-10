import React from "react";

const SearchBar = () => {
  return (
    <div className="flex items-center mt-6 max-w-2xl bg-white rounded-full shadow-md overflow-hidden">
      <input
        type="text"
        placeholder="Let's help you find..."
        className="flex-1 px-4 py-3 outline-none"
      />
      <select className="px-3 py-3 border-l text-gray-600 outline-none">
        <option>Location</option>
        <option>Lagos</option>
        <option>Abuja</option>
      </select>
      <button className="bg-green-500 px-6 py-3 text-white font-medium hover:bg-green-600">
        Search
      </button>
    </div>
  );
};

export default SearchBar;
