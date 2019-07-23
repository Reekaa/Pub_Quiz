import React from 'react'
import './Question.css'

const QuestionHeader = (props) => {
  return(
    <div className='question'>
      {props.question}
    </div>
  )
}

export default QuestionHeader
