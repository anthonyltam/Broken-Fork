import * as APIUtil from '../util/restaurant_api_util';

export const RECEIVE_RESTAURANTS = 'RECEIVE_RESTAURANTS';
export const RECEIVE_RESTAURANT = 'RECEIVE_RESTAURANT';

export const receiveRestaurant = restaraunt => ({
  type: RECEIVE_RESTAURANT,
  restaurant
});

export const fetchRestaurants = () => dispatch => {
    APIUtil.fetchRestaurants().then(rests => {
      dispatch({
        type: RECEIVE_RESTAURANTS,
        restaurants: rests
      })
    })
}

export const fetchRestaurant = (id) => dispatch => (
  APIUtil.fetchRestaurant(id).then(rest => (
    dispatch(receiveRestaurant(rest))
  ))
);
