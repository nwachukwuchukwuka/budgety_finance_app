import { useState } from "react";
import { ITEMS } from "@/constants";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const DashboardCard = () => {
  const [showAddBudget, setShowAddBudget] = useState(false);

  return (
    <div className="p-4">
      {/* Dashboard Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
        {ITEMS.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-800">
                {item.title}
              </h3>
              <p className="text-gray-500 text-sm mb-4">
                Easily track and manage your {item.title.toLowerCase()}.
              </p>
              <button
                className="w-full sm:w-auto px-6 py-2 bg-blue-500 text-white rounded-full font-semibold text-sm shadow-md hover:bg-blue-600 transition-colors duration-300"
                onClick={() => setShowAddBudget(true)}
              >
                ADD BUDGET
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Budget Modal */}
      {showAddBudget && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 px-4">
          <div className="bg-gray-50 w-full max-w-lg p-6 rounded-lg shadow-lg relative">
            <h2 className="text-lg font-semibold text-gray-800 mb-2 text-center">
              Create a Personalized Budget
            </h2>
            <form>
              {/* Categories */}
              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-1">
                  Categories
                </label>
                <input
                  type="text"
                  placeholder="Enter category"
                  className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 p-1 outline-none"
                />
              </div>

              {/* Name */}
              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-1">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Enter name"
                  className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 p-1 outline-none"
                />
              </div>

              {/* Limit */}
              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-1">
                  Limit
                </label>
                <input
                  type="number"
                  placeholder="Enter limit"
                  className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 p-1 outline-none"
                />
              </div>

              {/* Frequency */}
              <div className="mb-4">
                <label className="block text-gray-700 font-medium text-sm mb-1">
                  Choose Frequency
                </label>
                <div className="flex gap-2">
                  <button
                    type="button"
                    className="flex-1 px-4 py-1 border rounded-lg text-gray-700 hover:bg-gray-100"
                  >
                    Weekly
                  </button>
                  <button
                    type="button"
                    className="flex-1 px-4 py-1 border rounded-lg text-gray-700 hover:bg-gray-100"
                  >
                    Monthly
                  </button>
                  <button
                    type="button"
                    className="flex-1 px-4 py-1 border rounded-lg text-gray-700 hover:bg-gray-100"
                  >
                    Custom
                  </button>
                </div>
              </div>

              {/* Notification Slider */}
              <div className="mb-4">
                <label className="block text-gray-700 font-medium  text-sm">
                  Get Notified When Budget Reaches:
                </label>
                <input
                  type="range"
                  min="1"
                  max="100"
                  defaultValue="100"
                  className="w-full h-1"
                />
              </div>

              {/* Currency */}
              <div className="mb-6">
                <label className="block text-gray-700 font-medium mb-1">
                  Select Currency
                </label>
                <div className="flex gap-2">
                  <button
                    type="button"
                    className="flex-1 px-4 py-1 border rounded-lg text-gray-700 hover:bg-gray-100"
                  >
                    Primary
                  </button>
                  <button
                    type="button"
                    className="flex-1 px-4 py-1 border rounded-lg text-gray-700 hover:bg-gray-100"
                  >
                    Secondary
                  </button>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex justify-end gap-4">
                <button
                  type="button"
                  className="px-4 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
                  onClick={() => setShowAddBudget(false)}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-1 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default DashboardCard;





























// import { useState } from "react";
// import { ITEMS } from "@/constants";
// import AddBudget from "./AddBudget";
// import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css";


// const DashboardCard = () => {
//     const [showAddBudget, setShowAddBudget] = useState(false);

//     return (
//         <div className="p-">
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
//                 {ITEMS.map((item, index) => (
//                     <div key={index} className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300">
//                         <div className="p-6">
//                             <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
//                             <p className="text-gray-500 text-sm mb-4">Easily track and manage your {item.title.toLowerCase()}.</p>
//                             <button
//                                 className="px-6 py-2 bg-blue-500 text-white rounded-full font-semibold text-sm shadow-md hover:bg-blue-600 transition-colors duration-300"
//                                 onClick={() => setShowAddBudget(true)}
//                             >
//                                 ADD BUDGET
//                             </button>
//                         </div>
//                     </div>
//                 ))}
//             </div>

//             {/* Conditionally render AddBudget */}
//             {showAddBudget && (
//                 <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
//                     <div className="bg-white p-6 rounded-lg shadow-lg transform transition-transform duration-300 scale-90 animate-fade-in">
//                         <button
//                             className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg"
//                             onClick={() => setShowAddBudget(false)}
//                         >
//                             Close
//                         </button>
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default DashboardCard;
