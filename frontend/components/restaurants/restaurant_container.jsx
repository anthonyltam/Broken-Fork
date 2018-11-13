import { connect } from 'react-redux';
import { fetchRestaurants } from '../../actions/restaurant_actions';
import RestaurantIndex from './restaurant_index';

const msp = state => {
  return {
    restaurants: Object.values(state.restaurants)
  };
};

const mdp = dispatch => {
  return {
    fetchRestaurants: () => dispatch(fetchRestaurants())
  };
};

export default connect(msp, mdp)(RestaurantIndex);
