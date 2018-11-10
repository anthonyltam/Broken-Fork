import React from 'react';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

// import LogInFormContainer from './session_form/login_form_container';
// import SignUpFormContainer from './session_form/signup_form_container';
import NoMatch from './no_match';

// NAV //
import LeftNav from './left_nav';
import Modal from './modal';
import GreetingContainer from './greeting/greeting_container';

// SPLASH //
import Splash from './splash';

//RESTAURANTS//
import RestaurantContainer from './restaurants/restaurant_container';
import RestaurantShowContainer from './restaurants/restaurant_show_container';

// BODY //
import BodyContainer from './body/body_container';
import Footer from './body/footer';

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

    <Route exact path='/' component={BodyContainer}/>
    {/* <Route path='/' component={Footer}/> */}
  </div>

);

export default App;
