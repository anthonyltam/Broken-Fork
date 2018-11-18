import React from 'react';
// import ReservationsContainer from '../reservations/reservation_form_container';

class DropDownProfile extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ul className="dropdown-content">
        {/* <a href='/reservations' className="dd-content">Reservations</a> */}
        <button className="dd-content">Reservations</button>
        <button className="dd-content" onClick={this.props.signOut}>Log Out</button>
      </ul>
    );
  }
}

export default DropDownProfile;
