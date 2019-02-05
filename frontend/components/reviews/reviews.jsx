import React from 'react';

class Reviews extends React.Component {

  render() {
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
              <div className="dined-on">Confirmed Diner.</div>
            </div>

            <div className="review-categ">
              Rating<span className="review-ratings"> 5 </span>
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