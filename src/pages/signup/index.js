import React, { Component } from "react";
import "./style.css";
import image from "assets/images/signup.png";
class Signup extends Component {
  render() {
    return (
      <section className="container">
        <div className="card">
          <div className="left">
            <img src={image} alt="sign-in" className="imgStyle" />
          </div>
          <div className="right">
            <h1 className="title">Register</h1>
            <form>
              <input type="text" placeholder="Enter Username"></input>
              <input type="email" placeholder="Enter Email"></input>
              <input type="password" placeholder="Enter Password"></input>
              <button className="button">Register</button>
            </form>
            <p>
              Already a member? <span>Login</span>
            </p>
          </div>
        </div>
      </section>
    );
  }
}

export default Signup;
