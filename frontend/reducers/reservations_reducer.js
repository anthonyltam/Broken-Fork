import { 
  RECEIVE_RESERVATION, 
  RECEIVE_RESERVATIONS, 
  REMOVE_RESERVATION 
} from '../actions/reservation_actions';

import { merge } from 'lodash';

const reservationsReducer = (state = {}, action) => {
  const newState = merge({}, state);
  // console.log('action:', action);
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_RESERVATIONS:
    return merge(newState, action.reservations);
    case RECEIVE_RESERVATION:
      // console.log('from reducer', action.reservation)
      newState[action.reservation.id] = action.reservation;
      // console.log("from reducer", action.reservation);
      // let key = Object.keys(action.reservation)[0];

      // newState[action.reservation[key].id] = action.reservation[key];
      return newState;
    case REMOVE_RESERVATION:
      return [];
    default: 
      return state;
  }
};

export default reservationsReducer;