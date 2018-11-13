import { merge } from "lodash";

import { 
  RECEIVE_RESTAURANT,
  RECEIVE_REVIEW,
  RECEIVE_REVIEWS
} from "../actions/restaurant_actions";

const reviewsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  const { review } = action;

  switch (action.type) {
    // case RECEIVE_RESTAURANT:
    //   // console.log('action,' action);
    //   debugger
    //   return merge({}, state, action.reviews);
    case RECEIVE_REVIEW:
      return merge({}, state, { [action.review.review.id]: action.review });
    case RECEIVE_REVIEWS:
      return action.reviews;
    default:
      return state;
  }
};

export default reviewsReducer;
