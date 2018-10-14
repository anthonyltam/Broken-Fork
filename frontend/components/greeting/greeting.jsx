import React from 'react';

const Greeting = ({ currentUser, signOut, openModal }) => {

  const sessionLinks = () => (
    <nav className="login-buttons">
      <button className='sign-up'onClick={ () => openModal('signup') }  >Sign up</button>
      <button className='sign-in' onClick={ () => openModal('login') } >Sign in</button>
    </nav>
  );
  const personalGreeting = () => (
    <header>
      <h2>Hi, {currentUser.first_name}!</h2>
      <button onClick={signOut}>Log Out</button>
    </header>
  );

  return currentUser ? personalGreeting() : sessionLinks();
};

export default Greeting;
