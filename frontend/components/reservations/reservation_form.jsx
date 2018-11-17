import React from 'react';

class ReservationForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      day: '',
      start_time: '',
      end_time: '',
      user_id: this.props.currentUser,
      restaurant_id: this.props.restaurant.id
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.props.createReservation(this.state);

    this.props.history.push("/reservations");
    
  }

  update(field) {
    return e => this.setState( { [field]: e.currentTarget.value });
  }

  render() {
    console.log(this.state);
    return <>
      {/* <div>hello from the reservation form</div> */}
      <div className="reservation-form-container">
        <form className="reservation-form-content" onSubmit={this.handleClick}>
          <div className="reservation-form-title">Make A Reservation</div>

          <label>Day</label>
          <input type="date" value={this.state.day} onChange={this.update("day")} />

          <label>Start Time</label>
          <input type="text" value={this.state.start_time} onChange={this.update("start_time")} placeholder="12" />

          <label>End Time</label>
          <input type="text" value={this.state.end_time} onChange={this.update("end_time")} placeholder="2" />

          <input className="Reservation-submit-button" type="submit" />
        </form>
      </div>
    </>;
  }
}

export default ReservationForm;