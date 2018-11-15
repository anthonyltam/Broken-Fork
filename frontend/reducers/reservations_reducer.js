import { 
  RECEIVE_RESERVATION, 
  RECEIVE_RESERVATIONS, 
  REMOVE_RESERVATION 
} from '../actions/reservation_actions';

import { merge } from 'lodash';

const reservationsReducer = (state = {}, action) => {
  const newState = merge({}, state);
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_RESERVATIONS:
    return merge(newState, action.reservations);
    case RECEIVE_RESERVATION:
      newState[action.reservation.id] = action.reservation;
      return newState;
    case REMOVE_RESERVATION:
      return [];
    default: 
      return state;
  }
};

export default reservationsReducer;