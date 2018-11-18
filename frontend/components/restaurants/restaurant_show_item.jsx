import React from 'react';
import Reviews from '../reviews/reviews';
import ReviewFormContainer from '../reviews/review_form_container';
import ReservationFormContainer from '../reservations/reservation_form_container';

class RestaurantShowItem extends React.Component {

  componentDidMount() {
    this.props.fetchRestaurant(this.props.match.params.id);
    this.props.fetchReviews(this.props.match.params.id);
  }

  render() {
    if (this.props.restaurant === undefined) {
      return null;
    }

    let reviewForm;
    if (this.props.currentUser) {
      reviewForm = 
      <ReviewFormContainer restaurant={this.props.restaurant} />;
    }
    
    let reservationForm;
    if (this.props.currentUser) {
      reservationForm = 
      <ReservationFormContainer history={this.props.history} restaurant={this.props.restaurant} />;
    }

    return <>
        <div className="show-top-background">
          <img className="rest-image" src={this.props.restaurant.photo_url} />
        </div>

        <div className="rest-show-container">
          <div className="rest-page-title">
            {this.props.restaurant.name}
          </div>

          <div className='review-stars-cont'>
            <div className="review-stars"></div> 
            <div className="review-stars-rating">4.4</div>
          </div>

          <div className="rest-page-description">
            Description: {this.props.restaurant.description}
          </div>

          <div>Location: {this.props.restaurant.location}</div>
          <div>Cuisines: {this.props.restaurant.cuisines}</div>
          <div>Hours of Operation: {this.props.restaurant.hours_of_operation}</div>
          <div>Tables: {this.props.restaurant.tables}</div>

        </div>

        <div className="review-container">
          {this.props.reviews.map(rev => {
            return <Reviews props={this.props} key={rev.id} review={rev} />;
          })}
        </div>

        {reviewForm}
        {reservationForm}
      </>;
  }
}

export default RestaurantShowItem;
