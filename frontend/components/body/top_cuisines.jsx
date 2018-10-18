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
            <div className='everything-italian splash'>Italian</div>
            <div className='everything-merican splash'>American</div>
            <div className='everything-mexican splash'>Mexican</div>
          </div>
      </>
    )
  }
}

export default TopCuisines;
