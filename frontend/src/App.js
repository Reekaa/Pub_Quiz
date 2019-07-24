import React, {Component} from 'react';
import logo from './logo.svg';
import Quiz from './Components/Quiz/Quiz';
import Setup from './Components/Setup/Setup';
import './App.css';
import './StyleLibrary.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showQuiz: false
    }
    this.toggleQuiz = this.toggleQuiz.bind(this)
  }

  toggleQuiz(value) {
    console.log(value);
    this.setState({showQuiz: value})
  }

  render() {
    return (
      <div className="App">
        {!this.state.showQuiz && <Setup toggleQuiz={this.toggleQuiz}/>}
        {this.state.showQuiz && <Quiz toggleQuiz={this.toggleQuiz}/>}
      </div>
    );
  }
}

export default App;
