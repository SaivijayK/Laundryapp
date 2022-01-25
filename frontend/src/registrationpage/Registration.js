import React from 'react';
import Loginheader from "./components/Loginheader"
import Loginfooter from "./components/Loginfooter"
import Refer from "./components/Refer"
import Socialmedia from './components/Socialmedia';
import "./Registration.css"

export default function Registration() {
  return (
      <>
        <Loginheader/>
        <div className='body'>
        <div className='container1'>
        <div className='heading'>
        <p>Laundry</p>
        <p>Services</p>
        </div>
        <div className='content'>
          <p>Doorstep &</p>
          <p>Dryclean Service</p>
        </div>
        <div className='already'>
        <p>Already Have Account</p>
        </div>
        <button className='signinb'><p className='signint'>Sign In</p></button>
        </div>
        <div className='verticalline'>
        </div>
        <div className='container2'>
        <div className='heading1'>
        <p><h1>REGISTER</h1></p>
        </div>
        <div>
        <form action="">
        <div className='inputfield1'>
          <input type="text" name='Name' placeholder='Name'/>
          <input type="text" name='Phone' placeholder='Phone' />
          <input type="text" name='District' placeholder='District' />
          <input type="text" name='number' placeholder='Pincode' />
        </div>
        <div className='inputfield2'>
          <input type="text" name='Email' placeholder='Email'/>
          <input type="text" name='State' placeholder='State' />
          <input type="text" name='Address' placeholder='Address' />
        </div>  
        </form>
        </div>
        <div className='svgterms'>
        <div>
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22">
          <g id="CD" fill="#f5f9fe" stroke="#707070" stroke-width="1">
            <rect width="22" height="22" rx="3" stroke="none"/>
            <rect x="0.5" y="0.5" width="21" height="21" rx="2.5" fill="none"/>
          </g>
        </svg>
        </div>
        <div>
        <p>I agree to Terms & Conditions receiving marketing and promotional materials</p>
        </div>
        </div>
        <div className='registerbutton'>
          <button>Register</button>
        </div>
        </div>
        </div>
        <Refer />
        <Socialmedia/>
        <Loginfooter/>
      </>
  );
}