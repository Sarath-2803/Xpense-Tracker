import React from 'react';
import { useLocation } from 'react-router';
import './Tracker.css';
import Button from '../components/Button';

const Tracker = () => {
  const location = useLocation();
  const { UserFields } = location.state || {};
  console.log('userfields=',{UserFields});

  const handleSubmit = () => {
  }

  return (
    <div id='expenseContainer'>
      <h3>Enter Expenses</h3>
      
      <form>
        {UserFields && Object.entries(UserFields).map((field, index) => (
          <div id='expenseDiv'>
          <label>{field[1]}</label>
          <input type="number" placeholder='0' />
          </div>
        ))}

        </form>
        <Button text='Submit' id='submitBtn' onClick={handleSubmit}/>
     
    </div>
  )
}

export default Tracker
