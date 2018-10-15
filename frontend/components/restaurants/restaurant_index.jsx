import React from 'react';
import RestaurantIndexItem from './restaurant_index_item';

class RestaurantIndex extends React.Component {
  componentDidMount() {
    this.props.fetchRestaurants();
  }


  render() {
    return (

      <ul>
        {this.props.restaurants.map( restaurant => {
          return <RestaurantIndexItem key={restaurant.id} restaurant={restaurant}/>
        })}
      </ul>
    )
  }
}

export default RestaurantIndex;
