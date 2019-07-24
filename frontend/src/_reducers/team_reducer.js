const teamReducer = (state=[{name: 'IncubationLab3', score: 0}, {name: 'IncubationLab2', score: 0}, {name: 'IncubationLab1', score: 0}], action) => {
  switch (action.type) {
    case 'ADD_TEAM_DATA':
      const newState = [...state, action.team]
      return newState;
    case 'BLITZ_TEAM_DATA':
      return []
    case 'ADD_POINTS':
      let newPoints = state.map((team, index) => {
        if (action.name === team.name) {
          let newTeam = {name: team.name, score: (team.score+1)}
          return newTeam
        } else {
          return team
        }
      })
      return newPoints;
    default:
      return state;
  };
};

export default teamReducer;
