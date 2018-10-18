import React from 'react';
import { Link } from 'react-router-dom';

class RestaurantSplashItem extends React.Component {

  // <div className='rest-splash'>
  render() {
    return (
      <>
        <Link className='rest-splash' to={ `/restaurants/${this.props.rest.id}` }>
            <img className='rest-splash-img' src={this.props.rest.photo_url}></img>
            <div className='rest-splash-info'>
              <div className='rest-splash-name'>{this.props.rest.name}</div>
              <div className='rest-star-review'>
                <div className='rest-star-icon'></div>
                <div className='num-reviews'>100+ reviews</div>
              </div>
              <div className='rest-splash-description'>{this.props.rest.cuisines} *$* {this.props.rest.location}</div>
              <div className='book-today'>Book Today</div>

            </div>
        </Link>
      </>
    )
  }
}

// </div>
export default RestaurantSplashItem;
