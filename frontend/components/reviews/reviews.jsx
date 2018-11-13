import React from 'react';

class Reviews extends React.Component {

  render() {
    console.log('in reviews comp');
    return (
      
      <>
        <div className='review-box'>

          <div className='dined-on'>Dined on October 21st, 2018</div>
          <div>Overall 5 |</div>
          <div>Food 5 |</div>
          <div>Service 3 |</div>
          <div>Ambience 5 |</div>
          <div className='review-body'>{this.props.review.body}</div>
          <div className='review-rating'>{this.props.review.rating}</div>     
        </div>
        
        <hr className='review-hr'/>
      </>
    );
  }
}

export default Reviews;