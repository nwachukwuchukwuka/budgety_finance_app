import React, { useState } from "react";

const TransactionComponent = () => {
  // State for managing modals
  const [isFirstModalOpen, setIsFirstModalOpen] = useState(false);
  const [isSecondModalOpen, setIsSecondModalOpen] = useState(false);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Main Page Content */}
      <h1 className="text-2xl font-bold mb-4">Hello, Nwachukwu</h1>
      <p className="text-gray-600 mb-4">3 of 5</p>

      <button
        onClick={() => setIsFirstModalOpen(true)}
        className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
      >
        ADD TRANSACTION
      </button>

      <p className="mt-4 text-gray-600">
        Whether you have synced your bank account or not, you can manually add
        transactions if you want.
      </p>

      <div className="mt-6">
        <h2 className="text-xl font-semibold">Your Total Net Worth</h2>
        <button className="mt-2 text-blue-500 hover:underline">
          View All Accounts
        </button>
      </div>

      {/* First Modal */}
      {isFirstModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <h2 className="text-xl font-bold mb-4">Step 3</h2>
            <p className="text-gray-600 mb-4">
              Whether you have synced your bank account or not, you can manually
              add transactions if you want.
            </p>

            <div className="space-y-4">
              <button
                onClick={() => {
                  setIsFirstModalOpen(false);
                  setIsSecondModalOpen(true);
                }}
                className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
              >
                Inflow
              </button>
              <button className="w-full px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors">
                Expense
              </button>
              <button className="w-full px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors">
                Savings
              </button>
            </div>

            <button
              onClick={() => setIsFirstModalOpen(false)}
              className="mt-4 px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Second Modal */}
      {isSecondModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <h2 className="text-xl font-bold mb-4">Add an Inflow Transaction</h2>

            <div className="space-y-4">
              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Select the source of inflow
                </label>
                <select className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2 outline-none">
                  <option>Checking</option>
                  <option>Credit</option>
                  <option>Cash</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Transportation Date
                </label>
                <input
                  type="date"
                  className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2 outline-none"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Description
                </label>
                <input
                  type="text"
                  className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2 outline-none"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Will this be repeated?
                </label>
                <input
                  type="checkbox"
                  className="form-checkbox text-blue-500 focus:ring-blue-300"
                />
              </div>
            </div>

            <div className="mt-6 flex justify-end gap-4">
              <button
                onClick={() => {
                  setIsSecondModalOpen(false);
                  setIsFirstModalOpen(true);
                }}
                className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition-colors"
              >
                Back
              </button>
              <button
                onClick={() => setIsSecondModalOpen(false)}
                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
              >
                VIEW SUMMARY
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TransactionComponent;