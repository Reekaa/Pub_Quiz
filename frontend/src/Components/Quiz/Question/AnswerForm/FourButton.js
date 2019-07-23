import React, {Component} from 'react'
import './AnswerForm.css'

class AnswerButtons extends Component {
  constructor(props) {
    super(props)
  }

  renderButtons() {
    return this.props.answers.map((answer, index) => {
      const correct = (this.props.correct === index);
      return <button
        key={index}
        className='answer'
        onClick={()=>{this.logAnswer(correct)}}
        >
          {answer}
        </button>
    })
  };

  logAnswer(value) {
    if (value) {
      console.log(value);
    } else {
      console.log(value);
    }
  };

  render() {
    return(
      <div>
        <div className='answer-container'>
          {this.renderButtons()}
        </div>
      </div>
    )
  }
}

export default AnswerButtons
