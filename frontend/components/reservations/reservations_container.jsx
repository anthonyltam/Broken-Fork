import { connect } from 'react-redux';
import { fetchReservations } from '../../actions/reservation_actions';
import ReservationsIndex from './reservations_index';

const msp = state => {
  return {
    reservations: Object.values(state.reservations)
  };
};

const mdp = dispatch => {
  return {
    fetchReservations: () => dispatch(fetchReservations())
  };
};
export default connect(msp, mdp)(ReservationsIndex);