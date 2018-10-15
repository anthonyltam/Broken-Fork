import { RECEIVE_RESTAURANT, RECEIVE_RESTAURANTS } from '../actions/restaurant_actions';
import { merge } from 'lodash';

const DEFAULT_STATE = {
  restaurants: []
}
const restaurantsReducer = (state = DEFAULT_STATE, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_RESTAURANTS:
    return merge({}, state, { restaurants: action.restaurants })
      // return {
      //   ...state,
      //   restaurants: action.restaurants
      // }
    case RECEIVE_RESTAURANT:
      return merge({}, state, { [action.restaurant.id]: action.restaurant });
    default:
      return state;
  }
}

export default restaurantsReducer;
