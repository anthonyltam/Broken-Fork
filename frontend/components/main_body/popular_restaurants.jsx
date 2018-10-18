import React from 'react';
import { Link } from 'react-router-dom';

class PopularRestaurants extends React.Component {

  render() {
    return (
      <>
        <div className='popular-restaurants'>
          <h2 className='pop-rests'>Popular Restaurants in Feeboland</h2>
          <Link className='pop-rest-view' to='/restaurants'>View all</Link>
        </div>
        <div className='body-hr'></div>
      </>
    )
  }
}

export default PopularRestaurants;
