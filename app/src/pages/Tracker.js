import React from 'react';
import Header from '../components/Header';

const Tracker = () => {
  return (
    <div>
      <form>
        <h1>Enter Your Expenses</h1>
        <label>Breakfast </label>
        <input type="number" placeholder="Enter Expense" />
      </form>
    </div>
  );
}

export default Tracker;