import React from "react";
import Loginheader from "./components/Loginheader";
import Loginfooter from "./components/Loginfooter";
import Refer from "./components/Refer";
import Socialmedia from "./components/Socialmedia";
import "./Login.css";

export default function Login() {
  return (
    <>
      <Loginheader />
      <div className="body">
        <div className="container1">
          <div className="heading">
            <p>Laundry</p>
            <p>Services</p>
          </div>
          <div className="content">
            <p>Doorstep &</p>
            <p>Dryclean Service</p>
          </div>
          <div className="already">
            <p>Don't have an Account</p>
          </div>
          <button className="signinb">
            <p className="signint">Register</p>
          </button>
        </div>
        <div className="verticalline"></div>
        <div className="container2">
          <div className="heading1">
            <p>
              <h1>SIGN IN</h1>
            </p>
          </div>
          <div>
            <form action="">
              <div className="inputfield1">
                <input type="text" name="Email" placeholder="Email/Phone" />
                <input type="password" name="Password" placeholder="Password" />
              </div>
              <div className="forget">
                <a href="/">Forget Password</a>
              </div>
            </form>
          </div>
          <div className="svgterms">
            <div></div>
          </div>
          <div className="registerbutton">
            <button>Sign In</button>
          </div>
        </div>
      </div>
      <Refer />
      <Socialmedia />
      <Loginfooter />
    </>
  );
}
