import React from 'react';
import Reviews from '../reviews/reviews';
import ReviewFormContainer from '../reviews/review_form_container';

class RestaurantShowItem extends React.Component {

  componentDidMount() {
    this.props.fetchRestaurant(this.props.match.params.id);
    this.props.fetchReviews(this.props.match.params.id);
  }

  componentWillReceiveProps(nextProps) {
    // console.log('nextprops:', nextProps);
  }

  render() {
    if (this.props.restaurant === undefined) {
      return null;
    }
    // console.log(this.props);

    return (
      <>
        <ul>
          <div className='show-top-background'>
            <img className='rest-image' src={this.props.restaurant.photo_url} ></img>
          </div>

          <h2>{this.props.restaurant.name}</h2>
          <li>Description: {this.props.restaurant.description}</li>
          <li>Location: {this.props.restaurant.location}</li>
          <li>Cuisines: {this.props.restaurant.cuisines}</li>
          <li>Hours of Operation: {this.props.restaurant.hours_of_operation}</li>
          <li>Tables: {this.props.restaurant.tables}</li>
        </ul>

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
