import * as APIUtil from '../util/restaurant_api_util';

export const RECEIVE_RESTAURANTS = 'RECEIVE_RESTAURANTS';
export const RECEIVE_RESTAURANT = 'RECEIVE_RESTAURANT';

export const fetchRestaurants = () => dispatch => {
   return APIUtil.fetchRestaurants().then(restaurants => {
    dispatch({
      type: RECEIVE_RESTAURANTS,
      restaurants
    })
  })
}

export const fetchRestaurant = (id) => dispatch => {
  APIUtil.fetchRestaurant(id).then(restaurant => {
    dispatch({
      type: RECEIVE_RESTAURANT,
      restaurant
    })
  })
}

// export const receiveRestaurant = restaurant => ({
//   type: RECEIVE_RESTAURANT,
//   restaurant
// });

// export const fetchRestaurant = (id) => dispatch => (
//   APIUtil.fetchRestaurant(id).then(rest => (
//     dispatch(receiveRestaurant(rest))
//   ))
// );
