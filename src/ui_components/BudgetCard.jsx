import React from 'react'

const BudgetCard = ({ summary }) => {
    return (
        <div>
            <div
                className="pt-[50px] w-[250px] p-4 border border-gray-300 rounded-xl shadow-lsm bg-white hover:shadow-xl transition-shadow duration-200"
            >
                {/* Card Title */}
                <p className="text-lg font-semibold text-gray-800 mb-2">{summary?.name}</p>

                {/* Notification */}
                <p className="text-sm text-gray-500 mb-2">
                    Notification: <span className="font-medium text-gray-700">{summary.notification}</span>
                </p>

                {/* Limit */}
                <p className="text-sm text-gray-500">
                    Limit: <span className="font-medium text-gray-700">${summary.limit}</span>
                </p>
            </div>
        </div>
    )
}

export default BudgetCard