import React from 'react';
import Button from '../../../PatternLibrary/Button';

const StartGame = (props) => {

  return (
    <Button handleClick={props.getQuestions} />
  )

};

export default StartGame;
