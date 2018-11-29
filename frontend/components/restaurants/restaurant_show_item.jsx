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
    } else {
      reviewForm = <div className="not-signed-in">You must be signed in to leave a review/make a reservation.</div>;
    }
    
    let reservationForm;
    if (this.props.currentUser) {
      reservationForm = 
      <ReservationFormContainer history={this.props.history} restaurant={this.props.restaurant} />;
    }

    return <>
        <div className="show-top-background">
          <img className="show-page-rest-image" src={this.props.restaurant.photo_url} />
        </div>

        {/*  */}
        {/* RESTAURANT INFO */}
        {/*  */}
        <div className="rest-show-container">
          <div className="rest-page-title">
            {this.props.restaurant.name}
          </div>

          <div className='review-stars-cont margin-bot-pleasee'>
            <div className="review-stars"></div> 
            <div className="review-stars-rating">4.4 Average Rating</div>
          </div>

          <div className="rest-page-description margin-bot-pleasee">
            {this.props.restaurant.description}
          </div>



          <div className="rest-info-section">
            <div className="region-pin pin"></div>
          <div className="next-to-pin">Location</div>
          </div>
          <div className="margin-bot-please">{this.props.restaurant.location}</div>

          <div className="rest-info-section">
            <div className="cuisine-pin pin "></div>
            <div className="next-to-pin">Cuisine</div>
          </div>
          <div className="margin-bot-please">{this.props.restaurant.cuisines}</div>       
 
          <div className="rest-info-section">
            <div className="seats-pin pin"></div>
            <div className="next-to-pin">Number of Tables</div>
          </div>
          <div className="margin-bot-please">{this.props.restaurant.tables}</div>

          <div className="rest-info-section">
            <div className="time-pin pin"></div>
            <div className="next-to-pin">Hours of Operation</div>
          </div>
          <div className="margin-bot-please">{this.props.restaurant.hours_of_operation}</div>

        </div>

        {/*  */}
        {/* REVIEWS */}
        {/*  */}
        <div className="review-container">
          <div className="reviews-rest-show-title">Reviews</div>

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
