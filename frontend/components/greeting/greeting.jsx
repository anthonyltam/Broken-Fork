import React from 'react';

const Greeting = ({ currentUser, signOut, signIn, openModal }) => {

  // this.demoLogin = this.demoLogin.bind(this);
  //
  // demoLogin(e) {
  //   e.preventDefault;
  //   const user = {
  //     email: 'DemoUser',
  //     first_name: 'Demo',
  //     password: 'starwars',
  //   }
  //   this.props.signIn(user);
  // }
  // <button className='demo-login' onClick={this.demoLogin}>Demo Login</button>

  const sessionLinks = () => (
    <nav className="login-buttons">
      <button className='sign-up'onClick={ () => openModal('signup') }  >Sign up</button>
      <button className='sign-in' onClick={ () => openModal('login') } >Sign in</button>
    </nav>
  );
  const personalGreeting = () => (
    <header>
      <span>Hi, {currentUser.first_name}!</span>
      <button className='logout-button' onClick={signOut}>Log Out</button>
    </header>
  );

  return currentUser ? personalGreeting() : sessionLinks();
};

export default Greeting;
