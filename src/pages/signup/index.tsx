import React, { Component } from "react";
import "./style.scss";
import { Images } from "theme/images";

class Signup extends Component {
  render() {
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
            <form>
              <label>Username</label>
              <input type="text" placeholder="Enter username" />
              <label>Email Address</label>
              <input type="email" placeholder="Example@email.com" />
              <label>Password</label>
              <input type="password" placeholder="Enter password" />
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
