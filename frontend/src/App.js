import React from 'react';
import Quiz from './Components/Quiz/Quiz';
import Setup from './Components/Setup/Setup.js';
import './App.css';
import './StyleLibrary.css';

function App() {
  return (
    <div className="App">
      <Setup />
      <Quiz />
    </div>
  );
}

export default App;
