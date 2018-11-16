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

  update(field) {
    return e => this.setState( { [field]: e.currentTarget.value } );
  }

  render() {
    return <>
        <div className="review-form-container">
          <form className="review-form-content" onSubmit={this.handleClick}>
            <div className="review-form-title">Write A Review</div>

            <label>Rating</label>
            <input type="text" value={this.state.rating} onChange={this.update("rating")} placeholder="1" />

            <label>Review</label>
            <textarea value={this.state.body} onChange={this.update("body")} />

            <input className="review-submit-button" type="submit" />
          </form>
        </div>
      </>;
  }
}

export default ReviewForm;