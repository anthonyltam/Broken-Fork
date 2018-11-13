import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import { createReview, fetchReviews } from "./actions/restaurant_actions.js";

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
   window.review = { 
      body: 'ceces is the worst',
      author_id: 2,
      restaurant_id: 6,
      rating: 5
   };

   window.createReview = createReview;
   window.fetchReviews = fetchReviews;
   window.dispatch = store.dispatch;
  const root = document.getElementById('root');
  ReactDOM.render(
    <Root store={store} />,
      root
    );
});
