// components/Preview.js
import React from 'react';
import { format, addDays, addWeeks, addMonths, addYears } from 'date-fns';

const Preview = ({ startDate, recurrence }) => {
  const getRecurringDates = (date, recurrence) => {
    const dates = [];
    const currentDate = new Date(date);

    if (recurrence.type === 'none') {
        dates.push(format(currentDate, 'yyyy-MM-dd')); // Only show the selected date
        return dates;
      }

    for (let i = 0; i < 10; i++) { // Generate 10 occurrences
      dates.push(format(currentDate, 'yyyy-MM-dd'));
      switch (recurrence.type) {
        case 'daily':
          currentDate.setDate(currentDate.getDate() + recurrence.interval);
          break;
        case 'weekly':
          currentDate.setDate(currentDate.getDate() + 7 * recurrence.interval);
          break;
        case 'monthly':
          currentDate.setMonth(currentDate.getMonth() + recurrence.interval);
          break;
        case 'yearly':
          currentDate.setFullYear(currentDate.getFullYear() + recurrence.interval);
          break;
        default:
          break;
      }
    }
    return dates;
  };

  const recurringDates = startDate ? getRecurringDates(startDate, recurrence) : [];

  return (
    <div className="my-6 p-4 bg-gray-50 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-3">Preview Dates:</h3>
      {recurringDates.length > 0 ? (
        <ul className="list-disc pl-5">
          {recurringDates.map((date, index) => (
            <li key={index} className="text-gray-700">
              {date}
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500">No dates selected.</p>
      )}
    </div>
  );
};

export default Preview;
