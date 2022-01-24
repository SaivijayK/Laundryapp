import React from 'react';
import Loginheader from "./components/Loginheader"
import Loginfooter from "./components/Loginfooter"
import Refer from "./components/Refer"
import Socialmedia from './components/Socialmedia';

export default function Login() {
  return (
      <>
        <Loginheader/>
        <Refer />
        <Socialmedia/>
        <Loginfooter/>
      </>
  
  );
}
