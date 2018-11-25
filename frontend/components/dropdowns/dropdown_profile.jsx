import React from 'react';
import { withRouter } from 'react-router-dom';

class DropDownProfile extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.history.push('/reservations');
  }

  render() {
    return (
      <ul className="dropdown-content">
        <button className="dd-content" onClick={this.handleClick}>Reservations</button>
        <button className="dd-content" onClick={this.props.signOut}>Log Out</button>
      </ul>
    );
  }
}

export default withRouter(DropDownProfile);
