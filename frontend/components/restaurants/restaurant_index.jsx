import React from 'react';
import RestaurantIndexItem from './restaurant_index_item';
import { Link } from 'react-router-dom';

class RestaurantIndex extends React.Component {
  constructor(props) {
    super(props);

    // this.handleRest = this.handleRest.bind(this);    
  }

  // handleRest(e) {
  //   e.preventDefault();
  // }

  componentDidMount() {
    this.props.fetchRestaurants();
  }

  render() {
    return (
      <>
        <div className="link-nav">
          <Link className="link-nav-child" to="/">
            Home
          </Link>
          <span className="link-nav-child">Location</span>
        </div>

        <div className="index-nav">
          <div className="box-form">
            <div className="box-dropdowns">
              <input className="date" type="date" />

              <select className="time">
                <option value="12:00">12:00</option>
                <option value="12:30">12:30</option>
                <option value="1:00">1:00</option>
                <option value="1:30">1:30</option>
                <option value="2:00">2:00</option>
                <option value="2:30">2:30</option>
                <option value="3:00">3:00</option>
                <option value="3:30">3:30</option>
                <option value="4:00">4:00</option>
                <option value="4:30">4:30</option>
                <option value="5:00">5:00</option>
                <option value="5:30">5:30</option>
                <option value="6:00">6:00</option>
                <option value="6:30">6:30</option>
                <option value="7:00">7:00</option>
                <option value="7:30">7:30</option>
                <option value="8:00">8:00</option>
                <option value="8:30">8:30</option>
                <option value="9:00">9:00</option>
                <option value="9:30">9:30</option>
                <option value="10:00">10:00</option>
              </select>

              <select className="box-num-guests">
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
            <input className="box-search" type="text" placeholder="Location, Restaurant, or Cuisine" />
            <button className="box-go">
              Let's Go
            </button>
          </div>
        </div>

        <div className="parent-container">
          <div className="filter-container">
            <div className="map-cont">
              <div className="map-text">Map</div>
            </div>
            <div className="price-filter">
              <div className="price-text">Price</div>
              <div className="price-ranges">
                <div className="price-amount">$$</div>
                <div className="price-amount">$$$</div>
                <div className="price-amount">$$$$</div>
              </div>
            </div>

            <br />
            <div className="filter-hr" />

            {/* REGION */}
            <div className="filter-section">
              <div className="region-pin"></div>
              <div>Regions</div>
            </div>

            <div className="text-filter-selection">
              <div className="filter-box" />
              <div className="text-filter">San Francisco</div>
            </div>

            <div className="text-filter-selection">
              <div className="filter-box" />
              <div className="text-filter">New York</div>
            </div>

            <div className="text-filter-selection">
              <div className="filter-box" />
              <div className="text-filter">Feebo Land</div>
            </div>

            <br />
            <div className="filter-hr" />


            {/*  */}
            {/* CUISINE */}
            {/*  */}
            <div className="filter-section">
              <div className="cuisine-pin"></div>
              <div>Cuisine</div>
            </div>

            <div className="text-filter-selection">
              <div className="filter-box" />
              <div className="text-filter">American</div>
            </div>

            <div className="text-filter-selection">
              <div className="filter-box" />
              <div className="text-filter">Italian</div>
            </div>

            <div className="text-filter-selection">
              <div className="filter-box" />
              <div className="text-filter">French</div>
            </div>
            <div className="text-filter-selection">
              <div className="filter-box" />
              <div className="text-filter">Seafood</div>
            </div>
            <div className="text-filter-selection">
              <div className="filter-box" />
              <div className="text-filter">Indian</div>
            </div>

            <br />
            <div className="filter-hr" />

            {/*  */}
            {/* SPECIALS */}
            {/*  */}
            <div className="filter-section">
              <div className="specials-pin"></div>
              <div>Specials</div>
            </div>

            <div className="text-filter-selection">
              <div className="filter-box" />
              <div className="text-filter">All Specials</div>
            </div>

            <div className="text-filter-selection">
              <div className="filter-box" />
              <div className="text-filter">Happy Hour</div>
            </div>

            <div className="text-filter-selection">
              <div className="filter-box" />
              <div className="text-filter">Events</div>
            </div>

            <br />
            <div className="filter-hr" />

            {/*  */}
            {/* TOP RATED */}
            {/*  */}
            <div className="filter-section">
              <div className="top-rated-pin"></div>
              <div>Top Rated</div>
            </div>

            <div className="text-filter-selection">
              <div className="filter-box" />
              <div className="text-filter">Authentic</div>
            </div>

            <div className="text-filter-selection">
              <div className="filter-box" />
              <div className="text-filter">Formal</div>
            </div>

            <div className="text-filter-selection">
              <div className="filter-box" />
              <div className="text-filter">Organic</div>
            </div>

            <div className="text-filter-selection">
              <div className="filter-box" />
              <div className="text-filter">Family Style</div>
            </div>

            <br />
            <div className="filter-hr" />

            {/*  */}
            {/* TIME */}
            {/*  */}
            <div className="filter-section">
              <div className="time-pin"></div>
              <div>Time</div>
            </div>

            <div className="text-filter-selection">
              <div className="filter-box" />
              <div className="text-filter">12:00 PM Only</div>
            </div>

            <div className="text-filter-selection">
              <div className="filter-box" />
              <div className="text-filter">7:00 PM Only</div>
            </div>

            <div className="text-filter-selection">
              <div className="filter-box" />
              <div className="text-filter">After Midnight</div>
            </div>

            <br />
            <div className="filter-hr" />

          {/*  */}
          {/* SEATING */}
          {/*  */}
          <div className="filter-section">
            <div className="seats-pin"></div>
            <div>Seating Options</div>
          </div>

          <div className="text-filter-selection">
            <div className="filter-box" />
            <div className="text-filter">Standard</div>
          </div>

          <div className="text-filter-selection">
            <div className="filter-box" />
            <div className="text-filter">Bar</div>
          </div>

          <div className="text-filter-selection">
            <div className="filter-box" />
            <div className="text-filter">Counter</div>
          </div>

          <div className="text-filter-selection">
            <div className="filter-box" />
            <div className="text-filter">Outoor</div>
          </div>

          <div className="text-filter-selection">
            <div className="filter-box" />
            <div className="text-filter">High Top</div>
          </div>

          <br />
          <div className="filter-hr" />

          </div>

          <div className="results-container">
            <div className="tables-match">
              <span className="rest-available">
                {this.props.restaurants.length} RESTAURANTS AVAILABLE
              </span>
              <select className="right-filter">
                <option value="Best Match">Best Match</option>
                <option value="A-Z">A-Z</option>
                <option value="Highest Rated">Highest Rated</option>
              </select>
            </div>

            <ul>
              {this.props.restaurants.map(restaurant => {
                return <RestaurantIndexItem fetchReviews={this.props.fetchReviews} restaurantId={restaurant.id} onClick={this.handleRest} key={restaurant.id} restaurant={restaurant} />;
              })}
            </ul>
          </div>
        </div>
        
      </>
    );
  }
}

export default RestaurantIndex;
