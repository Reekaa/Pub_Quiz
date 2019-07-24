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
    console.log(this.props.currentTeam);
    console.log(this.props.teams.length);
    if (this.props.currentTeam === this.props.teams.length) {
      this.props.setModal('answer')
    }
    if (value) {
      console.log(this.props.teamName);
      this.props.addScore(this.props.teamName)
      this.props.changeTeam(this.props.currentTeam+1)
    } else {
      console.log(value);
      this.props.changeTeam(this.props.currentTeam+1)
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
