import React, { Component } from 'react';
import { connect } from 'react-redux';
import AddTeamForm from './AddTeamForm/AddTeamForm';
import TeamList from './TeamList/TeamList';
import StartGame from './StartGame/StartGame';
// import { categoryConversion }  from '../_helpers/categoryConversion';

// replace with import:
const categoryConversion = {
  generalKnowledge: 9,
  books: 10,
  film: 11,
  music: 12,
  musicalsTheatre: 13,
  television: 14,
  videoGames: 15,
  boardGames: 16,
  nature: 17,
  computers: 18,
  mathematics: 19,
  mythology: 20,
  sports: 21,
  geography: 22,
  history: 23,
  politics: 24,
  art: 25,
  celebrities: 26,
  animals: 27,
  vehicles: 28,
  comics: 29,
  gadgets: 30,
  anime: 31,
  cartoons: 32
}

const createTeam = (teamName) => {
  return {
    name: teamName,
    score: 0
  };
};

const selectedCategories = [
  'generalKnowledge',
  'film',
  'music',
  'sports',
  'celebrities'
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
    selectedCategories.forEach(category => {
      dispatch(() => {
        fetch(`https://opentdb.com/api.php?amount=5&category=${categoryConversion[category]}&difficulty=easy&type=multiple`)
        .then(res => res.json())
        .then(questionsData => {
          console.log(questionsData);
          dispatch({
            type: 'ADD_QUESTION_BATCH',
            category,
            questions: questionsData.results
          },
          {
            type: 'GAME_STARTED'
          }
        )
        })

      })
    })
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

export default connect(null, mapDispatchToProps)(Setup);
