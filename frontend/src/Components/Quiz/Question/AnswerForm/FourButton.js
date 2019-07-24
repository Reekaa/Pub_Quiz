import React, {Component} from 'react'
import BigButton from '../../../../PatternLibrary/BigButton'
import './AnswerForm.css'

class AnswerButtons extends Component {
  constructor(props) {
    super(props)
  }

  renderButtons() {
    return this.props.answers.map((answer, index) => {
      const correct = (this.props.correct === index);
      return <BigButton
        key={index}
        buttonText={answer}
        function={()=>{this.logAnswer(correct)}}
      /> 
    })
  };

  logAnswer(value) {
    if (this.props.currentTeam === this.props.teams.length) {
      this.props.setModal('answer')
    }
    if (value) {
      this.props.addScore(this.props.teamName)
      this.props.changeTeam(this.props.currentTeam+1)
    } else {
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
