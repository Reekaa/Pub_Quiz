import React from 'react';

const Button = (props) => {
  return(
    <div className='button' onClick={props.function}>{props.buttonText}</div>
  )
}

export default Button
