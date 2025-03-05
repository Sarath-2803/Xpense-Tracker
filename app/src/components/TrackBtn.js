import React from 'react';
import { Link } from 'react-router-dom';
import './TrackBtn.css';

const TrackBtn = () => {
  return (
    <div>
     <Link to="/tracker">
         <button>
            Track Expense
         </button>
     </Link> 
    </div>
  )
}

export default TrackBtn;