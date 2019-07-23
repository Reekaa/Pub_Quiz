import React { Component } from 'react';
import { connect } from 'react-redux';
import AddTeamForm from './AddTeamForm/AddTeamForm'
import TeamList from './AddTeamForm/AddTeamForm'
import AddTeamForm from './AddTeamForm/AddTeamForm'

const createTeam = (teamName) => {
  return {
    name: teamName,
    score: 0
  };
};

const mapStateToProps = (state) => {
  return state.teams;
};

const mapDispatchToProps = (dispatch) => ({
  addTeam(teamName) {
    const newTeam = createTeam(teamName);
    dispatch({
      type: 'ADD_TEAM',
      data: newTeam
    })
  },
  getQuestions() {
    dispatch(() => {
      fetch('https://opentdb.com/api.php?amount=5&category=12&difficulty=easy&type=multiple')
      .then(res => res.json())
      .then(questionsData => {
        dispatch({
          type: 'ADD_QUESTIONS',
          data: questionsData
        })
      })
    })
  }
})

const Setup = (props) => {

  return (
    <>
      <AddTeamForm addTeam={props.addTeam}/>
      <TeamList teams={props.teams}/>
      <StartGame getQuestions={props.getQuestions}/>
    </>
  )

}

export default connect(mapDispatchToProps)(Setup);
