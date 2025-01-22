import { useState } from "react";

import { ITEMS } from "@/constants";


const DashboardCard = () => {
  const [showAddBudget, setShowAddBudget] = useState(false);
  const [viewSummary, setViewSummary] = useState(false)
  const [viewSummaryData, setViewSummaryData] = useState({});

  const [activeModal, setActiveModal] = useState(null); // Tracks which modal is active







  return (
    <div>


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
                Easily track and manage your {item.text.toLowerCase()}.
              </p>
              <button
                className=""

              >
                {item.content}
              </button>
            </div>
          </div>
        ))}
      </div>








      {/* modals */}








    </div>
  );
};

export default DashboardCard;

