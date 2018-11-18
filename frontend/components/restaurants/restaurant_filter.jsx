import React from 'react';

class RestaurantFilter extends React.Component {

  render() {
    return (
      <>
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

        {/* </div> */}
        </div>
      </>
    );
  }


}

export default RestaurantFilter;