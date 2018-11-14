import React from 'react';

class Reviews extends React.Component {

  render() {
    return (
      <>
        <div className="review-box">

          <div className='review-user'>
            <div className='review-icon'>{this.props.review.user.first_name[0].toUpperCase()}</div>
            <div className='review-name'>{this.props.review.user.first_name}</div>
            <div className='review-location'>{this.props.review.user.location}</div>
          </div>

          <div>
            <div className='review-top-layer'>
              <div className='review-stars'></div> 
              <div className="dined-on">Dined on October 21st, 2018</div>
            </div>
            
            <div className='review-categ'>
              Overall<span className="review-ratings"> 5 </span>|
              Food<span className="review-ratings"> 5 </span>|
              Service<span className="review-ratings"> 3 </span>|
              Ambience<span className="review-ratings"> 5 </span>
            </div>
  
            <div className="review-body">{this.props.review.body}</div>

            <div className='review-btm-right'>
              <div className='report-img'></div>
              <div className='report-text'>Report</div>
              <div className='helpful-img'></div>
              <div className='report-text'>Helpful</div>
            </div>
          </div>
          
        </div>
        {/* <hr className="review-hr" /> */}

      </>
    );
  }
}

export default Reviews;