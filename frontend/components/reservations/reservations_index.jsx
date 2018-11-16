import React from 'react';
import ReservationShowItem from './reservation_show_item';

class ReservationsIndex extends React.Component {

  componentDidMount() {
    this.props.fetchReservations();
    // this.props.fetchRestaurants();
  }


  render() {
    if (this.props.reservations === undefined) {
      return null;
    }

    // console.log('props from res page:', this.props);
    // console.log('state:', this.state);

    return <>
      <h1>Reservations page</h1> 
      
      <div>
        {this.props.reservations.map( res => {

          return <ReservationShowItem fetchRestaurant={this.props.fetchRestaurant} reservation={res} />;
        })};
      </div>
    </>;
  }
}

export default ReservationsIndex;