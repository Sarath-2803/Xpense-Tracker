import React from 'react';
import { Link } from 'react-router-dom';
import './LinkButton.css';

const LinkButton = ({text,linkto,id,fun}) => {
  return (
    <div>
     <Link to={linkto}>
         <button id={id} onClick={fun}>
            {text}
         </button>
     </Link> 
    </div>
  )
}

export default LinkButton;