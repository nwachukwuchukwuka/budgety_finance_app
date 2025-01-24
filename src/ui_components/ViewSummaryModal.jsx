"use client";
import AppContext from "@/services/AppContext";
import React, { useContext } from "react";

const ViewSummaryModal = ({
  viewSummaryData,
  setViewSummaryData,
  setName,
  setLimit,
  setFrequency,
  setNotification,
  setCurrency,
  setSelectedItems }) => {
  const { addToSummaryArray, setShowModal } = useContext(AppContext)




  const handleAdd = () => {
    addToSummaryArray(viewSummaryData)
    setViewSummaryData({});
    setName("")
    setLimit("")
    setFrequency("")
    setNotification(100)
    setCurrency("")
    setSelectedItems({})

    setShowModal(false); // Close the modal
  };



  return (

    <div>
      <div className="h-[420px] md:w-[460px] overflow-y-scroll  scrollbar-hidden">

        <div className=" w-full max-w-lg  rounded-lg">
          {/* Progress Bar */}
          <div className="w-full max-w-xs mx-auto mb-4">
            <div className="bg-gray-200 h-2 rounded-full">
              <div className="bg-blue-700 h-2 rounded-full" style={{ width: "100%" }}></div>
            </div>
            <p className="text-center text-sm font-semibold">2 of 2</p>
          </div>



          {/* Modal Title */}
          <h2 className="text-lg font-semibold text-gray-800 mb-4 text-center">
            Preview Your New Budget Summary
          </h2>

          {/* Budget Details */}
          <div className="space-y-6">
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
                <p className="text-gray-700">{viewSummaryData.frequency}</p>
                <h3 className="text-lg font-semibold text-gray-800">Notify at</h3>
                <p className="text-gray-700">{viewSummaryData.notification}</p>
              </div>
            </div>
          </div>

          {/* Close Button */}
          <div className="flex justify-end mt-8">
            <button
              onClick={handleAdd}
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

export default ViewSummaryModal;
