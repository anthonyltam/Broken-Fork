import { connect } from 'react-redux';
import { fetchReservations, deleteReservation } from '../../actions/reservation_actions';
import ReservationsIndex from './reservations_index';
import { fetchRestaurant } from '../../actions/restaurant_actions';

const msp = state => {
  return {
    reservations: Object.values(state.reservations)
  };
};

const mdp = dispatch => {
  return {
    fetchReservations: () => dispatch(fetchReservations()),
    fetchRestaurant: (id) => dispatch(fetchRestaurant(id)),
    deleteReservation: (id) => dispatch(deleteReservation(id))
  };
};

export default connect(msp, mdp)(ReservationsIndex);