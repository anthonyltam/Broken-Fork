import React from 'react';

class ReservationShowItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <>
      <h1>{this.props.reservation.restaurant_name}</h1>
      <ul>
        <li>day: {this.props.reservation.day}</li>
        <li>start time: {this.props.reservation.start_time}</li>
        <li>end time: {this.props.reservation.end_time}</li>
      </ul>

      <button 
        className='delete-reservation'
        onClick={ () => this.props.deleteReservation(this.props.reservation.id)}>
        X
      </button>
    </>;
  }
}

export default ReservationShowItem;