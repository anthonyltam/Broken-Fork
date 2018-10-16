import React from 'react';
import { Link } from 'react-router-dom';

class RestaurantIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (

      <>
        <div className='search-container'>

          <div className="rest-container">
            <div className="rest-image"></div>
            <Link to={`/restaurants/${this.props.restaurant.id}`} className="rest-name">{this.props.restaurant.name}</Link>
              <ul>
                <li>Description: {this.props.restaurant.description}</li>
                <li>Location: {this.props.restaurant.location}</li>
                <li>Cuisines: {this.props.restaurant.cuisines}</li>
                <li>Hours of Operation: {this.props.restaurant.hours_of_operation}</li>
                <li>Tables: {this.props.restaurant.tables}</li>
              </ul>
          </div>
        </div>

        <hr></hr>
      </>
    )
  }
}

export default RestaurantIndexItem;
