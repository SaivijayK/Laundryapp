import React from 'react';
import Loginheader from '../registrationpage/components/Loginheader';
import'../registrationpage/components/Loginheader.css';
import Sidebar from '../createorderspage/components/sidebar';
import "../createorderspage/components/sidebar.css";
import Loginfooter from '../registrationpage/components/Loginfooter';
import '../registrationpage/components/Loginfooter.css';
import './Orders.css'
import ironing from '../assests/ironing.svg';
import bleach from '../assests/bleach.svg';
import towel from '../assests/towel.svg';
import washing from '../assests/washing-machine.svg';

export default function Orders() {
  var product_type=["Shirts","T-shirts","Trousers","Jeans","Boxers","Joggers"];
  var listItems = product_type.map((number) =>
    <div className='product-data'>
      <div><b><h3>{number}</h3></b>
      <h6>Lorem ipsum is a dummy text</h6></div>
      <div className='quantity'><input className='quantity-input' type="text" placeholder='0'/></div>
      <div className="Wash-type">
        <div><img src={washing}/></div>
        <div><img src={ironing}/></div>
        <div><img src={towel}/></div>
        <div><img src={bleach}/></div>
      </div>
      <div>
        __
      </div>

    </div>

  );
  return (
      <>
        <Loginheader/>
        <div className='forflex'>
        <div className='orders'>
          Orders | 0
        </div>
        <div className='searchbar'>
          <input className='forinput1' type="text" />
        </div>
      </div>
        <Sidebar/>
        <div className='table1'>
          <div className='top-bar'>
            <div>Product Types</div>
            <div>Quantity</div>
            <div>Wash Type</div>
            <div>Price</div>
          </div>
          {listItems}
        </div>
        <div className='flex-button'>
        <button>Cancel</button>
        <button className='proceed-button'>Proceed</button>
        </div>
        <Loginfooter/>














      </>
  );
}
