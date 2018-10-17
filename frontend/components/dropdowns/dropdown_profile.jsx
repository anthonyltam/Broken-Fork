import React from 'react';

class DropDownProfile extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <ul className="dropdown-content">
        <button className="dd-content">My Profile</button>
        <button className="dd-content" onClick={this.props.signOut}>Log Out</button>
      </ul>
    );
  }
}

export default DropDownProfile;
