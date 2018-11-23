import React from 'react';
import { connect } from 'react-redux';
import SearchBar from './search_bar';
import { fetchRestaurants, searchRestaurants } from '../actions/restaurant_actions';

const msp = state => {
  return {
    restaurants: Object.values(state.restaurants)
  };
};

const mdp = dispatch => {
  return {
    fetchRestaurants: () => dispatch(fetchRestaurants()),
    // searchRestaurants: search => dispatch(searchRestaurants(search))
  };
};

export default connect(msp, mdp)(SearchBar);
