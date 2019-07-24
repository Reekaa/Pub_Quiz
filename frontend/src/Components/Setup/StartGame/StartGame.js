import React from 'react';
import Button from '../../../PatternLibrary/Button';

const StartGame = (props) => {

  return (
    <Button function={props.getQuestions} buttonText={'some text'}/>
  )

};

export default StartGame;
