import React from 'react';
// import {Link} from 'react-router-dom';

const Greeting = ({ currentUser, signOut }) => {

  // handleSubmit(e) {
  //
  // }

  const sessionLinks = () => (
    <nav className="login-buttons">
      <button className='sign-up'onClick={ () => console.log('sign up button was clicked')} >Sign up</button>
      <button className='sign-in' onClick={ () => console.log('sign in button was clicked')} >Sign in</button>
    </nav>
  );
  const personalGreeting = () => (
    <header>
      <h2>Hi, {currentUser.username}!</h2>
      <button onClick={signOut}>Log Out</button>
    </header>
  );

  return currentUser ? personalGreeting() : sessionLinks();
};

export default Greeting;
