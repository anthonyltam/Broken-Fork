import React from 'react';

class Body extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <div className='current-location'>
          <div className='curr-location'>Look's like you're in Feeboland. Not correct?</div>
          <div className='curr-location-lookup'>
            <div className='location-icon'></div>
            <div>Get current location.</div>
          </div>
        </div>
      </>
    )
  }
}

export default Body;
