import { combineReducers } from 'redux';
import { routerStateReducer } from 'redux-router';
import EventReducer from './EventReducer';
import UserReducer from './UserReducer';

export default combineReducers({
  event: EventReducer,
  router: routerStateReducer,
  user: UserReducer,
});
