import React, {Component} from 'react'
import PlaceHolder from './Placeholder/Placeholder'
import {Question} from './Question/Question'
import Answer from './Answer/Answer'
import Result from './Result/Result'

class Quiz extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showModal: 'placeholder'
    }
  }

  setModal = (value) => {
    this.setState({showModal: value})
  }

  render() {
    return (
      <div className="quiz-container">
        {this.state.showModal === 'placeholder' && <PlaceHolder setModal={this.setModal}/>}
        {this.state.showModal === 'question' && <Question />}
        {this.state.showModal === 'answer' && <Answer />}
        {this.state.showModal === 'result' && <Result />}
      </div>
    );
  }
}

export default Quiz
