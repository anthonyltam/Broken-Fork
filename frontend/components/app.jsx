import React from 'react';
import LogInFormContainer from './session_form/login_form_container';
import SignUpFormContainer from './session_form/signup_form_container';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

const App = () => (
  <div>
    <h1>Broken Fork</h1>
    <Route path="/signup" component={ SignUpFormContainer } />
  </div>
);

export default App;
