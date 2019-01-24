import React from 'react';

class RestaurantFilter extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      cuisines: ''
    };

    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.updateCuisine = this.updateCuisine.bind(this);
  }
  
  handleSubmit() {
    this.props.searchRestaurants(this.state);
  }

  update(field) {
    if (!field) this.props.fetchRestaurants();
    this.setState({ cuisines: field }, this.handleSubmit);
  }

  render() {
    console.log('state', this.state);
    return <>
        <div className="filter-container">
          <div className="map-cont">
            <div className="map-text">Map</div>
          </div>

          <br />
          <div className="filter-hr" />

          {/*  */}
          {/* CUISINE */}
          {/*  */}
          <div className="filter-section">
            <div className="cuisine-pin" />
            <div>Cuisine</div>
          </div>

          <div className="text-filter-selection">
            <div className="filter-box" onClick={e => this.update("")} />
            <div className="text-filter">View All</div>
          </div>

          <div className="text-filter-selection">
            <div className="filter-box" onClick={e => this.update("american")} />
            <div className="text-filter">American</div>
          </div>

          <div className="text-filter-selection">
            <div className="filter-box" onClick={e => this.update("italian")} />
            <div className="text-filter">Italian</div>
          </div>

          {/* <div className="text-filter-selection">
          <div className="filter-box" onClick={e => this.update('french')}/>
            <div className="text-filter">French</div>
          </div> */}
          
          <div className="text-filter-selection">
          <div className="filter-box" onClick={e => this.update('seafood')}/>
            <div className="text-filter">Seafood</div>
          </div>
          <div className="text-filter-selection">
          <div className="filter-box" onClick={e => this.update('indian')}/>
            <div className="text-filter">Indian</div>
          </div>

          <br />
          <div className="filter-hr" />
        </div>
      </>;
  }


}

export default RestaurantFilter;