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


        <img src="/images/icons/Access_time.svg" alt="time" />
        <DatePicker
          selected={this.state.startDate}
          onChange={this.handleChange}
          name="startTime"
          showTimeSelect
          showTimeSelectOnly
          timeIntervals={15}
          placeholderText={this.props.vender}
autoComplete='off'
          timeCaption="Time"
          dateFormat="h:mm aa"

        />
      </>

    );
  }

}

export default App;  