import React, {Component} from 'react'
import Header from '../../../PatternLibrary/Header'
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
        <Header
          header="Which operating system was released first?"
        />
        <AnswerForm
          correct_answer="Mac OS"
          incorrect_answers= {["Windows", "Linux", "OS/2"]}
          teamName='IncubationLab3'
          addScore={this.props.addScore}
        />
      </div>
    )
  }
}

const mapDispatchToProps = {
  addScore: (teamName) => ({type: 'ADD_POINTS', name: teamName})
}

export default connect(null, mapDispatchToProps)(Question);
