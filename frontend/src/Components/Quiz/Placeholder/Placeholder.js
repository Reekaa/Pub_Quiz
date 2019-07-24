import React from 'react';
import NextRound from './NextRound';
import Button from '../../../PatternLibrary/Button'

const Placeholder = (props) => {

  return(
    <div>
      <NextRound />
      <Button
      function={() => {props.setModal('question')}} buttonText='Go!'/>
    </div>
  )
};

export default Placeholder
