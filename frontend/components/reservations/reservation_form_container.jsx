import { connect } from 'react-redux';
import { createReservation, deleteReservation } from '../../actions/reservation_actions';
import ReservationForm from './reservation_form';

const msp = state => {
  return {
    currentUser: state.session.id
  };
};

const mdp = dispatch => {
  return {
    createReservation: res => dispatch(createReservation(res)),
    deleteReservation: id => dispatch(deleteReservation(id))
  };
};

export default connect(msp, mdp)(ReservationForm);