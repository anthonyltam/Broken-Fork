import React from 'react';

class RestaurantSplashItem extends React.Component {

  render() {
    return (
      <>
        <div className='rest-splash'>
          <img className='rest-splash-img' src={this.props.rest.photo_url}></img>
          <h3>{this.props.rest.name}</h3>
          {this.props.rest.cuisines}
          {this.props.rest.location}
        </div>
      </>
    )
  }
}

export default RestaurantSplashItem;
