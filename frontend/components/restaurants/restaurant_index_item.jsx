import React from 'react';

class RestaurantIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (

      <>
        <h1 className="rest-name">{this.props.restaurant.name}</h1>
          <ul>
            <li>Description: {this.props.restaurant.description}</li>
            <li>Location: {this.props.restaurant.location}</li>
            <li>Cuisines: {this.props.restaurant.cuisines}</li>
            <li>Hours of Operation: {this.props.restaurant.hours_of_operation}</li>
            <li>Tables: {this.props.restaurant.tables}</li>
          </ul>

      </>
    )
  }
}

export default RestaurantIndexItem;
