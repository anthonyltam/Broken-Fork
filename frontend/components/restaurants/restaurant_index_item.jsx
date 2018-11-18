import React from 'react';
import { Link } from 'react-router-dom';

class RestaurantIndexItem extends React.Component {
  
  render() {
    return (
      <>
        <div className='search-container'>

          <div className="rest-container">
            <img className='rest-image' src={this.props.restaurant.photo_url} ></img>
            <Link to={`/restaurants/${this.props.restaurant.id}`} className="rest-name">{this.props.restaurant.name}</Link>
                <div>Location: {this.props.restaurant.location}</div>
                <div>Cuisines: {this.props.restaurant.cuisines}</div>
                <div>Hours of Operation: {this.props.restaurant.hours_of_operation}</div>
                <div>Tables: {this.props.restaurant.tables}</div>
          </div>
          
        </div>

      </>
    );
  }
}

export default RestaurantIndexItem;
