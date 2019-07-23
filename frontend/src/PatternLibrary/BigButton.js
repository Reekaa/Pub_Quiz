import React from 'react'

const BigButton = (props) => {
  return(
    <div className='big-button' onClick={props.function}>
      {props.buttonText}
    </div> 
  )  
}

export default BigButton