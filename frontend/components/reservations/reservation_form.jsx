import React from 'react';
import DayPicker from "react-day-picker";

class ReservationForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      day: '',
      start_time: '',
      user_id: this.props.currentUser,
      restaurant_id: this.props.restaurant.id
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleDayClick = this.handleDayClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.props.createReservation(this.state);
    this.props.history.push("/reservations");
  }

  update(event) {
    let value = event.target.value;
    this.setState( { start_time: value });
  }

  // update(field) {
  //   return e => this.setState( { [field]: e.currentTarget.value });
  // }

  handleDayClick(date, { selected }) {
    this.setState({ day: date });
  }

  render() {
    // console.log(this.state);
    return <>
        <div className="reservation-form-container">
          <form className="reservation-form-content" onSubmit={this.handleClick}>
            <div className="reservation-form-title">Make A Reservation</div>

            <div>
              <DayPicker 
                onDayClick={this.handleDayClick}
                selectedDays={this.state.day}
              />
            </div>

            <div className="reservation-time-cont">
           
            <label className="reservation-time-text">Reservation Time</label>
            {/* <input type="time" value={this.state.start_time} onChange={this.update("start_time")} placeholder="12" /> */}
            <select className="reservation-time-option" onChange={ e => this.update(e)}>
              {/* <option value="0">0:00</option>
              <option value="1">1:00</option>
              <option value="2">2:00</option>
              <option value="3">3:00</option>
              <option value="4">4:00</option>
              <option value="5">5:00</option>
              <option value="6">6:00</option>
              <option value="7">7:00</option>
              <option value="8">8:00</option>
            <option value="9">9:00</option> */}
              <option value="" selected>Select A Time</option>
              <option value="10">10:00</option>
              <option value="11">11:00</option>
              <option value="12">12:00</option>
              <option value="13">13:00</option>
              <option value="14">14:00</option>
              <option value="15">15:00</option>
              <option value="16">16:00</option>
              <option value="17">17:00</option>
              <option value="18">18:00</option>
              <option value="19">19:00</option>
              <option value="20">20:00</option>
              <option value="21">21:00</option>
              <option value="22">22:00</option>
              <option value="23">23:00</option>
              <option value="24">24:00</option>
            </select>
          </div>
            <input className="reservation-submit-button" type="submit" value="Find A Table"></input>

            {/* <div className="booked-times">Booked 10 times today</div> */}
          </form>
        </div>
      </>;
  }
}

export default ReservationForm;