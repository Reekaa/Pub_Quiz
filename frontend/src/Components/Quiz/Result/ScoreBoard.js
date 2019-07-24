import React from 'react'
import ListItem from '../../PatternLibrary/ListItem'
import Score from './Score'

const ScoreBoard = (props) => {

  const renderLeaderBoard = props.leaders.map((team) => {
    return (
      <div>
        <ListItem text={team.name}/>
        <Score text={team.score}/>
      </div>
    )
  })

  return(
    <div>
      {renderLeaderBoard()}
    </div>
  )
}

export default ScoreBoard