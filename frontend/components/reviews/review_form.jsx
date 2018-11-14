import React from 'react';

class ReviewForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      rating: 5,
      body: ''
    };

    this.handleClick = this.handleClick.bind(this);
    // this.update = this.update.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    console.log('in handleclick');
  }

  update(field) {
    return e => this.setState( { [field]: e.currentTarget.value } );
  }

  render() {
    return (
      <>
        <div className="review-form-container">
          <form onSubmit={this.handleClick}>

            <label>Rating</label>
            <br/>
            <input type="text" value={this.state.rating} onChange={this.update("rating")} />
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