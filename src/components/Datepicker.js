import React, { Component } from 'react';
import DatePicker from 'react-datepicker';

import "react-datepicker/dist/react-datepicker.css";
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      startDate: null
    };
    this.handleChange = this.handleChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  handleChange(date) {
    this.setState({
      startDate: date
    })
  }

  onFormSubmit(e) {
    e.preventDefault();
    console.log(this.state.startDate)
  }

  render() {
    return (
      <>
        <label htmlFor="myDatePicker">
          <img src="/images/icons/calendar_today.svg" alt="date" style={{ 'margin-right': 10 }} />
        </label>
        <DatePicker
          selected={this.state.startDate}
          onChange={this.handleChange}
          name="startDate"
          dateFormat="MM/dd/yyyy"
          className='my-date-picker'
          id="myDatePicker"
          placeholderText={'Any date'}
          minDate={new Date()}
        />
      </>

    );
  }

}

export default App;  