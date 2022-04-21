import React, { Component } from "react";
import "./style.scss";
import { Images } from "theme/images";

class Signup extends Component<{}, any> {
  initialState: any;
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "",
      formErrors: {},
    };
    this.initialState = this.state;
  }
  handleFormValidation() {
    const { username, email, password } = this.state;
    let formErrors = {};
    let formIsValid = true;

    if (!username) {
      formIsValid = false;
      formErrors["usernameErr"] = "Name is required.";
    } else if (username.length < 6) {
      formIsValid = false;
      formErrors["usernameErr"] = "Invalid username";
    }

    if (!email) {
      formIsValid = false;
      formErrors["emailErr"] = "Email id is required.";
    } else if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      formIsValid = false;
      formErrors["emailErr"] = "Invalid email id.";
    }

    if (!password) {
      formIsValid = false;
      formErrors["passwordErr"] = "password is required.";
    } else if (!/^(?=.*d)(?=.*[a-z])(?=.*[A-Z]).{8,32}$/.test(password)) {
      formIsValid = false;
      formErrors["passwordErr"] = "Invalid password";
    }

    this.setState({ formErrors: formErrors });
    return formIsValid;
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    if (this.handleFormValidation()) {
      alert("You have been successfully registered.");
      this.setState(this.initialState);
      console.log(this.state);
    }
  };
  render() {
    const { usernameErr, emailErr, passwordErr } = this.state.formErrors;
    return (
      <section className="container">
        <div className="card">
          <div className="left">
            <img src={Images.signUpImage} alt="sign-in" className="imgStyle" />
          </div>
          <div className="right">
            <h1 className="title">Register</h1>
            <form onSubmit={this.handleSubmit}>
              <input
                type="text"
                placeholder="Enter Username"
                value={this.state.username}
                onChange={this.handleChange}
                name="username"
                className={usernameErr ? "showError" : ""}
              />
              {usernameErr && <div className="errorMessage">{usernameErr}</div>}

              <input
                type="email"
                placeholder="Enter Email"
                value={this.state.email}
                onChange={this.handleChange}
                name="email"
                className={emailErr ? "showError" : ""}
              />
              {emailErr && <div className="errorMessage">{emailErr}</div>}

              <input
                type="password"
                placeholder="Enter Password"
                value={this.state.password}
                onChange={this.handleChange}
                name="password"
                className={passwordErr ? "showError" : ""}
              />
              {passwordErr && <div className="errorMessage">{passwordErr}</div>}
              <button type="submit" className="registerButton" value={"submit"}>
                Register
              </button>
            </form>
            <p>
              Already a member?{" "}
              <span>
                <button className="loginNavButton">Login</button>
              </span>
            </p>
          </div>
        </div>
      </section>
    );
  }
}

export default Signup;
