// pages/index.js
import React from 'react';
import RecurringDatePicker from '../app/components/RecurringDatePicker';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <RecurringDatePicker />
    </div>
  );
};

export default HomePage;
