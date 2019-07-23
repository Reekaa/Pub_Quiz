import React from 'react'

const Input = (props) => {
  return(
    <div className="input">
      <input className="input-textarea" onChange={props.function}></input>
    </div>
  )
}

export default Input