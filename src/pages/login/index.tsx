import React, { Component } from "react";
import "./style.scss";
import { Images } from "theme/images";
class Login extends Component<{}, any> {
  initialState: any;
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      formErrors: {},
    };
  }
  handleFormValidation() {
    const { email, password } = this.state;
    let formErrors = {};
    let formIsValid = true;

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
    const { emailErr, passwordErr } = this.state.formErrors;
    return (
      <div className="container">
        <div className="circle"></div>
        <div className="card">
          <div className="left">
            <img src={Images.signUpImage} alt="signUp" />
          </div>
          <div className="right">
            <div className="header">
              <p className="title">Hello! Welcome Back</p>
              <p>
                Enter details and hit the login bottom to visit our website.
              </p>
            </div>
            <form onSubmit={this.handleSubmit}>
              <label>Email Address</label>
              <input
                type="email"
                name="email"
                placeholder="Example@email.com"
                value={this.state.email}
                onChange={this.handleChange}
              />
              {emailErr && <div className="errorMessage">{emailErr}</div>}
              <label>Password</label>
              <input
                type="password"
                name="password"
                placeholder="Enter password"
                value={this.state.password}
                onChange={this.handleChange}
              />
              {passwordErr && <div className="errorMessage">{passwordErr}</div>}
              <button type="submit">Login</button>
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
                Don't have an account?{" "}
                <span>
                  <button>Sign Up</button>
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

export default Login;
