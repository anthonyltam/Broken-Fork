import React from 'react';
import { Link } from 'react-router-dom';

class RestaurantIndexItem extends React.Component {
  constructor(props) {
    super(props);

    // this.handleClick = this.handleClick.bind(this);
  }

  // handleClick(e) {
  //   this.props.fetchReviews(this.props.restaurantId);
  // }

  render() {
    return (
      <>
        <div className='search-container'>

          <div className="rest-container">
            <img className='rest-image' src={this.props.restaurant.photo_url} ></img>
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
    );
  }
}

export default RestaurantIndexItem;
