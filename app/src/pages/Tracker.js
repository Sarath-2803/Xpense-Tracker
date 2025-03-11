import React from 'react';
import Header from '../components/Header';
import './Tracker.css';

let item=1;

const Tracker = () => {
  return (
    <div>
      <form>
        <h1>Enter Your Expenses</h1>

        <label>Br</label>
        <input type='text' id={item}/>
        
      </form>
    </div>
  );
}

export default Tracker;