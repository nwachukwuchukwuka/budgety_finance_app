// import { useState } from "react";

// const AddBudget = () => {
//     const [showDropdown, setShowDropdown] = useState(false); // Main dropdown visibility
//     const [activeCategory, setActiveCategory] = useState(null); // Track the active category
//     const [selectedItems, setSelectedItems] = useState({}); // Track selected items

//     // Categories and subcategories
//     const categories = {
//         Childcare: ["Babysitter", "Camps", "Clothes", "Daycare"],
//         Education: ["Tuition", "Books", "Online Courses", "Workshops"],
//         Financial: ["Savings", "Investments", "Insurance", "Loans"],
//         Entertainment: ["Movies", "Games", "Music", "Events"],
//     };

//     // Toggle the main dropdown
//     const toggleDropdown = () => {
//         setShowDropdown(!showDropdown);
//     };

//     // Toggle subcategories for a specific category
//     const toggleSubcategory = (category) => {
//         setActiveCategory((prev) => (prev === category ? null : category));
//     };

//     // Handle checkbox changes
//     const handleCheckboxChange = (item) => {
//         setSelectedItems((prev) => ({
//             ...prev,
//             [item]: !prev[item],
//         }));
//     };

//     return (
//         <div className="relative w-full max-w-md mx-auto mt-6">
//             {/* Main Dropdown */}
//             <div
//                 className="bg-white text-gray-700 px-4 py-3 rounded-lg shadow-md cursor-pointer flex justify-between items-center border border-gray-300"
//                 onClick={toggleDropdown}
//             >
//                 <span className="font-medium">
//                     {Object.keys(selectedItems)
//                         .filter((key) => selectedItems[key])
//                         .join(", ") || "Select one or more categories"}
//                 </span>
//                 <span className="text-gray-500">{showDropdown ? "▲" : "▼"}</span>
//             </div>

//             {/* Dropdown Content */}
//             {showDropdown && (
//                 <div className="absolute w-full bg-white text-gray-700 mt-2 rounded-lg shadow-lg z-50 border border-gray-300">
//                     {Object.keys(categories).map((category, index) => (
//                         <div key={index} className="p-4 border-b border-gray-200">
//                             {/* Category Header */}
//                             <div
//                                 className="bg-gray-100 text-gray-800 px-4 py-3 rounded-lg shadow-sm cursor-pointer flex justify-between items-center"
//                                 onClick={() => toggleSubcategory(category)}
//                             >
//                                 <span className="font-medium">{category}</span>
//                                 <span>{activeCategory === category ? "▲" : "▼"}</span>
//                             </div>

//                             {/* Subcategories */}
//                             {activeCategory === category && (
//                                 <div className="mt-2">
//                                     {categories[category].map((item, idx) => (
//                                         <label
//                                             key={idx}
//                                             className="flex items-center justify-between px-2 py-1 hover:bg-gray-100 rounded-md cursor-pointer"
//                                         >
//                                             <span>{item}</span>
//                                             <input
//                                                 type="checkbox"
//                                                 className="form-checkbox text-blue-500 focus:ring-blue-300"
//                                                 checked={selectedItems[item] || false}
//                                                 onChange={() => handleCheckboxChange(item)}
//                                             />
//                                         </label>
//                                     ))}
//                                 </div>
//                             )}
//                         </div>
//                     ))}
//                 </div>
//             )}
//         </div>
//     );
// };

// export default AddBudget;
