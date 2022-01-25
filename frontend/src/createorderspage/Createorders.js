import React from 'react';
import "./Createorders.css"
import Sidebar from './components/sidebar';
import Loginheader from '../registrationpage/components/Loginheader';
import "../registrationpage/components/Loginheader.css"
import Loginfooter from '../registrationpage/components/Loginfooter';
import '../registrationpage/components/Loginfooter';
export default function Createorders() {
  return (
    <div className='app'>
      {/* start coding here */}
      <Loginheader />
      <Sidebar />
      <div className='forflex'>
        <div className='orders'>
          Orders | 0
        </div>
        <div className='searchbar'>
          <input className='forinput' type="text" />
        </div>
      </div>
      <div className="middle-button">
      <div className='create-button'><span>Create</span></div>

      </div>
      <Loginfooter />












    </div>
  );
}
