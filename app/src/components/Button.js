import React from 'react';
import propTypes from 'prop-types';

const Button = ({id,text,onClick}) => {
  return (
    <button id={id} onClick={onClick}>
        {text}
    </button>
  )
}

Button.propTypes = {
    text : propTypes.string.isRequired,
    id : propTypes.string,
    onClick : propTypes.func
};

export default Button