import { connect } from 'react-redux';
import { fetchReservations } from '../../actions/reservation_actions';
import ReservationsIndex from './reservations_index';
import { fetchRestaurant } from '../../actions/restaurant_actions';

const msp = state => {
  return {
    reservations: Object.values(state.reservations),
  //   restaurant: state.restaurant
  };
};

const mdp = dispatch => {
  return {
    fetchReservations: () => dispatch(fetchReservations()),
    fetchRestaurant: (id) => dispatch(fetchRestaurant(id))
  };
};

export default connect(msp, mdp)(ReservationsIndex);