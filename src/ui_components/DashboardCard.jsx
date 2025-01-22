import { useState } from "react";

import { ITEMS } from "@/constants";
import ViewSummaryModal from "./ViewSummaryModal";
import AddBudgetModal from "./AddBudgetModal";



const DashboardCard = () => {
  const [showAddBudget, setShowAddBudget] = useState(false);
  const [viewSummary, setViewSummary] = useState(false)
  const [viewSummaryData, setViewSummaryData] = useState({});






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
      {showAddBudget && !viewSummary && (
        <AddBudgetModal setViewSummary={setViewSummary} setShowAddBudget={setShowAddBudget} setViewSummaryData={setViewSummaryData} />
      )}

      {/* view summary modal */}
      {viewSummary && (
        <ViewSummaryModal setViewSummary={setViewSummary} setShowAddBudget={setShowAddBudget} viewSummary={viewSummary} viewSummaryData={viewSummaryData} />
      )}



    </div>
  );
};

export default DashboardCard;