import React, { useState } from "react";

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const items = [];

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  // Filter items based on the search query
  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-4">
      
      {/* Search Input */}
      <input
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={handleSearch}
        className="outline-none p-2 w-full  text-black rounded shadow"
      />

      {/* Filtered Results */}
      <ul className="list-disc pl-6">
        {filteredItems.length > 0 && (
          filteredItems.map((item, index) => (
            <li key={index} className="text-gray-700">
              {item}
            </li>
          ))
        ) }
      </ul>
    </div>
  );
};

export default SearchBar;
