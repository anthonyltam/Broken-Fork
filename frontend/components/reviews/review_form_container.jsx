import { connect } from 'react-redux';
import { createReview } from '../../actions/restaurant_actions';
import ReviewForm from './review_form';

const msp = state => {
  return {
    user: state.entities.users
  };
};

const mdp = dispatch => {
  return {
    createReview: review => dispatch(createReview(review))
  };
};

export default connect(msp, mdp)(ReviewForm);