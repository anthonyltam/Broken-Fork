import React from 'react';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {email: 'email', password: 'password'};

    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearField = this.clearField.bind(this);
    this.demoLogin = this.demoLogin.bind(this);
  }

  update(field) {
    return (e) => {
      this.setState( {[field]: e.target.value} );
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.processForm(this.state).then(this.props.closeModal())
  }

  clearField(field) {
    return (e) => {
      this.setState({[field]: ''});
    }
  }

  demoLogin(e) {
    console.log(this.props.signIn)
    e.preventDefault;
    const user = { email: 'DemoUser', password: 'starwars' };
    this.props.signIn(user);
  }

  render() {
      let link;
        if (this.props.formType === 'Please sign in') {
          link = <div>
              <span>New to BrokenFork?</span>
              <button className='bottom-link' onClick={this.props.otherForm}>Create an account</button>
            </div>
        } else {
          link = <button onClick={this.demoLogin}>Demo Login</button>
          // link = null;
        }

    return (
      <div>

        <form className='sesh-form' onSubmit={this.handleSubmit}>
          <h3 className='form-name'>{this.props.formType}</h3>
          <hr></hr>
            <div className='input-field'>
              <input className='field email' onFocus={ this.clearField('email')} onChange={ this.update('email')} type='text' value={this.state.email}/>
              <input className='field pw' onFocus={ this.clearField('password')} onChange={ this.update('password')} type='text' value={this.state.password}/>
              <a href="https://github.com/anthonyltam/Broken-Fork">Broken Forgot Password Link?</a>
              <button className="submit-button">{this.props.submitButton}</button>
            </div>

          <hr></hr>
          <div className='bottom-column'>
            <span>Don't want to complete the form?</span>
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
          <div className='bottom-text'>
            {link}
          </div>
        </form>
      </div>
    )
  }
}

export default SessionForm;

// <a href="https://github.com/anthonyltam/Broken-Fork">Create an account</a>
