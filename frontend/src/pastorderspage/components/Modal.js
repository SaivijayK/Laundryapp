import React,{ useState,useEffect } from 'react';
import "./Modal.css";
import circleicon from "../reqimages/circle.png"

function Modal({setModalOpen,data1 }) {
  console.log("hello")
    
  return (
    <div className="modalBackground">
      {/* <h1>welcome to modal</h1> */}
      <div className='heading'>
        <div><p>Summary</p></div>
        <div className='X'><p>X</p></div>
      </div>
      <div className='addresses'>
        <div className='location'>
          <p>Store Location</p>
          <p>Gachibowli</p>
        </div>
        <div className='address'>
          <p>Store Address</p>
          <p>Near Phone booth, 10th road</p>
        </div>
        <div className='phone'>
          <p>Phone</p>
          <p>91 999999999</p>
        </div>
      </div>
      <div className='orderstatus'>
        <div><p><img src={circleicon} alt="" /> Picked up</p></div>
        <div> <p><img src={circleicon} alt="" />Washed</p></div>
        <div> <p><img src={circleicon} alt="" />Ironed</p></div>
        <div><p><img src={circleicon} alt="" />Deliverd</p></div>
      </div>



      <div className='orderdetails'>
      <div><p>Order Details</p></div>
      <div>
        {
          data1.map((item)=>{
            return(
              <div className='ordersummry'>
                <div><p>{item.productlist[0].producttype}</p></div>
                <div><p>{item.productlist[0].wash},{item.productlist[0].press},{item.productlist[0].fold},{item.productlist[0].pack}</p></div>
                <div><p>{item.productlist[0].quantity}X{item.productlist[0].price}={item.totalprice}</p></div>
              </div>
            )
          })
        }
      </div>
      <div className='Subtotal'><p>Sub total:<b>{data1[0].totalprice}</b></p></div>
      <div className='PickupCharges'><p>Pickup Charges: <b>90</b></p></div>
      <div className='Total'>
        <p> Total:<b>Rs560</b></p>
      </div>
      </div>
      <div className='Address'>
        <p>Address</p>
        <div>
          <p><b>Home</b></p>
          <p>#223, 10th road, jp nagar,</p>
          <p>Hyderabad</p>
        </div>
      </div>
      <div className='Cancel'>
        <button>Cancel</button>
      </div>
    </div>
  );
}

export default Modal;