import React from 'react';
import Reviews from '../reviews/reviews';
import ReviewFormContainer from '../reviews/review_form_container';
import { ProtectedRoute } from "../../util/route_util";

class RestaurantShowItem extends React.Component {

  componentDidMount() {
    this.props.fetchRestaurant(this.props.match.params.id);
    this.props.fetchReviews(this.props.match.params.id);
  }

  render() {
    // if (this.props.restaurant === undefined || this.props.reviews.length === 0) {
    if (this.props.restaurant === undefined) {
      return null;
    }
    let review;
    if (this.props.currentUser) {
       review = 
        <ReviewFormContainer restaurant={this.props.restaurant} />
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
            console.log('this is a review', review);
            return <Reviews props={this.props} key={review.id} review={review} />;
          })}
        </div>  

        {/* <ProtectedRoute
          path="/restaurants/:id"
          component={ReviewFormContainer}
        /> */}
        {
        review
        // <ReviewFormContainer restaurant={this.props.restaurant}/>
        }
      </>
    );
  }
}

export default RestaurantShowItem;
