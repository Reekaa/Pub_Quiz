import React from 'react'

const Placeholder = (props) => {

  const handleGo = () => {
    props.setModal('question')
  }

  return(
    <div>
      <button className='button' onClick={() => {handleGo()}}>Go!</button>
    </div>
  )
}

export default Placeholder
