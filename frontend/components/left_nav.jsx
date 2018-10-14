import React from 'react';
import { Link } from 'react-router-dom';

const LeftNav = (props) => (
  <Link to='/' className='nav-left'>
    <div className='parent-home-icon'>
      <img className='home-icon' src={window.images.logo}></img>
    </div>
    <span className='home-text'>BrokenFork</span>
  </Link>
);

export default LeftNav;
