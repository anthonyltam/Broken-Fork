import React from 'react';

class ReservationShowItem extends React.Component {

  render() {
    return <>
        <div className="reservation-item">
          <div className="reservation-info">
            <h3>{this.props.reservation.restaurant_name}</h3>
            <div>
              <div>Day: {this.props.reservation.day}</div>
              <div>Time: {this.props.reservation.start_time}:00</div>
            </div>
          </div>

          <div className='delete-button'>
            <button className="delete-reservation" onClick={() => this.props.deleteReservation(this.props.reservation.id)}>
              X
            </button>
          </div>

        </div>
      </>;
  }
}

export default ReservationShowItem;