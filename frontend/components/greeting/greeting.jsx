import React from 'react';

const Greeting = ({ currentUser, signOut, signIn, openModal, demoLogin }) => {

  console.log(this)
  const sessionLinks = () => (
    <nav className="login-buttons">
      <button className='demo-login' onClick={demoLogin}>Demo</button>
      <button className='sign-up'onClick={ () => openModal('signup') }  >Sign up</button>
      <button className='sign-in' onClick={ () => openModal('login') } >Sign in</button>
    </nav>
  );
  const personalGreeting = () => (
    <header>
      <select className="profile-dropdown">Hi, {currentUser.first_name}</select>

      <button className='logout-button' onClick={signOut}>Log Out</button>
    </header>
  );

  return currentUser ? personalGreeting() : sessionLinks();
};

export default Greeting;
