import React from 'react';
import "./Loginheader.css"

export default function Loginheader() {
  return (
      <>
          <div className='header'>
          <div className='laundry-box'>
              <p>LAUNDRY</p>
          </div>
          <div className='contents-box'>
          <div className='home-box'>
              <p>Home</p>
          </div>
          <div className='pricing-box'>
              <p>Pricing</p>
          </div>
          <div className='careers-box'>
              <p>careers</p>
          </div>
          <div className='signin-box'>
              <p>Sign In</p>
          </div>
          </div>
          </div>
      </>
  );
}
