import React from 'react';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '', 
      password: ''
    };

    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemoLogin = this.handleDemoLogin.bind(this);
    this.otherForm = this.otherForm.bind(this);
  }

  update(field) {
    return (e) => {
      this.setState( {[field]: e.target.value} );
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.processForm(this.state).then( () => {this.props.closeModal(); });
  }

  handleDemoLogin(e) {
    e.preventDefault();
    this.props.demoLogin();
    this.props.closeModal();
  }

  otherForm() {
    this.props.otherForm();
    this.props.clearErrors();
  }

  render() {
      let link;
        if (this.props.formType === 'Please sign in') {
          link = <>
            <div>
              <span className='new-to-broken'>New to BrokenFork?</span>
              <button className='bottom-link' onClick={this.otherForm}>Create an account</button>
              </div>
            </>;
        } else {
          link = null;
        }

    return (
      <div>

        <form className='sesh-form' onSubmit={this.handleSubmit}>
          <h3 className='form-name'>{this.props.formType}</h3>
          <hr></hr>
            <span className='sign-errors'>{this.props.errors}</span>
            <div className='input-field'>
              <input className='field email' onChange={ this.update('email')} type='text' placeholder='email' value={this.state.email} required/>
              <input className='field pw' onChange={ this.update('password')} type='password' placeholder='password' value={this.state.password} required/>
              <a className = 'view-github' href="https://github.com/anthonyltam/Broken-Fork">View the Github Repo</a>
              <button className="submit-button">{this.props.submitButton}</button>
              <button className='signin-demo-login' onClick={this.handleDemoLogin}>Demo</button>
            </div>

          <hr></hr>
          <div className='bottom-column'>
            <span className='dont-complete-form'>Don't want to complete the form?</span>
            <div className='other-links'>
              <button className='link-but-facebook'>
                <div className='facebook-logo'></div>
                <p className='google-facebook'>Continue with Facebook</p>
              </button>
              <button className='link-but-google'>
                <div className='google-logo'></div>
                <p className='google-facebook'>Continue with Google</p>
              </button>
            </div>
          </div>
          <div className='bottom-text'>
            {link}
          </div>
        </form>
      </div>
    );
  }
}

export default SessionForm;
