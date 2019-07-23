import React, {Component} from 'react'
import QuestionHeader from './Header'
import AnswerForm from './AnswerForm'
import {connect} from 'react-redux'
import './Question.css'

class Question extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div>
        <QuestionHeader
          question="Which operating system was released first?"
        />
        <AnswerForm
          correct_answer="Mac OS"
          incorrect_answers= {["Windows", "Linux", "OS/2"]}
          teamName='IncubationLab3'
        />
      </div>
    )
  }

}

const mapDispatchToProps = {
  addScore: (teamName) => ({
      type: 'ADD_POINTS',
      name: teamName
    })
  }



export default connect(null, mapDispatchToProps)(Question);
