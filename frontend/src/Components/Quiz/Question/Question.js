import React from 'react'
import QuestionHeader from './Header'
import AnswerForm from './AnswerForm'
import './Question.css'

const Question = (props) => {
  return(
    <div>
      <QuestionHeader />
      <AnswerForm />
    </div>
  )
}

export default Question
