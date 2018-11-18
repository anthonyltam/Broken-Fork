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
          <div className="rest-page-description">
            Description: {this.props.restaurant.description}
          </div>
          Location: {this.props.restaurant.location}
          Cuisines: {this.props.restaurant.cuisines}
          Hours of Operation: {this.props.restaurant.hours_of_operation}
          Tables: {this.props.restaurant.tables}
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
