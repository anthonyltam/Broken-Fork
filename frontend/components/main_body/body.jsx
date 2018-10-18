import React from 'react';
import CurrentLocation from './current_location';
import PopularRestaurants from './popular_restaurants';

class Body extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <div className='body'>
          <CurrentLocation />
          <PopularRestaurants />
        </div>
      </>
    )
  }
}

export default Body;
