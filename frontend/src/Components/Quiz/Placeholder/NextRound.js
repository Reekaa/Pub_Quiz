import React from 'react'

const NextRound = (props) => {

 const text = `Your next round is ${props.category}`

  return(
    <div>
      <div className='next-round-text' >{text}</div>
    </div>
  )
}

export default NextRound
