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
          <span className='form-name'>{this.props.formType}</span>
            <input onFocus={ this.clearField('email')} onChange={ this.update('email')} type='text' value={this.state.email}/>
            <input onFocus={ this.clearField('password')} onChange={ this.update('password')} type='text' value={this.state.password}/>
          <button>{this.props.submitButton}</button>

        </form>
      </div>
    )
  }
}

export default SessionForm;
