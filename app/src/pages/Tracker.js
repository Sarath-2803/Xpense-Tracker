import React from 'react';
import { useLocation } from 'react-router';

const Tracker = () => {
  const location = useLocation();
  const { UserFields } = location.state || {};
  console.log({UserFields});
  return (
    <div>
      
      <h3>Enter Expenses</h3>
      <div className='expenseDiv'>
        <label></label>
        <input type="number" placeholder='0' />
      </div>
    </div>
  )
}

export default Tracker
