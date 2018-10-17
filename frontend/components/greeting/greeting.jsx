import React from 'react';
import DropDownProfile from '../dropdowns/dropdown_profile';

// const Greeting = ({ currentUser, signOut, signIn, openModal, demoLogin }) => {
class Greeting extends React.Component {
  constructor(props) {
    super(props);
    this.state = { dropdown: false }
    // this.handleDropDown = this.handleDropDown.bind(this);
  }

  handleDropDown(e) {
    e.preventDefault;
    this.setState({ dropdown: !this.state.dropdown})
  }

  render() {
    const { currentUser, signOut, signIn, openModal, demoLogin } = this.props;

    const sessionLinks = (
      <nav className="login-buttons">
        <button className='demo-login' onClick={demoLogin}>Demo</button>
        <button className='sign-up'onClick={ () => openModal('signup') }  >Sign up</button>
        <button className='sign-in' onClick={ () => openModal('login') } >Sign in</button>
      </nav>
    );

    const personalGreeting = (
      <header>

        <div className="profile-dropdown" onClick={ (e) => this.handleDropDown(e) }>Hi, {currentUser && currentUser.first_name}
          {this.state.dropdown && <DropDownProfile signOut={signOut} />}
        </div>

      </header>
    );

    return !!currentUser ? personalGreeting : sessionLinks;
  }
};

export default Greeting;
