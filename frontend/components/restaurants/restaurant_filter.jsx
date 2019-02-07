import React from 'react';

class RestaurantFilter extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      cuisines: ''
    };

    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  componentDidMount() {
    window.scroll(0, 0);
  }
  
  handleSubmit() {
    this.props.searchRestaurants(this.state);
  }

  update(field) {
    if (!field) this.props.fetchRestaurants();
    this.setState({ cuisines: field }, this.handleSubmit);
  }

  render() {
    return (
      <>
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

          <form className="text-filter-selection">
            <div className="radio-section">
              <input
                className="radio-button"
                name="radio"
                type="radio"
                onClick={e => this.update("american")}
              />
              <div className="text-filter">American</div>
            </div>

            <div className="radio-section">
              <input
                className="radio-button"
                name="radio"
                type="radio"
                onClick={e => this.update("italian")}
              />
              <div className="text-filter">Italian</div>
            </div>
            
            <div className="radio-section">
              <input
                className="radio-button"
                name="radio"
                type="radio"
                onClick={e => this.update("greek")}
              />
              <div className="text-filter">Greek</div>
            </div>

            <div className="radio-section">
              <input
                className="radio-button"
                name="radio"
                type="radio"
                onClick={e => this.update("indian")}
              />
              <div className="text-filter">Indian</div>
            </div>

            <div className="radio-section">
              <input
                className="radio-button"
                name="radio"
                type="radio"
                onClick={e => this.update("seafood")}
              />
              <div className="text-filter">Seafood</div>
            </div>

            <div className="radio-section">
              <input
                className="radio-button"
                name="radio"
                type="radio"
                onClick={e => this.update("bar")}
              />
              <div className="text-filter">Night Life</div>
            </div>
          </form>
          <div className="filter-hr" />
        </div>
      </>
    );
  }
}

export default RestaurantFilter;