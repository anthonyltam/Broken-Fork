import React from 'react';

class SignUpForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      first_name: '',
      last_name: '',
      location: ''
    };

    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return (e) => {
      this.setState( {[field]: e.target.value} );
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.processForm(this.state).then( () => {this.props.closeModal() })
  }

  render() {

    let errors = this.props.errors ? <p className='login-errors'>{this.props.errors}</p> : null;
 
    return (
      <div>

        <form className='signup-form' onSubmit={this.handleSubmit}>
          <h3 className='form-name'>{this.props.formType}</h3>
          <hr></hr>
          {errors}
            <div className='input-field'>
              <input className='field email' onChange={ this.update('email')} type='text' value={this.state.email} placeholder='email'/>
              <input className='field first_name' onChange={ this.update('first_name')} type='text' value={this.state.first_name} placeholder='first name'/>
              <input className='field last_name' onChange={ this.update('last_name')} type='text' value={this.state.last_name} placeholder='last name'/>
              <input className='field location' onChange={ this.update('location')} type='text' value={this.state.location} placeholder='primary dining location'/>
              <input className='field pw' onChange={ this.update('password')} type='password' value={this.state.password} placeholder='password'/>
              <a className='view-github' href="https://github.com/anthonyltam/Broken-Fork">View the Github Repo</a>
              <button className="submit-button">{this.props.submitButton}</button>
            </div>

          <hr></hr>
          <div className='bottom-column'>
            <span className='dont-complete-form'>Don't want to complete the form?</span>
            <div className='other-links'>
              <button className='link-but-facebook'>
                <div className='facebook-logo'></div>
                <p>Continue with Facebook</p>
              </button>
              <button className='link-but-google'>
                <div className='google-logo'></div>
                <p>Continue with Google</p>
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default SignUpForm;
