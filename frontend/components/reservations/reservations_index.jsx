import React from 'react';
import ReservationShowItem from './reservation_show_item';

class ReservationsIndex extends React.Component {

  componentDidMount() {
    this.props.fetchReservations();
  }


  render() {

    if (this.props.reservations === undefined) {
      // console.log('in conditional')
      return null;
    }

    // console.log('props from res page:', this.props);
    console.log('state:', this.state);
    return <>
      <h1>Reservations page</h1> 
      
      <div>
        {/* {console.log('in render func', this.props.restaurants)} */}
        {this.props.reservations.map( res => {
          return <ReservationShowItem reservation={res} />;
        })};
      </div>
    </>;
  }
}

export default ReservationsIndex;