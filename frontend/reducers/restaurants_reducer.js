import { RECEIVE_RESTAURANT, RECEIVE_RESTAURANTS } from '../actions/restaurant_actions';
import { merge } from 'lodash';


const restaurantsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  switch (action.type) {
    case RECEIVE_RESTAURANTS:
      return merge(newState, action.restaurants);
    case RECEIVE_RESTAURANT:
      newState[action.restaurant.id] = action.restaurant;
      return newState;
    default:
      return state;
  }
};

export default restaurantsReducer;
