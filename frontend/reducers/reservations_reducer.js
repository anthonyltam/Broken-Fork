import { merge } from 'lodash';
import { 
  RECEIVE_RESERVATION, 
  RECEIVE_RESERVATIONS, 
  REMOVE_RESERVATION 
} from '../actions/reservation_actions';


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
    // CHANGED FROM return [] to BELOW
      delete newState[action.reservation.id];
      return newState;
    default: 
      return state;
  }
};

export default reservationsReducer;