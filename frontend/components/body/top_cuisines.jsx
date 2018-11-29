import React from 'react';
import { withRouter } from 'react-router-dom';

class TopCuisines extends React.Component {
  constructor(props) {
    super(props);

    this.searchAll = this.searchAll.bind(this);
    this.searchItalian = this.searchItalian.bind(this);
    this.searchAmerican = this.searchAmerican.bind(this);
    this.searchSeafood = this.searchSeafood.bind(this);
  }

  searchAll(e) {
    e.preventDefault();
    this.props.history.push('/restaurants');
  }

  searchItalian(e) {
    e.preventDefault();
    this.props.history.push("/restaurants?search=Italian");
  }

  searchAmerican(e) {
    e.preventDefault();
    this.props.history.push("/restaurants?search=American");
  }

  searchSeafood(e) {
    e.preventDefault();
    this.props.history.push("/restaurants?search=Seafood");
  }

  render() {
    return (
      <>
        <h2 className='pop-rests'>Top Cuisines near Feeboland</h2>
        <div className='body-hr'></div>
          <div className="pop-grid-container">

            <div className='everything-cuisine splash' onClick={this.searchAll}>Everything</div>
            <div className='italian-cuisine splash' onClick={this.searchItalian}>Italian</div>
          <div className='american-cuisine splash' onClick={this.searchAmerican}>American</div>
          <div className='seafood-cuisine splash' onClick={this.searchSeafood}>Seafood</div>
          </div>
      </>
    );
  }
}

export default withRouter(TopCuisines);
