import React, {Component} from 'react'
import PlaceHolder from './Placeholder/Placeholder'
import Question from './Question/Question'
import Answer from './Answer/Answer'
import Result from './Result/Result'
import {connect} from 'react-redux'


class Quiz extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showModal: 'question',
      currentQuestion: 0,
    }
  }

  setModal = (value) => {
    this.setState({showModal: value})
  }
  incrementQuestion = () => {
    this.setState({currentQuestion: this.state.currentQuestion+1})
  }

  render() {
    return (
      <div className="quiz-container">
        {this.state.showModal === 'question' && !this.props.questions[this.state.currentQuestion].category && <PlaceHolder
          setModal={this.setModal}
          incrementQuestion={this.incrementQuestion}
          gameStarted = {this.gameStarted}
          category={this.props.questions[this.state.currentQuestion]}
        />}
        {this.state.showModal === 'question' && this.props.questions[this.state.currentQuestion].category && <Question
          setModal={this.setModal}
          teams={this.props.teams}
          questions={this.props.questions}
          currentQuestion={this.state.currentQuestion}
          incrementQuestion={this.incrementQuestion}
        />}
        {this.state.showModal === 'answer' && <Answer
          setModal={this.setModal}
          incrementQuestion={this.incrementQuestion}
        />}
        {this.state.showModal === 'result' && <Result setModal={this.setModal}/>}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    teams: state.teams ,
    questions: state.questions
  }
}

export default connect(mapStateToProps)(Quiz)
