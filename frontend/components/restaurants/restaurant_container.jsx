import React from 'react';
import { connect } from 'react-redux';
import { fetchRestaurants } from '../../actions/restaurant_actions';
import RestaurantIndex from './restaurant_index';

const msp = state => {
  return {
    restaurants: state.restaurants.restaurants
  };
};

const mdp = dispatch => {
  return {
    fetchRestaurants: () => dispatch(fetchRestaurants())
  }
}

export default connect(msp, mdp)(RestaurantIndex);
