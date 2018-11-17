import React from 'react';
import ReservationShowItem from './reservation_show_item';

class ReservationsIndex extends React.Component {

  componentDidMount() {
    this.props.fetchReservations();
  }

  render() {
    if (this.props.reservations === undefined) {
      return null;
    }

    return <>
      <div>Reservations page</div> 
      <div>
        {this.props.reservations.map( res => {
          return <ReservationShowItem key={res.id} fetchRestaurant={this.props.fetchRestaurant} reservation={res} />;
        })}
      </div>
    </>;
  }
}

export default ReservationsIndex;