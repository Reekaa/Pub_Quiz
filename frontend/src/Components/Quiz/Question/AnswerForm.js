import React, {Component} from 'react'
import Header from '../../../PatternLibrary/Header'
import AnswerButtons from './AnswerForm/FourButton'
import './Question.css'

class AnswerForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      answers: [],
      correct: 5
    }

  }

  componentDidMount() {
    let answers = this.props.incorrect_answers
    const randomAnswer = Math.floor(Math.random() * Math.floor(answers.length+1))
    answers.splice(randomAnswer, 0, this.props.correct_answer)
    this.setState({answers: answers, correct: randomAnswer})
  }

  render() {
    return(
      <div className='answer-form-Container'>
        <div className='teamname-container'>
          <Header header='Team: ' />
          <Header header={this.props.teamname}/>
        </div>
        <AnswerButtons
          answers={this.state.answers}
          correct={this.state.correct}
          teamName={this.props.teamName}
          addScore={this.props.addScore}
          setModal={this.props.setModal}
          changeTeam={this.props.changeTeam}
          currentTeam={this.props.currentTeam}
          teams={this.props.teams}
        />
      </div>
    )
  }
}

export default AnswerForm
