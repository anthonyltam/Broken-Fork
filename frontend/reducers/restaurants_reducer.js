import { RECEIVE_RESTAURANT, RECEIVE_RESTAURANTS } from '../actions/restaurant_actions';
import { merge } from 'lodash';

const DEFAULT_STATE = {
  restaurants: []
}
const restaurantsReducer = (state = DEFAULT_STATE, action) => {
  Object.freeze(state);
  // console.log(action.restaurant)
  switch(action.type) {
    case RECEIVE_RESTAURANTS:
    return merge({}, state, { restaurants: action.restaurants });
      // return {
      //   ...state,
      //   restaurants: action.restaurants
      // }
    case RECEIVE_RESTAURANT:
      // console.log('helo')
      // debugger
      // return merge({}, state, { [action.restaurant.id]: action.restaurant });
      let newState =  merge({}, action.restaurant)
      // return merge({}, state, action.restaurant)
      // console.log(newState)
      return action.restaurant;
    default:
      return state;
  }
}

export default restaurantsReducer;
