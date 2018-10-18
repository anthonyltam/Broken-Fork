import React from 'react';

class RestaurantSplashItem extends React.Component {

  render() {
    return (
      <>
        <div className='rest-splash'>
          <img className='rest-splash-img' src={this.props.rest.photo_url}></img>
          <div className='rest-splash-info'>
            <h3 className='rest-splash-name'>{this.props.rest.name}</h3>
            <div className='rest-splash-description'>{this.props.rest.cuisines} *$* {this.props.rest.location}</div>

            <div className='book-today'>Book Today</div>
          </div>
        </div>
      </>
    )
  }
}

export default RestaurantSplashItem;
