import { RECEIVE_RESTAURANT, RECEIVE_RESTAURANTS, RECEIVE_REVIEW } from '../actions/restaurant_actions';
import { merge } from 'lodash';


const restaurantsReducer = (state = {}, action) => {
  Object.freeze(state);
  // console.log(action.restaurant)
  let newState = merge({}, state);
  switch (action.type) {
    case RECEIVE_RESTAURANTS:
      // action.restaurants.forEach( restaurant => {
      //   newState[restaurant.id] = restaurant;
      // })
      return merge(newState, action.restaurants);
    case RECEIVE_RESTAURANT:
      newState[action.restaurant.id] = action.restaurant;
      return newState;
    // case RECEIVE_REVIEW:
    //   const { review } = action;
    //   // debugger
    //   if (newState[review.review.restaurant_id].reviewIds) {

    //     newState[review.review.restaurant_id].reviewIds.push(review.id);
    //   } else {
    //     newState[review.review.restaurant_id].reviewIds = []; 
    //     newState[review.review.restaurant_id].reviewIds.push(review.id);
    //   }
    //   return newState;
    default:
      return state;
  }
};

export default restaurantsReducer;
