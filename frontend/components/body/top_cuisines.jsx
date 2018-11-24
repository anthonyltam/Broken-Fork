import React from 'react';
import { withRouter } from 'react-router-dom';

class TopCuisines extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    // console.log('im here')
    e.preventDefault();
    this.props.history.push('/restaurants');
  }
  render() {
    // console.log('props from top_cuisines', this.props);
    return (
      <>
        <h2 className='pop-rests'>Top Cuisines near Feeboland</h2>
        <div className='body-hr'></div>
          <div className="pop-grid-container">

            <div className='everything-cuisine splash' onClick={this.handleClick}>Everything</div>
            <div className='italian-cuisine splash'>Italian</div>
            <div className='american-cuisine splash'>American</div>
            <div className='mexican-cuisine splash'>Mexican</div>
          </div>
      </>
    );
  }
}

export default withRouter(TopCuisines);
