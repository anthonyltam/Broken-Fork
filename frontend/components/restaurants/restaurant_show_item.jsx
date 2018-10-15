import React from 'react';

class RestaurantShowItem extends React.Component {

  componentDidMount() {
    this.props.fetchRestaurant(this.props.match.params.id);
  }

  render() {
    return (

      <ul>
        <h2>{this.props.restaurant.name}</h2>
        <li>Description: {this.props.restaurant.description}</li>
        <li>Location: {this.props.restaurant.location}</li>
        <li>Cuisines: {this.props.restaurant.cuisines}</li>
        <li>Hours of Operation: {this.props.restaurant.hours_of_operation}</li>
        <li>Tables: {this.props.restaurant.tables}</li>
      </ul>
    )
  }
}

export default RestaurantShowItem;
