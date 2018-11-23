import React from 'react';

class ReviewForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      rating: '',
      body: '',
      restaurant_id: this.props.restaurant.id,
      author_id: Object.values(this.props.user)[0].id,
      first_name: Object.values(this.props.user)[0].first_name,
      location: Object.values(this.props.user)[0].location
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();    
    this.props.createReview(this.state);
  }

  select(event) {
    let value = event.target.value;
    this.setState({ rating: value });    
  }

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value });
  }

  render() {
    return <>
        <div className="review-form-container">
          <form className="review-form-content" onSubmit={this.handleClick}>
            <div className="review-form-title">Write A Review</div>

            <div className='review-rating-container'>
            <label className="review-rating-text">Rating:</label>
            <select className="review-rating-score" onChange={ e => this.select(e)}>
              <option value="" selected>Please Rate</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
            </div>

            <div className='review-rating-container'>
              <label className="review-rating-text">Review:</label>
              <textarea className="review-rating-review" value={this.state.body} onChange={this.update("body")} placeholder="Write your review here."/>
            </div>
            <input className="review-submit-button" type="submit" />
          
          </form>
        </div>
      </>;
  }
}

export default ReviewForm;