import React, { Component } from 'react';
import { connect } from 'react-redux';
import AddTeamForm from './AddTeamForm/AddTeamForm';
import TeamList from './AddTeamForm/AddTeamForm';
import StartGame from './StartGame/StartGame';

const createTeam = (teamName) => {
  return {
    name: teamName,
    score: 0
  };
};

const selectedCategories = [
  'General Knowledge',
  'Entertainment: Film',
  'Entertainment: Music',
  'Sports', 'Celebrities'
];

const mapStateToProps = (state) => {
  return state.teams;
};

const mapDispatchToProps = (dispatch) => ({
  addTeam(teamName) {
    const newTeam = createTeam(teamName);
    dispatch({
      type: 'ADD_TEAM_DATA',
      team: newTeam
    })
  },
  getQuestions() {
    const categories = questionCategories.forEach(category => {
      dispatch(() => {
        fetch(`https://opentdb.com/api.php?amount=5&category=${category.number}&difficulty=easy&type=multiple`)
        .then(res => res.json())
        .then(questionsData => {
          dispatch({
            type: 'ADD_QUESTION_BATCH',
            data: questionsData
          })
        })
      })
    })
    Promise.race(categories).then(
      dispatch(( => {

      }))
    );
  }
})

const Setup = (props) => {

  return (
    <>
      <h1>SetUp rendering THIS</h1>
      <AddTeamForm addTeam={props.addTeam}/>
      <TeamList teams={props.teams}/>
      <StartGame getQuestions={props.getQuestions}/>
    </>
  )

}

export default connect(mapDispatchToProps)(Setup);
