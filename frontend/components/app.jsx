import React from 'react';

import Modal from './modal';
import LeftNav from './left_nav';
// import LogInFormContainer from './session_form/login_form_container';
// import SignUpFormContainer from './session_form/signup_form_container';
import GreetingContainer from './greeting/greeting_container';
import Splash from './splash';
import RestaurantContainer from './restaurants/restaurant_container';
import RestaurantShowContainer from './restaurants/restaurant_show_container';
import NoMatch from './no_match';

import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

const App = () => (
  <div>
    <Modal />
    <div className='nav'>
      <LeftNav />
      <GreetingContainer className='nav-right' />
    </div>


    <Switch>
      <Route exact path="/" component={Splash} />
      <Route exact path="/restaurants" component={RestaurantContainer} />
      <Route path="/restaurants/:id" component={RestaurantShowContainer} />
      <Route path="/" component={NoMatch} />
    </Switch>
  </div>

);
// asd
export default App;
