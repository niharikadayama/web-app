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
    } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      formIsValid = false;
      formErrors["emailErr"] = "Invalid email id.";
    }

    if (!password) {
      formIsValid = false;
      formErrors["passwordErr"] = "password is required.";
    } else if (password.length < 6) {
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
    }
  };
  render() {
    const { usernameErr, emailErr, passwordErr } = this.state.formErrors;

    return (
      <div className="container">
        <div className="circle"></div>
        <div className="card">
          <div className="left">
            <img src={Images.signUpImage} alt="signUp" />
          </div>
          <div className="right">
            <div className="header">
              <p className="title">Hello! Welcome </p>
              <p>Fill the form below and hit the signUp bottom to register.</p>
            </div>
            <form onSubmit={this.handleSubmit}>
              <label>Username</label>
              <input
                type="text"
                name="username"
                placeholder="Enter username"
                value={this.state.username}
                onChange={this.handleChange}
                className={usernameErr ? "showError" : ""}
              />
              {usernameErr && <div className="errorMessage">{usernameErr}</div>}
              <label>Email Address</label>
              <input
                type="email"
                name="email"
                placeholder="Example@email.com"
                value={this.state.email}
                onChange={this.handleChange}
                className={emailErr ? "showError" : ""}
              />
              {emailErr && <div className="errorMessage">{emailErr}</div>}
              <label>Password</label>
              <input
                type="password"
                name="password"
                placeholder="Enter password"
                value={this.state.password}
                onChange={this.handleChange}
                className={passwordErr ? "showError" : ""}
              />
              {passwordErr && <div className="errorMessage">{passwordErr}</div>}
              <button type="submit">Register</button>
            </form>
            <div className="footer">
              <h4>OR</h4>
              <div className="google-btn">
                <img
                  className="google-icon"
                  src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                  alt="googleLogo"
                />
                <p className="btn-text">Sign in with google</p>
              </div>
              <p>
                Already have an account?{" "}
                <span>
                  <button>Sign In</button>
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="hollow-circle"></div>
      </div>
    );
  }
}

export default Signup;
