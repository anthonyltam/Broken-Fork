import React from 'react';

class JoinUs extends React.Component {

  render() {
    return (
      <>
        <div className='join-statement'>Favorite restaurant not yet on BrokenFork? Join the family!</div>
        <div className='join-us'>
          <div className='join-body-cont'>
            <div className='join-text'>Restaurateurs Join Us</div>
            <div className='join-body'>Join the more than 4 restaurants which fill seats and manage reservations with BrokenFork.</div>
            <button className='join-button'>Learn More</button>
          </div>
        </div>
      </>
    );
  }
}

export default JoinUs;
