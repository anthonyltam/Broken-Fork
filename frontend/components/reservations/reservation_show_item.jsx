import React from 'react';

class ReservationShowItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props)
    return <>
      <h1>{this.props.reservation.restaurant_name}</h1>
      <ul>
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