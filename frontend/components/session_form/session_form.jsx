import React from 'react';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {email: 'email', password: 'password'};

    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearField = this.clearField.bind(this);
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
  render() {
    let form =
      <div className='modal-child'>
        <input onChange={this.update('email')} type='text' value='Enter Email'></input>
      </div>;

    return (
      <div>

        <form className='sesh-form' onSubmit={this.handleSubmit}>
          <h3 className='form-name'>{this.props.formType}</h3>
          <hr></hr>
            <input className='field email' onFocus={ this.clearField('email')} onChange={ this.update('email')} type='text' value={this.state.email}/>
            <input className='field pw' onFocus={ this.clearField('password')} onChange={ this.update('password')} type='text' value={this.state.password}/>
            <a href="https://github.com/anthonyltam/Broken-Fork">Broken Forgot Password Link?</a>
          <button className="submit-button">{this.props.submitButton}</button>
          <hr></hr>
        </form>
      </div>
    )
  }
}

export default SessionForm;
