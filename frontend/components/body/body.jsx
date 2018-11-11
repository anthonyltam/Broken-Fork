import React from 'react';
import CurrentLocation from './current_location';
import PopularRestaurants from './popular_restaurants';
import RestaurantSplashItem from './restaurant_splash_item';
import TopCuisines from './top_cuisines';
import JoinUs from './join_us';

class Body extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchRestaurants();
  }

  render() {
    return (
      <>
        <div className='body'>
          <CurrentLocation />
          <PopularRestaurants />
            <div className="grid-container">
              {this.props.restaurants.map( rest => {
                return <RestaurantSplashItem key={rest.id} rest={rest} />;
              })}
            </div>

          <TopCuisines />
          <JoinUs />
        </div>
      </>
    );
  }
}

export default Body;
