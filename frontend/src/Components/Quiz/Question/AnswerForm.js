import React from 'react'
import ButtonsHeader from './AnswerForm/Header'
import AnswerButtons from './AnswerForm/FourButton'
import './Question.css'

const AnswerForm = (props) => {
  return(
    <div className='answer-form-Container'>
      <ButtonsHeader teamname='IncubationLab3' />
      <AnswerButtons />
    </div>
  )
}

export default AnswerForm
