import React from 'react';
import NextRound from './NextRound';
import Button from '../../../PatternLibrary/Button'

const Placeholder = (props) => {

  const handleGo = () => {
    props.incrementQuestion()
  }

  return(
    <div>
      <NextRound category={props.category}/>
      <Button
      function={() => {handleGo()}} buttonText='Go!'/>
    </div>
  )
};

export default Placeholder
