import React from 'react';

class CurrentLocation extends React.Component {

  render() {
    return (
      <>
        <div className='current-location-parent'>
          <div className='curr-location'>Look's like you're in Feeboland. Not correct?</div>
          <div className='curr-location-lookup'>
            <div className='location-icon'></div>
            <a href='' className='l-icon-text'>Get current location.</a>
          </div>
        </div>
        <div className='body-hr'></div>
      </>
    )
  }
}

export default CurrentLocation;
