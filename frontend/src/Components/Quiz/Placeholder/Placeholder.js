import React from 'react';
import NextRound from './NextRound';
import Button from '../../../PatternLibrary/Button'

const Placeholder = (props) => {

  const handleGo = () => {
    props.setModal('question')
    props.incrementQuestion()
  }

  return(
    <div>
      <NextRound category={this.props.category}/>
      <Button
      function={() => {props.setModal('question')}} buttonText='Go!'/>
    </div>
  )
};

export default Placeholder
