import React from 'react'
import './AnswerForm.css'

const AnswerButtons = (props) => {
  return(
    <div>
      <div className='answer-container'>
        <button className='answer'>London</button>
        <button className='answer'>Paris</button>
        <button className='answer'>Rome</button>
        <button className='answer'>None of the above</button>
      </div>
    </div>
  )
}

export default AnswerButtons
