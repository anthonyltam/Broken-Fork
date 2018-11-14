import { connect } from 'react-redux';
import { createReview } from '../../actions/restaurant_actions';
import ReviewForm from './review_form';

const mdp = dispatch => {
  return {
    createReview: review => dispatch(createReview(review))
  };
};

export default connect(null, mdp)(ReviewForm);