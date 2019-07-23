import React, {Component} from 'react'
import ButtonsHeader from './AnswerForm/Header'
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
        <ButtonsHeader teamName={this.props.teamName} />
        <AnswerButtons
          answers={this.state.answers}
          correct={this.state.correct}
        />
      </div>
    )
  }
}

export default AnswerForm
