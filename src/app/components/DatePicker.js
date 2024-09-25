// components/DatePicker.js
import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import useStore from '../store/useStore';

const CustomDatePicker = ({ onChange }) => {
  const { startDate, setStartDate } = useStore();

  return (
    <div className="my-4">
    <label className="block text-sm font-medium mb-2">Start Date:</label>
    <DatePicker
      selected={startDate}
      onChange={(date) => {
        setStartDate(date);
        onChange(date);
      }}
      placeholderText="Select a date"
      className="border rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  </div>
  );
};

export default CustomDatePicker;
