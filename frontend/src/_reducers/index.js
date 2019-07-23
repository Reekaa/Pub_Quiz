import { combineReducers } from 'redux';

import teamReducer from './team_reducer';
import questionReducer from './question_reducer';
import gameStartedReducer from './game_started_reducer';

export default combineReducers({
  teams: teamReducer,
  questions: questionReducer,
  gameStarted: gameStartedReducer
});
