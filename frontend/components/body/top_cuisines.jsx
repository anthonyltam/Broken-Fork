import React from 'react';
// import everything from '../../../app/assets/images/everything-png.jpg';
// <img src={everything} className='everything-cuisine splash'></img>
// /Users/anthonytam/desktop/broken_fork/app/assets/images/everything-png.jpg

class TopCuisines extends React.Component {

  render() {
    return (
      <>
        <h2 className='pop-rests'>Top Cuisines near Feeboland</h2>
        <div className='body-hr'></div>
          <div className="grid-container">
            <div className='everything-cuisine splash'>Everything</div>
            <div className='italian-cuisine splash'>Italian</div>
            <div className='american-cuisine splash'>American</div>
            <div className='mexican-cuisine splash'>Mexican</div>
          </div>
      </>
    )
  }
}

export default TopCuisines;
