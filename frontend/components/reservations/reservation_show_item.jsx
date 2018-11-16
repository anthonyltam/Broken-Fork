import React from 'react';

class ReservationShowItem extends React.Component {
  constructor(props) {
    super(props);
    // this.state = this.props.restaurant;
    this.state = {
      restaurant: ''
    };
  }

  componentDidMount() {
    // console.log(this.props)
    console.log(this.props.reservation.restaurant_id);
    this.props.fetchRestaurant(this.props.reservation.restaurant_id);
    // console.log('rest:', rest);
    // this.setState({ restaurant: rest });
  }

  // componentWillReceiveProps(newProps) {
  //   // console.log('new props ', newProps);
  //   this.setState(newProps.restaurant);
  // }


  render() {

    // if (this.props.restaurant === undefined) {
    //   return null;
    // }

    // console.log(this.props);
    console.log(this.state);
    return <>
      in reservation show item
      <ul>
        <li>
          restaurant:{this.props.reservation.restaurant_name}
        </li>

        <li>
          start time:{this.props.reservation.start_time}
        </li>
        <li>
          end time:{this.props.reservation.end_time}
        </li>
      </ul>
    </>;
  }
}

export default ReservationShowItem;