import React from 'react';
import { connect } from 'react-redux';
import { fetchRestaurant } from '../../actions/restaurant_actions';
import RestaurantShowItem from './restaurant_show_item';

const msp = (state, ownProps) => {
  return {
    restaurant: state.restaurants[ownProps.match.params.id]
  };
};

const mdp = dispatch => {
  return {
    fetchRestaurant: id => dispatch(fetchRestaurant(id))
  };
};



export default connect(msp, mdp)(RestaurantShowItem);
