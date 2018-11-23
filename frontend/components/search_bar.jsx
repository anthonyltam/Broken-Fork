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
    console.log('hello from searchBar');
    // this.props.searchRestaurants(this.state).then(rests => {
    //   console.log('in handle')
    this.props.searchRestaurants(this.state);
      this.setState({ cuisines: "" });
      this.props.history.push("/restaurants");

    // });
    // this.props.history.push("/restaurants");
  }

  update(field) {
    return e => this.setState( { [field]: e.currentTarget.value });
  }

  render() {
    console.log(this.state);
    console.log('props', this.props);
    return (
      <>
        <input className='box-search' type='text' placeholder='Location, Restaurant, or Cuisine' value={this.state.body} onChange={ this.update('cuisines')}></input>
        <button onClick={this.handleSubmit.bind(this)} className='box-go'>Let's Go</button>
      </>
    );
  }
}


export default withRouter(SearchBar);