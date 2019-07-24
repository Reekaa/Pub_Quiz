import React from 'react';
import TeamList from './TeamList';

const List = (props) => {
  return (
    <ul>
      {props.createListItems(props.teams)}
    </ul>
  )
}

export default List;
