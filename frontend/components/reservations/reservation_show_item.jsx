import React from 'react';

class ReservationShowItem extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // console.log(this.props)
    // console.log(this.props.reservation.restaurant_id);
    this.props.fetchRestaurant(this.props.reservation.restaurant_id);
    // console.log('rest:', rest);
    // this.setState({ restaurant: rest }); 
  }

  // componentWillReceiveProps(newProps) {
  //   // console.log('new props ', newProps);
  //   this.setState(newProps.restaurant);
  // }


  render() {
    // console.log(this.props.reservation)
    // if (this.props.reservation.start_time === undefined) {
    //   return <div></div>;
    // } else {
      return <>
          
        <h1>{this.props.reservation.restaurant_name}</h1>
        <ul>
          <li>start time: {this.props.reservation.start_time}</li>
          <li>end time: {this.props.reservation.end_time}</li>
        </ul>
      </>;
    // }

    // console.log(this.props);
    // console.log(this.state);

  }
}

export default ReservationShowItem;