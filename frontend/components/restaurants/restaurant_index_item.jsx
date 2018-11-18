import React from 'react';
import { Link } from 'react-router-dom';

class RestaurantIndexItem extends React.Component {
  
  render() {
    return (
      <>
        <div className='search-container'>

          <div className="rest-container">
            <img className='rest-image' src={this.props.restaurant.photo_url} ></img>

            <div className='rest-content-info'>
              <Link to={`/restaurants/${this.props.restaurant.id}`} className="rest-name">{this.props.restaurant.name}</Link>

              <div className="rest-star-cont">
                <div className='rest-yellow-stars'></div>
                <div className='rest-yellow-stars-description'>Excellent </div>
              </div>

              <div className="rest-loc-cui-row">
                <div>{this.props.restaurant.cuisines}</div>
                <div>{this.props.restaurant.location}</div>
              </div>

              <div className="booked-times-cont">
                <div className="trend-arrow"></div>
                <div>Booked # times today.</div>
              </div>

              <div className='rest-reservation-cont-row'>
                <div className='rest-reserve-time'>6:30 PM</div>
                <div className='rest-reserve-time'>6:45 PM</div>
                <div className='rest-reserve-time'>7:00 PM </div>
                <div className='rest-reserve-time'>7:15 PM </div>
                <div className='rest-reserve-time'>7:30 PM</div>
              </div>

            </div>
            
          </div>

        </div>

      </>
    );
  }
}

export default RestaurantIndexItem;
