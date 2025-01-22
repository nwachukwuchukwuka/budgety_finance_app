import { FaLongArrowAltLeft } from "react-icons/fa";

const ViewSummary = ({ setViewSummary, setShowAddBudget, viewSummaryData }) => {
  const viewSummaryHandle = () => {
    setViewSummary(false);
    setShowAddBudget(false);
  };

  const handleBackArrow = () => {
    setShowAddBudget(true);
    setViewSummary(false);
  };

  return (
    <div>
      <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 px-4">
        <div className="bg-white w-full max-w-lg p-6 rounded-lg shadow-xl relative">
          {/* Progress Bar */}
          <div className="w-full max-w-xs mx-auto mb-6">
            <div className="bg-gray-200 h-2 rounded-full">
              <div className="bg-blue-700 h-2 rounded-full" style={{ width: "100%" }}></div>
            </div>
            <p className="text-center text-sm font-semibold">2 of 2</p>
          </div>

          {/* Back Arrow */}
          <div className="cursor-pointer mb-4" onClick={handleBackArrow}>
            <FaLongArrowAltLeft className="text-blue-600" size={28} />
          </div>

          {/* Modal Title */}
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
            Preview Your New Budget Summary
          </h2>

          {/* Budget Details */}
          <div className="space-y-8">
            {/* Budget Name */}
            <div className="text-center">
              <p className="text-sm text-gray-500 uppercase">Budget Name</p>
              <p className="text-4xl font-bold text-gray-800">{viewSummaryData.name}</p>
            </div>

            {/* Budget Limit */}
            <div className="text-center">
              <p className="text-sm text-gray-500 uppercase">Budget Limit</p>
              <p className="text-4xl font-bold text-gray-800">${viewSummaryData.limit}</p>
            </div>

            {/* Budget Categories and Frequency Section */}
            <div className="flex justify-between items-start">
              <div className="flex-1 space-y-2">
                <h3 className="text-lg font-semibold text-gray-800">Budget Categories</h3>
                {viewSummaryData.categories.map((category) => (
                  <p className="text-gray-700">{category}</p>
                ))}
            
              </div>

              <div className="flex-1 space-y-2">
                <h3 className="text-lg font-semibold text-gray-800">Frequency</h3>
                <p className="text-gray-700">Weekly</p>
                <h3 className="text-lg font-semibold text-gray-800">Notify at</h3>
                <p className="text-gray-700">70%</p>
              </div>
            </div>
          </div>

          {/* Close Button */}
          <div className="flex justify-end mt-8">
            <button
              onClick={viewSummaryHandle}
              className="px-6 py-3 bg-blue-500 text-white text-lg rounded-lg hover:bg-blue-600 transition-colors"
            >
              Add Budget
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewSummary;
