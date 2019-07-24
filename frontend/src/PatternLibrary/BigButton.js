import React from 'react'

const BigButton = (props) => {
  return(
    <div className='big-button' onClick={props.function}>
      <div>{props.buttonText}</div>
    </div>
  )
}

export default BigButton
