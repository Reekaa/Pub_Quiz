const teamReducer = (state=[], action) => {
  switch (action.type) {
    case 'ADD_QUESTION_BATCH':
      const newState = [...state, action.category, ...action.questions]
      return newState;
    case 'REMOVE_QUESTION':
      const removeState = state.slice(0,1)
      return removeState
    default:
      return state;
  };
};

export default teamReducer;
