import React,{ useState,useEffect } from 'react';
import "./Modal.css";
import circleicon from "./reqimages/circle.png"


function Modal(props) {
  const [subtotal,setsubtotal]=useState(0);
  const [total,settotal]=useState(0);
  function closemodal(){
    props.funcname(false)
  }

  const [data, setdata] = useState(0);
  
  // + adding the use
  useEffect(() => {
    

    // we will use async/await to fetch this data
    
      const actualdata = props.data1
      
      // store the data into our user variable
      setdata(actualdata);
      console.log(data)
      
   
  }, []);
  function setalltotal(){
    setsubtotal(props.data1.price)
    settotal(parseInt(subtotal)+90)

  }
    
  return (
    <div className="modalBackground">
      {/* <h1>welcome to modal</h1> */}
      <div className='heading'>
        <div><p>Summary</p></div>
        <div className='X' onClick={closemodal}><p>X</p></div>
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

          {data &&(
            <div className='ordersummry'>
          {data.alltypes.map((item,idx)=>(
            
              <div className='forflexing' key={idx}>
                <div><h2>{item}</h2></div>
                <div><h2>{data.services}</h2></div>
                <div><h2>{data.price}</h2></div>
                
              </div>
              
          ))}
    
        </div>
      
        
        )}
        
        
      <div className='Subtotal' onClick={setalltotal}><p>Sub total:<b>{subtotal}</b></p></div>
      <div className='PickupCharges'><p>Pickup Charges: <b>90</b></p></div>
      <div className='Total'>
        <p> Total:<b>Rs{total}</b></p>
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
      <div className='Confirm'>
        <button>Confirm</button>
      </div>
    </div>
  );
}

export default Modal;