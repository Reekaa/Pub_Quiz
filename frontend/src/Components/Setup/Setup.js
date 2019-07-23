import React { Component } from 'react';
import { connect } from 'react-redux';
import AddTeamForm from './AddTeamForm/AddTeamForm'

function mapStatetoProps(state) {

}

const Setup = (props) => {

  return (
    <>
      <AddTeamForm />
      <TeamList />
      <StartGame />
    </>
  )

}

export default connect(mapStatetoProps)(Setup);
