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

  // this prevents any overhead from creating the object each time

  decodeEntities (str) {
    var txt = document.createElement("textarea");
    txt.innerHTML = str;
    return txt.value;
  }



  render() {
    return(
      <div>
        <Header
          header={this.decodeEntities(this.props.questions[this.props.currentQuestion].question)}
        />
        <AnswerForm
          correct_answer={this.props.questions[this.props.currentQuestion].correct_answer}
          incorrect_answers= {this.props.questions[this.props.currentQuestion].incorrect_answers}
          teamName={this.props.teams[this.state.currentTeam-1].name}
          addScore={this.props.addScore}
          setModal={this.props.setModal}
          changeTeam={this.changeTeam}
          currentTeam={this.state.currentTeam}
          teams={this.props.teams}
          decodeEntities={this.decodeEntities}
        />
      </div>
    )
  }
}

const mapDispatchToProps = {
  addScore: (teamName) => ({type: 'ADD_POINTS', name: teamName})
}

export default connect(null, mapDispatchToProps)(Question);
