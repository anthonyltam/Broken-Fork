import React from 'react';
import { withRouter } from 'react-router-dom';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cuisines: ''
    };
    
  }

  handleSubmit(e) {
    e.preventDefault();
    // console.log('hello from searchBar');
    this.props.searchRestaurants(this.state);
    this.props.history.push(`/restaurants?search=${this.state.cuisines}`);
  }

  update(field) {
    return e => this.setState( { [field]: e.currentTarget.value });
  }

  render() {
    return (
      <>
        <input className='box-search' type='text' placeholder='Cuisine' value={this.state.body} onChange={ this.update('cuisines')}></input>
        <button onClick={this.handleSubmit.bind(this)} className='box-go'>Let's Go</button>
      </>
    );
  }
}


export default withRouter(SearchBar);