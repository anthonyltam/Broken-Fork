import React from 'react';
import SearchContainer from './search_container';

class Splash extends React.Component {
  constructor(props) {
    super(props);

  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.history.push('/restaurants');
  }

  render() {
    return(

    <div className='jumbo-container'>
      <div className='transparent-container'>
        <div className='box-container'>
        <p className='box-message'>Find your table for any occasion</p>
          <div className='box-form'>

            <div className='box-dropdowns'>

              <input className='date' type='date'></input>

              <select className='time'>
                <option value=''>Select A Time</option>
                <option value='10:00'>10:00</option>
                <option value='11:00'>11:00</option>
                <option value='12:00'>12:00</option>
                <option value='1:00'>1:00</option>
                <option value='2:00'>2:00</option>
                <option value='3:00'>3:00</option>
                <option value='4:00'>4:00</option>
                <option value='5:00'>5:00</option>
                <option value='6:00'>6:00</option>
                <option value='7:00'>7:00</option>
                <option value='8:00'>8:00</option>
                <option value='9:00'>9:00</option>
                <option value='10:00'>10:00</option>
                <option value='11:00'>11:00</option>
                <option value='12:00'>12:00</option>
              </select>

              <select className='box-num-guests'>
                <option value="1">1 person</option>
                <option value="2">2 people</option>
                <option value="3">3 people</option>
                <option value="4">4 people</option>
                <option value="5">5 people</option>
                <option value="6">6 people</option>
                <option value="7">7 people</option>
                <option value="8">8 people</option>
              </select>

          </div>
          <input className='box-search' type='text' placeholder='       Location, Restaurant, or Cuisine'></input>
          <button onClick={ this.handleSubmit.bind(this) } className='box-go'>Let's Go</button>

          <SearchContainer />
        </div>
      </div>
    </div>
  </div>
);
}
}

export default Splash;
