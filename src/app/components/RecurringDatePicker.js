// components/RecurringDatePicker.js
"use client"
import React from 'react';
import DatePicker from './DatePicker';
import RecurrenceOptions from './RecurrenceOption';
import Preview from './Preview';
import useStore from '../store/useStore';

const RecurringDatePicker = () => {
  const { startDate, recurrence, setStartDate, setRecurrence } = useStore();

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
    <h2 className="text-2xl font-bold mb-4">Select Recurring Dates</h2>
    <DatePicker onChange={setStartDate} />
    <RecurrenceOptions onChange={setRecurrence} />
    <Preview startDate={startDate} recurrence={recurrence} />
  </div>
  );
};

export default RecurringDatePicker;
