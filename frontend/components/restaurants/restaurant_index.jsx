import React from 'react';
import RestaurantIndexItem from './restaurant_index_item';

class RestaurantIndex extends React.Component {
  componentDidMount() {
    this.props.fetchRestaurants();
    // console.log(this.state)
  }

  render() {
    return <>
      {this.props.restaurants.map(res => <h2>{res.name}</h2>)}
      <h1>Hello</h1>
    </>
  }
}
  // {console.log(this.props)}
  // {this..restaurants.map( restaurant => {
  //   return <RestaurantIndexItem restaurant={restaurant}/>
  // })}
export default RestaurantIndex;
