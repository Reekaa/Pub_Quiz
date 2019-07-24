import React from 'react';
import { connect } from 'react-redux';
import List from './List';
import Header from './Header'

const TeamList = (props) => {
  return (
    <>
    <Header />
    <List createListItems = {createListItems}
          teams = {props.teams}
     />

    </>
  )
}

const createListItems = (teams) => {
  return teams.map((team, index) => {
     return <li key = {index}>{team.name}</li>
   }
   )
}

const mapDispatchToProps = (dispatch) => {
  return {
    addTeam: (team) => {
      dispatch({
        type: 'ADD_TEAM_DATA',
        team: team
      })
    },
    removeTeam: () => {
      dispatch({
        type: 'BLITZ_TEAM_DATA'
      })
    }
  };
};

const mapStateToProps = (state) => {
  return{
    teams: state.teams
  }
};


export default connect(mapStateToProps, mapDispatchToProps)(TeamList)
