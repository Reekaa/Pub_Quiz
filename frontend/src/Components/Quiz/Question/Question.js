import React, {Component} from 'react'
import Header from '../../../PatternLibrary/Header'
import AnswerForm from './AnswerForm'
import {connect} from 'react-redux'
import './Question.css'

class Question extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentTeam: 1
    }
  }

  changeTeam = (value) => {
    this.setState({currentTeam: value})
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
          teamName={this.props.teams[this.state.currentTeam-1].name}
          addScore={this.props.addScore}
          setModal={this.props.setModal}
          changeTeam={this.changeTeam}
          currentTeam={this.state.currentTeam}
          teams={this.props.teams}
        />
      </div>
    )
  }
}

const mapDispatchToProps = {
  addScore: (teamName) => ({type: 'ADD_POINTS', name: teamName})
}

export default connect(null, mapDispatchToProps)(Question);
