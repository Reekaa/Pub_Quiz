const teamReducer = (state=[], action) => {
  switch (action.type) {
    case 'ADD_TEAM_DATA':
      const newState = [...state, action.team]
      return newState;
    case 'BLITZ_TEAM_DATA':
      return []
    default:
      return state;
  };
};

export default teamReducer;
