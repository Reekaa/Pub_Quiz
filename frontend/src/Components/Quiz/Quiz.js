import React, {Component} from 'react'
import PlaceHolder from './Placeholder/Placeholder'
import Question from './Question/Question'
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
        {this.state.showModal === 'question' && <Question setModal={this.setModal} teams={this.props.teams}/>}
        {this.state.showModal === 'answer' && <Answer setModal={this.setModal}/>}
        {this.state.showModal === 'result' && <Result setModal={this.setModal}/>}
      </div>
    );
  }
}

export default Quiz
