import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
// import restaurants from './restaurants_reducer';
// import reviews from './reviews_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  // restaurants,
  // reviews
});

export default entitiesReducer;
