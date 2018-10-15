import React from 'react';
import { connect } from 'react-redux';
import { fetchRestaurant } from '../../actions/restaurant_actions';
import RestaurantShowItem from './restaurant_show_item';
// import { getAllRestaurants } from '../../reducers/selectors';

const msp = state => {
  // console.log(state)
  // debugger;
  return {
    restaurant: state.restaurants
    // restaurant: state.restaurants[1]
  };
};

const mdp = dispatch => {
  return {
    fetchRestaurant: id => dispatch(fetchRestaurant(id))
  }
}



export default connect(msp, mdp)(RestaurantShowItem);
