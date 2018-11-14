import React from 'react';
// import ReviewFormContainer from './review_form_container';

class Reviews extends React.Component {

  render() {
    // console.log("props", this.props)
    return <>
        <div className="review-box">
          <div className="review-user">
            <div className="review-icon">
            {this.props.review.first_name[0].toUpperCase() ? this.props.review.first_name[0].toUpperCase() : ''}
            </div>
            <div className="review-name">
              {this.props.review.first_name ? this.props.review.first_name : ''}
            </div>
            <div className="review-location">
            {this.props.review.location ? this.props.review.location : ''} 
              
            </div>
          </div>

          <div>
            <div className="review-top-layer">
              <div className="review-stars" />
              <div className="dined-on">Dined on October 21st, 2018</div>
            </div>

            <div className="review-categ">
              Overall<span className="review-ratings"> 5 </span>| Food<span className="review-ratings">
                {" "}
                5{" "}
              </span>| Service<span className="review-ratings">
                {" "}
                3{" "}
              </span>| Ambience<span className="review-ratings"> 5 </span>
            </div>

            <div className="review-body">{this.props.review.body}</div>
          </div>
        </div>
        <div className="review-btm-right">
          <div className="report-img" />
          <div className="report-text">Report</div>
          <div className="helpful-img" />
          <div className="report-text">Helpful</div>
        </div>


      </>;
  }
}

export default Reviews;