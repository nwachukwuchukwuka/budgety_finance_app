import { useState } from "react";


const AddBudget = () => {
    const [showDropdown, setShowDropdown] = useState(false);
    const [categories, setCategories] = useState({
        Childcare: ["Baby Sitter", "Camps", "Clothes", "Daycare", "Other Activities", "Sports"],
        Other: [],
    });
    const [selectedItems, setSelectedItems] = useState({
        "Baby Sitter": false,
        Camps: false,
        Clothes: false,
        Daycare: false,
        "Other Activities": false,
        Sports: false,
        Other: false,
    });

    // Toggle the dropdown visibility
    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };

    // Handle checkbox changes
    const handleCheckboxChange = (item) => {
        setSelectedItems((prev) => ({
            ...prev,
            [item]: !prev[item],
        }));
    };

    return (
        <div className="relative w-full max-w-md mx-auto mt-6">
            {/* Main Dropdown */}
            <div
                className="bg-blue-900 text-white px-4 py-3 rounded-lg shadow-md cursor-pointer flex justify-between items-center"
                onClick={toggleDropdown}
            >
                <span className="font-medium">
                    Categories:{" "}
                    {Object.keys(selectedItems)
                        .filter((key) => selectedItems[key])
                        .join(", ") || "Select..."}
                </span>
                <span>{showDropdown ? "▲" : "▼"}</span>
            </div>

            {/* Dropdown Content */}
            {showDropdown && (
                <div className="absolute w-full bg-blue-800 text-white mt-2 rounded-lg shadow-lg z-50">
                    {/* Childcare Dropdown */}
                    <div className="p-4 border-b border-blue-700">
                        <div className="flex justify-between items-center mb-2">
                            <span className="font-semibold">Childcare</span>
                        </div>
                        {categories.Childcare.map((item, index) => (
                            <label
                                key={index}
                                className="flex items-center justify-between px-2 py-1 hover:bg-blue-700 rounded-md cursor-pointer"
                            >
                                <span>{item}</span>
                                <input
                                    type="checkbox"
                                    className="form-checkbox text-blue-500 focus:ring-blue-300"
                                    checked={selectedItems[item] || false}
                                    onChange={() => handleCheckboxChange(item)}
                                />
                            </label>
                        ))}
                    </div>

                    {/* Other Category */}
                    <div className="p-4">
                        <div className="flex justify-between items-center mb-2">
                            <span className="font-semibold">Other</span>
                        </div>
                        <label
                            className="flex items-center justify-between px-2 py-1 hover:bg-blue-700 rounded-md cursor-pointer"
                        >
                            <span>Other</span>
                            <input
                                type="checkbox"
                                className="form-checkbox text-blue-500 focus:ring-blue-300"
                                checked={selectedItems.Other || false}
                                onChange={() => handleCheckboxChange("Other")}
                            />
                        </label>
                    </div>
                </div>
            )}
        </div>
    );
}

export default AddBudget