import React from 'react';
import RestaurantIndexItem from './restaurant_index_item';
import { Link } from 'react-router-dom';


class RestaurantIndex extends React.Component {
  componentDidMount() {
    this.props.fetchRestaurants();
  }


  render() {
    return (
      <>
        <div className='link-nav'>
          <Link className='link-nav-child' to='/'>Home</Link>
          <span className='link-nav-child'>Location</span>
        </div>

        <div className='index-nav'>
          <div className='box-form'>
            <div className='box-dropdowns'>

              <input className='date' type='date'></input>

              <select className='time'>
                <option value='12:00'>12:00</option>
                <option value='12:30'>12:30</option>
                <option value='1:00'>1:00</option>
                <option value='1:30'>1:30</option>
                <option value='2:00'>2:00</option>
                <option value='2:30'>2:30</option>
                <option value='3:00'>3:00</option>
                <option value='3:30'>3:30</option>
                <option value='4:00'>4:00</option>
                <option value='4:30'>4:30</option>
                <option value='5:00'>5:00</option>
                <option value='5:30'>5:30</option>
                <option value='6:00'>6:00</option>
                <option value='6:30'>6:30</option>
                <option value='7:00'>7:00</option>
                <option value='7:30'>7:30</option>
                <option value='8:00'>8:00</option>
                <option value='8:30'>8:30</option>
                <option value='9:00'>9:00</option>
                <option value='9:30'>9:30</option>
                <option value='10:00'>10:00</option>
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
          <input className='box-search' type='text' placeholder='Location, Restaurant, or Cuisine'></input>
          <button  onClick={ console.log('clicked on index button') } className='box-go'>Let's Go</button>

          </div>
        </div>


        <div className='parent-container'>
          <div className='filter-container'></div>
          <div className='results-container'>

            <div className='tables-match'>
              <span>{this.props.restaurants.length} TABLES AVAILABLE</span>
              <select className='right-filter'>
                <option value='Best Match'>Best Match</option>
                <option value='A-Z'>A-Z</option>
                <option value='Highest Rated'>Highest Rated</option>
              </select>
            </div>
            
            <ul>
              {this.props.restaurants.map( restaurant => {
                return <RestaurantIndexItem key={restaurant.id} restaurant={restaurant}/>
              })}
            </ul>
          </div>
        </div>
      </>
    )
  }
}

export default RestaurantIndex;
