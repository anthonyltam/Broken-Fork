import React from 'react';
import RestaurantIndexItem from './restaurant_index_item';

class RestaurantIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchRestaurants();
  }

  render() {
    {console.log(this.props)}
    return <h1>Hello</h1>;
  }
}

// {console.log('in rest index')}
// {this.props.restaurants.map( restaurant => {
//   <RestaurantItem restaurant={restaurant}/>
// })}

export default RestaurantIndex;
