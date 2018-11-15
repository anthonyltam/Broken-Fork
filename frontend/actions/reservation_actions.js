import * as APIUtil from '../util/reservation_api_util';

export const RECEIVE_RESERVATION = 'RECEIVE_RESERVATION';
export const RECEIVE_RESERVATIONS = 'RECEIVE_RESERVATIONS';
export const REMOVE_RESERVATION = 'REMOVE_RESERVATION';

export const fetchReservations = () => dispatch => {
  return APIUtil.fetchReservations().then(reservations => {
    dispatch({
      type: RECEIVE_RESERVATIONS,
      reservations
    });
  });
};

export const fetchReservation = (id) => dispatch => {
  return APIUtil.fetchReservation(id).then(reservation => {
    dispatch({
      type: RECEIVE_RESERVATION,
      reservation
    });
  });
};

export const createReservation = (reservation) => dispatch => {
  APIUtil.createReservation(reservation).then(reservation => {
    dispatch({
      type: RECEIVE_RESERVATION,
      reservation
    });
  });
};

export const deleteReservation = (id) => dispatch => {
  APIUtil.deleteReservation(id).then(reservation => {
    dispatch({
      type: REMOVE_RESERVATION,
      reservation
    })}, err => {
      console.log(err);
    }
  );
};
