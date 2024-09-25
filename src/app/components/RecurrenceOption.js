// components/RecurrenceOptions.js
import React from 'react';
import useStore from '../store/useStore';

const RecurrenceOptions = ({ onChange }) => {
  const { recurrence, setRecurrence } = useStore();

  const handleRecurrenceChange = (e) => {
    const { value } = e.target;
    setRecurrence({ ...recurrence, type: value });
  };

  return (
    <div className="my-4">
    <label className="block text-sm font-medium mb-2">Recurrence:</label>
    <select
      onChange={handleRecurrenceChange}
      value={recurrence.type}
      className="border rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
      <option value="none">None</option>
      <option value="daily">Daily</option>
      <option value="weekly">Weekly</option>
      <option value="monthly">Monthly</option>
      <option value="yearly">Yearly</option>
    </select>
    {/* Additional options for customization can be added here */}
  </div>
  );
};

export default RecurrenceOptions;
