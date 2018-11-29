import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import { createReview, fetchReviews, fetchRestaurant, searchRestaurants} from "./actions/restaurant_actions.js";
import { createReservation, deleteReservation, fetchReservations } from "./actions/reservation_actions.js";

// import { searchRestaurants } from './util/restaurant_api_util';

document.addEventListener('DOMContentLoaded', () => {  
  let store;
   if (window.currentUser) {
     const preloadedState = {
       session: { id: window.currentUser.id },
       entities: {
         users: { [window.currentUser.id]: window.currentUser }
       }
     };

     store = configureStore(preloadedState);
     delete window.currentUser;
   } else {
     store = configureStore();
   }

  //  RESERVATION
  window.reservation = {
    restaurant_id: 5,
    start_time: 6,
    end_time: 7
  }; 

  
  //  REVIEW
  window.review = { 
    body: 'Is an amazing restaurant! I love the atmosphere and the food! It\'s great! Can\'t wait to come back soon!',
    author_id: 2,
    restaurant_id: 6,
    rating: 5
  };
  
  window.search = searchRestaurants; 


  window.createReservation = createReservation;
  window.deleteReservation = deleteReservation;
  window.fetchReservations = fetchReservations;
  window.fetchRestaurant = fetchRestaurant;

  window.createReview = createReview;
  window.fetchReviews = fetchReviews;
  window.dispatch = store.dispatch;

  const root = document.getElementById('root');
  ReactDOM.render(
    <Root store={store} />,
      root
    );
});
