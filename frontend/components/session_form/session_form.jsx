import React from 'react';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {username: '', password: ''};

    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return (e) => {
      this.setState({[field]: e.target.value});
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.processForm(this.state);
  }

  render() {
    let form =
      <div className='modal-child'>
        <input type='text' value='Enter Email'></input>
      </div>;

    return (
      <div>

        <form className='sesh-form' onSubmit={this.handleSubmit}>
          <span className='form-name'>{this.props.formType}</span>
            <input onChange={ this.update('username')} type='text' value=' Email'/>
            <input onChange={ this.update('password')} type='text' value=' Password'/>
          <button>{this.props.submitButton}</button>
          {form}
        </form>
      </div>
    )
  }
}

export default SessionForm;
