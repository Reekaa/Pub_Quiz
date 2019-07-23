const gameStartedReducer = (state=false, action) => {
  switch (action.type) {
    case 'GAME_STARTED':
      return true;
    case 'GAME_FINISHED':
      return false
    default:
    return state;
  };
};

export default gameStartedReducer;
