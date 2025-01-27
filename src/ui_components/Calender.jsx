import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setShowDatePicker(false); // Close the date picker after selecting a date
  };

  return (
    <div className="relative">
      {/* Button to toggle the date picker */}
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
        onClick={() => setShowDatePicker(!showDatePicker)}
      >
        {selectedDate.toLocaleDateString()}
      </button>

      {/* Date Picker with Animation */}
      <div
        className={`absolute top-12 left-0 z-50 ${
          showDatePicker
            ? 'opacity-100 translate-y-0 transition-all duration-300 ease-out'
            : 'opacity-0 -translate-y-4 pointer-events-none transition-all duration-300 ease-in'
        }`}
      >
        <DatePicker
          selected={selectedDate}
          onChange={handleDateChange}
          inline // Renders the calendar inline
          className="border border-gray-200 rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
};

export default Calendar;