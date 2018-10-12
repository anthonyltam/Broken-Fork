import React from 'react';
import LogInFormContainer from './session_form/login_form_container';
import SignUpFormContainer from './session_form/signup_form_container';
import GreetingContainer from './greeting/greeting_container';
// import JumboContainer from './jumbo/jumbo_container';
import Modal from './modal'
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

      <Link to='/' className='nav-left'>
        <img className='home-icon' src='http://brand.opentable.com/wp-content/uploads/2015/03/OTLogo_rationalizationhor-r1c-01.png'></img>
        <span className='home-text'>BrokenFork</span>
      </Link>


      <GreetingContainer className='nav-right' />
    </div>
    <div className='jumbo-container'>
      <div className='box-container'>
        <p className='box-message'>Find your table for any occasion</p>
        <div className='box-form'>

          <div className='box-dropdowns'>

            <input className='date' type='date'></input>

            <select className='time'>
              <option value='12:00'>12:00</option>
              <option value='12:30'>12:30</option>
              <option value='1:00'>1:00</option>
              <option value='1:30'>1:30</option>
              <option value='2:00'>2:00</option>
              <option value='2:30'>2:30</option>
              <option value='3:00'>3:00</option>
            </select>

            <select className='box-num-guests'>
              <option value="1">1 person</option>
              <option value="2">2 people</option>
              <option value="3">3 people</option>
              <option value="4">4 people</option>
            </select>

          </div>
          <input className='box-search' type='text'></input>
          <button className='box-go'>Let's Go</button>

        </div>
      </div>
    </div>
  </div>

);
  // <Route path="/signup" component={ SignUpFormContainer } />
export default App;
