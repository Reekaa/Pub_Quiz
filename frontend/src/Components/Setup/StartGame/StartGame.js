import React from 'react';
import Button from '../../../PatternLibrary/Button';

const StartGame = (props) => {

  const handleClick = () => {
    props.getQuestions()
    setTimeout(function(){ props.toggleQuiz(true); }, 1000);
  }

  return (
    <Button function={() => handleClick()} buttonText={'some text'}/>
  )

};

export default StartGame;
