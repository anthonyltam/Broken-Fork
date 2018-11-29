import React from 'react';
import { withRouter } from 'react-router-dom';

class DropDownProfile extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.goHome = this.goHome.bind(this);
  }

  handleClick() {
    this.props.history.push('/reservations');
  }

  goHome() {
    this.props.history.push('/');
  }

  render() {
    return (
      <ul className="dropdown-content">
        <button className="dd-content1" onClick={this.goHome}>Home</button>
        <button className="dd-content2" onClick={this.handleClick}>Reservations</button>
        <button className="dd-content3" onClick={this.props.signOut}>Log Out</button>
      </ul>
    );
  }
}

export default withRouter(DropDownProfile);
