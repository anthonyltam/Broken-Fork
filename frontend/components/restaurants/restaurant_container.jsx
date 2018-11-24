import { connect } from 'react-redux';
import { fetchRestaurants } from '../../actions/restaurant_actions';
import RestaurantIndex from './restaurant_index';

const msp = state => {
  return {
    restaurants: Object.values(state.restaurants)
  };
};

const mdp = (dispatch, ownProps) => {
  return {
    fetchRestaurants: () => dispatch(fetchRestaurants(ownProps.location.search))
  };
};

export default connect(msp, mdp)(RestaurantIndex);
