import React from 'react';
import Reviews from '../reviews/reviews';
import ReviewFormContainer from '../reviews/review_form_container';

class RestaurantShowItem extends React.Component {

  componentDidMount() {
    this.props.fetchRestaurant(this.props.match.params.id);
    this.props.fetchReviews(this.props.match.params.id);
  }

  render() {
    if (this.props.restaurant === undefined) {
      return null;
    }

    return (
      <>
        <div className='show-top-background'>
          <img className='rest-image' src={this.props.restaurant.photo_url} ></img>
        </div>

        <div className='rest-page-title'>{this.props.restaurant.name}</div>

        Description: {this.props.restaurant.description}
        Location: {this.props.restaurant.location}
        Cuisines: {this.props.restaurant.cuisines}
        Hours of Operation: {this.props.restaurant.hours_of_operation}
        Tables: {this.props.restaurant.tables}

        <div className='review-container'>
          {this.props.reviews.map( review => {
            return <Reviews props={this.props} key={review.id} review={review} />;
          })}
        </div>  

        <ReviewFormContainer restaurant={this.props.restaurant}/>
      </>
    );
  }
}

export default RestaurantShowItem;
