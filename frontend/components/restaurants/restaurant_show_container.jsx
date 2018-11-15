import { connect } from 'react-redux';
import { fetchRestaurant, fetchReviews } from '../../actions/restaurant_actions';
import RestaurantShowItem from './restaurant_show_item';

const msp = (state, ownProps) => {
  return {
    restaurant: state.restaurants[ownProps.match.params.id],
    reviews: Object.values(state.reviews),
    currentUser: state.session.id,

  };
};

const mdp = dispatch => {
  return {
    fetchRestaurant: id => dispatch(fetchRestaurant(id)),
    fetchReviews: id => dispatch(fetchReviews(id))
  };
};



export default connect(msp, mdp)(RestaurantShowItem);
