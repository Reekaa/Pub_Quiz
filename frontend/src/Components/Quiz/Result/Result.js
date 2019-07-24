import React, { Component } from 'react'
import { connect } from 'react-redux'
import BigButton from '../../PatternLibrary/BigButton'
import ScoreBoard from './ScoreBoard'
import Header from '../../PatternLibrary/Header'

class Result extends Component{
  constructor(props){
    super(props)
    this.state = {
      reveal: null
    }
  }
  
  render(){
    return(
      <div>
        <Header header='Results'/>
        <ScoreBoard leaders={props.teams}/>
        <BigButton buttonText='New Game' function={this.handleClick}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return state.teams;
};

const mapDispatchToProps = (dispatch) => {
  handleNewGameClick = () => {
    dispatch({
      type: 'BLITZ_TEAM_DATA'
    })
    dispatch({
      type: 'GAME_FINISHED'
    })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Result)