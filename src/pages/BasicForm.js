import React, { Component } from "react";

class BasicForm extends Component {
  // constructor that initializes the component's state by setting initial values for email, phoneNumber, emailValid, and phoneNumberValid.
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      phoneNumber: "",
      emailValid: true,
      phoneNumberValid: true,
      entries: [], // Initialize entries state as an empty array
    };
  }

  validateEmail = (email) => {
    // email validation
    return /\S+@\S+\.\S+/.test(email);
  };

  validatePhoneNumber = (phoneNumber) => {
    // phone number validation
    return /^[0-9]{10}$/.test(phoneNumber);
  };

  // Whenever the value of an input field changes.
  handleChange = (event) => {
    const { name, value } = event.target;
    const isValid =
      name === "email"
        ? this.validateEmail(value)
        : this.validatePhoneNumber(value);
    this.setState({
      [name]: value,
      [`${name}Valid`]: isValid,
    });
  };

  // It checks if both the email and phone number inputs are valid (emailValid and phoneNumberValid).
  // If both inputs are valid, it constructs an entry string combining the email and phone number, adds it to the entries state array, and  resets the input fields.
  // If any input is invalid, it prevents the form submission and displays an alert message asking the user to correct the errors.
  onFormSubmit = (evt) => {
    evt.preventDefault();

    const { email, phoneNumber, emailValid, phoneNumberValid } = this.state;

    if (emailValid && phoneNumberValid) {
      const entry = `${email} - ${phoneNumber}`; 
      const entries = [...this.state.entries, entry];
      this.setState({ entries, email: "", phoneNumber: "" });
    } else {
      alert("Please correct the form errors before submitting.");
    }
  };

  render() {
    const { email, phoneNumber, emailValid, phoneNumberValid } = this.state;

    return (
      <div className="container">
        <h1>Sign Up Sheet</h1>

        <form id="form" onSubmit={this.onFormSubmit}>
          <input
            placeholder="Email"
            name="email"
            value={email}
            onChange={this.handleChange}
            className={emailValid ? "" : "error"}
          />
          {!emailValid && <span className="error-message"> Invalid email </span>}
          <input
            placeholder="Phone Number"
            name="phoneNumber"
            value={phoneNumber}
            onChange={this.handleChange}
            className={phoneNumberValid ? "" : "error"}
          />
          {!phoneNumberValid && (
            <span className="error-message"> Invalid phone number </span>
          )}
          <button className="btn" type="submit">Submit</button>
        </form>

        {/* Display entries */}
        <ul>
          {this.state.entries.map((entry, i) => (
            <li key={i}>{entry}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default BasicForm;

