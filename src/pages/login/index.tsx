import React, { Component } from "react";
import "./style.scss";
import { Images } from "theme/images";
class Login extends Component {
  render() {
    return (
      <section className="container">
        <div className="card">
          <div className="left">
            <img src={Images.loginImage} alt="sign-in" className="imgStyle" />
          </div>
          <div className="right">
            <h1 className="title">Login</h1>
            <form>
              <input type="text" placeholder="Enter Username"></input>
              <input type="password" placeholder="Enter Password"></input>
              <button className="button">Login</button>
            </form>
            <p>
              Are you new here? <span>Register</span>
            </p>
          </div>
        </div>
      </section>
    );
  }
}

export default Login;
