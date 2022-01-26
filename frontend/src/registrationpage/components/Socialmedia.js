import React from 'react';
import "./Socialmedia.css"

export default function Socialmedia() {
  return(
      <>
      <div className='social'>
      <div className='aboutus'>
      <p>ABOUT US</p>
      <p>Door step & Dryclean Service</p>
      </div>
      <div className='home'>
      <p>Home</p>
      <p>Sign In</p>
      <p>Register</p>
      </div>
      <div className='pricing'>
      <p>Pricing</p>
      </div>
      <div className='career'>
      <p>Career</p>
      <p>Blogs</p>
      <p>Create</p>
      </div>
      <div className='contact'>
          <p>Contact</p>
      </div>
      <div className='socialmedia'>
          <p>SOCIAL MEDIA</p>
          <div className='icons'>
          {/* <img src="./reqimages/facebook.svg" alt="" /> */}
          <div className='svg'>
          <svg xmlns="http://www.w3.org/2000/svg" width="19.942" height="19.942" viewBox="0 0 19.942 19.942">
          <path id="facebook" d="M17.021,0H2.921A2.925,2.925,0,0,0,0,2.921v14.1a2.925,2.925,0,0,0,2.921,2.921H8.8v-7.05H6.466V9.387H8.8V7.011a3.509,3.509,0,0,1,3.505-3.505h3.544V7.011H12.308V9.387h3.544l-.584,3.505h-2.96v7.05h4.713a2.925,2.925,0,0,0,2.921-2.921V2.921A2.925,2.925,0,0,0,17.021,0Zm0,0" fill="#5861ae" opacity="0.6"/>
          </svg>
          </div>

          <div className='svg'>
          <svg xmlns="http://www.w3.org/2000/svg" width="19.942" height="19.942" viewBox="0 0 19.111 19.111">
            <g id="instagram" opacity="0.6">
              <path id="Path_169" data-name="Path 169" d="M13.938,0H5.173A5.179,5.179,0,0,0,0,5.173v8.765a5.179,5.179,0,0,0,5.173,5.173h8.765a5.179,5.179,0,0,0,5.173-5.173V5.173A5.179,5.179,0,0,0,13.938,0ZM9.556,14.781a5.226,5.226,0,1,1,5.226-5.226A5.232,5.232,0,0,1,9.556,14.781Zm5.351-9.219a1.544,1.544,0,1,1,1.544-1.544A1.546,1.546,0,0,1,14.906,5.562Zm0,0" transform="translate(0 0)" fill="#5861ae"/>
              <path id="Path_170" data-name="Path 170" d="M150.125,146.02a4.105,4.105,0,1,0,4.105,4.105A4.11,4.11,0,0,0,150.125,146.02Zm0,0" transform="translate(-140.569 -140.569)" fill="#5861ae"/>
              <path id="Path_171" data-name="Path 171" d="M388.416,96.3a.424.424,0,1,0,.424.424A.424.424,0,0,0,388.416,96.3Zm0,0" transform="translate(-373.51 -92.706)" fill="#5861ae"/>
            </g>
          </svg>
          </div>
          <div>
          <svg className='svg' xmlns="http://www.w3.org/2000/svg" width="19.942" height="19.942" viewBox="0 0 18.281 18.281">
            <path id="linkedin" d="M16.962,0H1.318A1.318,1.318,0,0,0,0,1.318V16.962a1.318,1.318,0,0,0,1.318,1.318H16.962a1.318,1.318,0,0,0,1.318-1.318V1.318A1.318,1.318,0,0,0,16.962,0ZM6.484,13.818H4.258V7.12H6.484ZM5.371,6.206H5.357a1.16,1.16,0,1,1,.029-2.314,1.161,1.161,0,1,1-.015,2.314Zm9.14,7.612H12.285V10.235c0-.9-.322-1.514-1.128-1.514a1.219,1.219,0,0,0-1.142.814,1.524,1.524,0,0,0-.073.543v3.74H7.716s.029-6.069,0-6.7H9.942v.948a2.21,2.21,0,0,1,2.006-1.105c1.465,0,2.563.957,2.563,3.014Zm0,0" fill="#5861ae" opacity="0.6"/>
          </svg>
          </div>
           </div>
      </div>
      </div>
      </>
  );
}
