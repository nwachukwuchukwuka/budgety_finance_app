
const SavingGoals = () => {
    const goals = [
        { title: "Vacation", progress: 80 },
        { title: "Gift", progress: 80 },
        { title: "New Car", progress: 80 },
        { title: "Laptop", progress: 80 },
    ];

    return (
        <div className="p-6 bg-white max-w-md mt-6 shadow-lg rounded-xl">
            <h2 className="text-lg font-bold text-blue-700 mb-6">Saving Goals</h2>
            <div className="grid grid-cols-2 gap-6">
                {goals.map((goal, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center space-y-2"
                    >
                        {/* Circular Progress Bar */}
                        <div className="relative">
                            <svg className="w-20 h-20">
                                {/* Background Circle */}
                                <circle
                                    cx="40" // Center x-coordinate
                                    cy="40" // Center y-coordinate
                                    r="36" // Radius of the circle
                                    fill="none"
                                    stroke="#e5e7eb" // Light gray for the background circle
                                    strokeWidth="6" // Width of the stroke
                                />
                                {/* Progress Circle */}
                                <circle
                                    cx="40"
                                    cy="40"
                                    r="36"
                                    fill="none"
                                    stroke="#2563eb" // Blue color for progress
                                    strokeWidth="6"
                                    strokeDasharray={`${2 * Math.PI * 36}`} // Circumference of the circle
                                    strokeDashoffset={`${2 * Math.PI * 36 * ((100 - goal.progress) / 100)
                                        }`} // Dynamic offset based on progress
                                    strokeLinecap="round" // Rounded ends for the stroke
                                />
                            </svg>
                            {/* Percentage in the Center */}
                            <span className="absolute inset-0 flex items-center justify-center text-sm font-medium text-gray-500">
                                {goal.progress}%
                            </span>
                        </div>

                        {/* Goal Title */}
                        <p className="text-sm font-semibold text-blue-700">{goal.title}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SavingGoals;
