import React from 'react'

const Placeholder = (props) => {

  const handleGo = () => {
    props.setModal('question')
    props.incrementQuestion()
  }

  return(
    <div>
      <button className='button' onClick={() => {handleGo()}}>Go!</button>
    </div>
  )
}

export default Placeholder
