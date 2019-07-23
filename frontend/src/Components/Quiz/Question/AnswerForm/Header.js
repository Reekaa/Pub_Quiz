import React from 'react'
import './AnswerForm.css'

const ButtonsHeader = (props) => {
  return(
    <div className='teamname-container'>
      <div className='teamname'>Team: </div>
      <div className='teamname'>{props.teamname}</div>
    </div>
  )
}

export default ButtonsHeader
