import * as APIUtil from '../util/restaurant_api_util';

export const RECEIVE_RESTAURANTS = 'RECEIVE_RESTAURANTS';
export const RECEIVE_RESTAURANT = 'RECEIVE_RESTAURANT';
export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';
export const RECEIVE_REVIEWS = 'RECEIVE_REVIEWS';

export const fetchRestaurants = () => dispatch => {
   return APIUtil.fetchRestaurants().then(restaurants => {
    dispatch({
      type: RECEIVE_RESTAURANTS,
      restaurants
    });
  });
};

export const fetchRestaurant = (id) => dispatch => {
  APIUtil.fetchRestaurant(id).then(restaurant => {
    dispatch({
      type: RECEIVE_RESTAURANT,
      restaurant
    });
  });
};

export const createReview = (review) => dispatch => {
  APIUtil.createReview(review).then(review => {
    dispatch({
      type: RECEIVE_REVIEW,
      review
    });
  }, err => {
    console.log(err);
  }) ;
};

// export const createReview = (review) => dispatch => {
//   APIUtil.createReview(review).then(reviews => {
//     dispatch({
//       type: RECEIVE_REVIEWS,
//       reviews
//     });
// };

export const fetchReviews = (id) => dispatch => {
  APIUtil.fetchReviews(id).then(reviews => {
    dispatch({
      type: RECEIVE_REVIEWS,
      reviews
    });
  });
};

// export const receiveRestaurant = restaurant => ({
//   type: RECEIVE_RESTAURANT,
//   restaurant
// });

// export const fetchRestaurant = (id) => dispatch => (
//   APIUtil.fetchRestaurant(id).then(rest => (
//     dispatch(receiveRestaurant(rest))
//   ))
// );


// export const receiveReview = ({ review, average_rating, author }) => ({
//   type: RECEIVE_REVIEW,
//   review,
//   average_rating,
//   author
// });

// export const createReview = review => dispatch =>
//   APIUtil.createReview(review).then(review => dispatch(receiveReview(review)));