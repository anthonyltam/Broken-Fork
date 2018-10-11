import React from 'react';
import LogInFormContainer from './session_form/login_form_container';
import SignUpFormContainer from './session_form/signup_form_container';
import GreetingContainer from './greeting/greeting_container';
// import Modal from './components/modal.jsx' (MODAL COMP ON LINE 16)
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

const App = () => (
  <div>

    <div className='nav'>
      <h2>BrokenFork</h2>
      <GreetingContainer />
      <Route path="/signup" component={ SignUpFormContainer } />
    </div>
    <div className='pic-container'>
      <p>Find your table for any occasion</p>
      <img className='main-picture' src='https://cache.marriott.com/marriottassets/marriott/SNADP/snadp-dining-0103-hor-feat.jpg?downsize=1024px:*'></img>
    </div>
  </div>

);

export default App;
