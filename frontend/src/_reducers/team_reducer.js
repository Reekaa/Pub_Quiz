const teamReducer = (state=[], action) => {
  switch (action.type) {
    case 'ADD_TEAM_DATA':
      const newState = [...state, action.team]
      return newState;
    case 'BLITZ_TEAM_DATA':
      return []
    case 'ADD_POINTS':
      let teamState
      for (team of state) {
        if (action.name === team.name) {
          teamState = team
        }
      }
      let newState [...state, {...teamState, score: (teamstate.score+1)}]
      return newState
    default:
      return state;
  };
};

export default teamReducer;
