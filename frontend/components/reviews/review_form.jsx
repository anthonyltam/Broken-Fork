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
    // console.log(this.props.test);
    e.preventDefault();    
    this.props.createReview(this.state);
    // this.props.test.history.push(`/restaurants/${this.props.restaurant.id}`);
  }

  update(field) {
    return e => this.setState( { [field]: e.currentTarget.value } );
  }

  render() {
    console.log('reviewform props:', this.props);
    // console.log('state', this.state);


    return (
      <>
        <div className="review-form-container">
          <form onSubmit={this.handleClick}>

            <label>Rating</label>
            <br/>
            <input type="text" value={this.state.rating} onChange={this.update("rating")} placeholder='1'/>
            <br/>

            <label>Review</label>
            <br/>
            <textarea value={this.state.body} onChange={this.update("body")} />
            <br/>

            <input type="submit" />
          </form>
        </div>

      </>
    );
  }
}

export default ReviewForm;