import React from 'react';
import Loginheader from '../registrationpage/components/Loginheader';
import'../registrationpage/components/Loginheader.css';
import Sidebar from '../createorderspage/components/sidebar';
import "../createorderspage/components/sidebar.css";
import Loginfooter from '../registrationpage/components/Loginfooter';
import '../registrationpage/components/Loginfooter.css';
import './Orders.css';
import ironing from '../assests/ironing.svg';
import blueiron from '../assests/blueironing.svg';
import bluebleach from '../assests/bluebleach.svg';
import bluemachine from '../assests/bluemachine.svg';
import bleach from '../assests/bleach.svg';
import towel from '../assests/towel.svg';
import bluetowel from '../assests/foldclick.png'
import washing from '../assests/washing-machine.svg';
import { useState } from 'react';

export default function Orders() {
  const [shirtquantity,setshirtquantity]=useState("0");
  const [tshirtquantity,settshirtquantity]=useState("0");
  const [trouserquantity,settrouserquantity]=useState("0");
  const [boxersquantity,setboxersquantity]=useState("0");
  const [joggersquantity,setjoggersquantity]=useState("0");
  const [jeansquantity,setjeansquantity]=useState("0");
  
  const [shirtflag,setshirtflag]=useState(false);
  const [tshirtflag,settshirtflag]=useState(false);
  const [trouserflag,settrouserflag]=useState(false);
  const [boxersflag,setboxersflag]=useState(false);
  const [jeansflag,setjeansflag]=useState(false);
  const [joggersflag,setjoggersflag]=useState(false);

  const [shirtswash,setshirtswash]=useState(false);
  const [shirtsiron,setshirtsiron]=useState(false);
  const [shirtsfold,setshirtsfold]=useState(false);
  const [shirtspack,setshirtspack]=useState(false);

  const [tshirtswash,settshirtswash]=useState(false);
  const [tshirtsiron,settshirtsiron]=useState(false);
  const [tshirtsfold,settshirtsfold]=useState(false);
  const [tshirtspack,settshirtspack]=useState(false);

  const [joggerswash,setjoggerswash]=useState(false);
  const [joggersiron,setjoggersiron]=useState(false);
  const [joggersfold,setjoggersfold]=useState(false);
  const [joggerspack,setjoggerspack]=useState(false);

  const [jeanswash,setjeanswash]=useState(false);
  const [jeansiron,setjeansiron]=useState(false);
  const [jeansfold,setjeansfold]=useState(false);
  const [jeanspack,setjeanspack]=useState(false);

  const [boxerswash,setboxerswash]=useState(false);
  const [boxersiron,setboxersiron]=useState(false);
  const [boxersfold,setboxersfold]=useState(false);
  const [boxerspack,setboxerspack]=useState(false);

  
  const [trouserswash,settrouserswash]=useState(false);
  const [trousersiron,settrousersiron]=useState(false);
  const [trousersfold,settrousersfold]=useState(false);
  const [trouserspack,settrouserspack]=useState(false);

  const [shirtprice,setshirtprice]=useState(0);
  const [joggerprice,setjoggerprice]=useState(0);
  const [tshirtprice,settshirtprice]=useState(0);
  const [trouserprice,settrouserprice]=useState(0);
  const [jeansprice,setjeansprice]=useState(0);
  const [boxersprice,setboxersprice]=useState(0);

  
  function washtouch(setfunc,setpara,setpriceof,price) {
    setpriceof(price+20)
    setfunc(!setpara)
    if(setpara==true){
      setpriceof(price-20)
    }
 
  }
  function presstouch(setfunc,setpara,setpriceof,price) {
    setpriceof(price+15)
    setfunc(!setpara);
    if(setpara==true){
      setpriceof(price-15)
    }
  }

  function packtouch(setfunc,setpara,setpriceof,price) {
    setpriceof(price+25)
    setfunc(!setpara);
    if(setpara==true){
      setpriceof(price-25)
    }
  }
  function foldtouch(setfunc,setpara,setpriceof,price) {
    setpriceof(price+10)
    setfunc(!setpara);
    if(setpara==true){
      setpriceof(price-10)
    }
  }
  function handleshirtChange(event) {
    setshirtquantity(event.target.value);
    setshirtflag(true);
    console.log(shirtquantity)
  }
      
  function handletshirtChange(event) {
    settshirtquantity(event.target.value);
    settshirtflag(true);
    console.log(shirtquantity)
  }
  function handlejeansChange(event) {
    setjeansquantity(event.target.value);
    setjeansflag(true);
    console.log(shirtquantity)
  }
  function handlejoggersChange(event) {
    setjoggersquantity(event.target.value);
    setjoggersflag(true);
    console.log(shirtquantity)
  }
  function handleboxersChange(event) {
    setboxersquantity(event.target.value);
    setboxersflag(true);
    console.log(shirtquantity)
  }
  function handletrouserChange(event) {
    settrouserquantity(event.target.value);
    settrouserflag(true);
    console.log(shirtquantity)
  }
  var product_type=["Shirts","T-shirts","Trousers","Jeans","Boxers","Joggers"];

  
  var forshirts= 
    <div className='product-data'>
      <div><b><h3>{product_type[0]}</h3></b>
      <h6>Lorem ipsum is a dummy text</h6></div>
      <div className='quantity'><input className='quantity-input' type="text"  onChange={handleshirtChange} placeholder='0'/></div>
      <div className="Wash-type">
        <div onClick={() => washtouch(setshirtswash,shirtswash,setshirtprice,shirtprice)}><img src={shirtswash? bluemachine : washing }/></div>
        <div onClick={() => presstouch(setshirtsiron,shirtsiron,setshirtprice,shirtprice)}><img src={shirtsiron ? blueiron : ironing }/></div>
        <div onClick={() => foldtouch(setshirtsfold,shirtsfold,setshirtprice,shirtprice)}><img src={shirtsfold ? bluetowel : towel}/></div>
        <div onClick={() => packtouch(setshirtspack,shirtspack,setshirtprice,shirtprice)}><img src={shirtspack ? bluebleach : bleach}/></div>
      </div>
      <div>
        <h2>{shirtflag && ((shirtswash) || (shirtsfold) || (shirtsiron) || (shirtspack)) ? shirtquantity+" x "+shirtprice +" = "+ (shirtquantity*shirtprice) : "__"}</h2>
      </div>
    </div>

var fortshirts=
<div className='product-data'>
<div><b><h3>{product_type[1]}</h3></b>
<h6>Lorem ipsum is a dummy text</h6></div>
<div className='quantity'><input className='quantity-input' type="text" onChange={handletshirtChange} placeholder='0'/></div>
<div className="Wash-type">
  <div onClick={() => washtouch(settshirtswash,tshirtswash,settshirtprice,tshirtprice)}><img src={tshirtswash? bluemachine : washing}/></div>
  <div onClick={() => presstouch(settshirtsiron,tshirtsiron,settshirtprice,tshirtprice)}><img src={tshirtsiron ? blueiron : ironing}/></div>
  <div onClick={() => foldtouch(settshirtsfold,tshirtsfold,settshirtprice,tshirtprice)}><img src={tshirtsfold? bluetowel : towel}/></div>
  <div onClick={() => packtouch(settshirtspack,tshirtspack,settshirtprice,tshirtprice)}><img src={tshirtspack ? bluebleach : bleach}/></div>
</div>
<div>
<h2>{tshirtflag && ((tshirtswash) || (tshirtsfold) || (tshirtsiron) || (tshirtspack)) ? tshirtquantity+" x "+tshirtprice +" = "+ (tshirtquantity*tshirtprice) : "__"}</h2>
</div>
</div>


var fortrousers=
<div className='product-data'>
<div><b><h3>{product_type[2]}</h3></b>
<h6>Lorem ipsum is a dummy text</h6></div>
<div className='quantity'><input className='quantity-input' type="text" onChange={handletrouserChange} placeholder='0'/></div>
<div className="Wash-type">
  
  <div onClick={() => washtouch(settrouserswash,trouserswash,settrouserprice,trouserprice)}><img src={trouserswash? bluemachine : washing}/></div>
  <div onClick={() => presstouch(settrousersiron,trousersiron,settrouserprice,trouserprice)}><img src={trousersiron? blueiron : ironing}/></div>
  <div onClick={() => foldtouch(settrousersfold,trousersfold,settrouserprice,trouserprice)}><img src={trousersfold? bluetowel : towel}/></div>
  <div onClick={() => packtouch(settrouserspack,trouserspack,settrouserprice,trouserprice)}><img src={trouserspack? bluebleach : bleach}/></div>
</div>
<div>
<h2>{trouserflag && ((trouserswash) || (trousersfold) || (trousersiron) || (trouserspack)) ? trouserquantity+" x "+trouserprice +" = "+ (trouserquantity*trouserprice) : "__"}</h2>
</div>
</div>


var forjeans=
<div className='product-data'>
<div><b><h3>{product_type[3]}</h3></b>
<h6>Lorem ipsum is a dummy text</h6></div>
<div className='quantity'><input className='quantity-input' onChange={handlejeansChange} type="text" placeholder='0'/></div>
<div className="Wash-type">
  <div onClick={() => washtouch(setjeanswash,jeanswash,setjeansprice,jeansprice)}><img src={jeanswash? bluemachine : washing}/></div>
  <div onClick={() => presstouch(setjeansiron,jeansiron,setjeansprice,jeansprice)}><img src={jeansiron? blueiron : ironing}/></div>
  <div onClick={() => foldtouch(setjeansfold,jeansfold,setjeansprice,jeansprice)}><img src={jeansfold ? bluetowel : towel}/></div>
  <div onClick={() => packtouch(setjeanspack,jeanspack,setjeansprice,jeansprice)}><img src={jeanspack? bluebleach : bleach}/></div>
</div>
<div>
<h2>{jeansflag && ((jeanswash) || (jeansfold) || (jeansiron) || (jeanspack)) ? jeansquantity+" x "+jeansprice +" = "+ (jeansquantity*jeansprice) : "__"}</h2>
</div>
</div>

var forboxers=
<div className='product-data'>
<div><b><h3>{product_type[4]}</h3></b>
<h6>Lorem ipsum is a dummy text</h6></div>
<div className='quantity'><input className='quantity-input' type="text" onChange={handleboxersChange} placeholder='0'/></div>
<div className="Wash-type">
  <div onClick={() => washtouch(setboxerswash,boxerswash,setboxersprice,boxersprice)}><img src={boxerswash ? bluemachine : washing}/></div>
  <div onClick={() => presstouch(setboxersiron,boxersiron,setboxersprice,boxersprice)}><img src={boxersiron? blueiron : ironing}/></div>
  <div onClick={() => foldtouch(setboxersfold,boxersfold,setboxersprice,boxersprice)}><img src={boxersfold ? bluetowel : towel}/></div>
  <div onClick={() => packtouch(setboxerspack,boxerspack,setboxersprice,boxersprice)}><img src={boxerspack ? bluebleach : bleach}/></div>
</div>
<div>
<h2>{boxersflag && ((boxerswash) || (boxersfold) || (boxersiron) || (boxerspack)) ? boxersquantity+" x "+boxersprice +" = "+ (boxersquantity*boxersprice) : "__"}</h2>
</div>
</div>


var forjoggers=
<div className='product-data'>
<div><b><h3>{product_type[5]}</h3></b>
<h6>Lorem ipsum is a dummy text</h6></div>
<div className='quantity'><input className='quantity-input' type="text" onChange={handlejoggersChange} placeholder='0'/></div>
<div className="Wash-type">
  <div onClick={() => washtouch(setjoggerswash,joggerswash,setjoggerprice,joggerprice)}><img src={joggerswash? bluemachine : washing}/></div>
  <div onClick={() => presstouch(setjoggersiron,joggersiron,setjoggerprice,joggerprice)}><img src={joggersiron ? blueiron : ironing}/></div>
  <div onClick={() => foldtouch(setjoggersfold,joggersfold,setjoggerprice,joggerprice)}><img src={joggersfold ? bluetowel : towel}/></div>
  <div onClick={() => packtouch(setjoggerspack,joggerspack,setjoggerprice,joggerprice)}><img src={joggerspack ? bluebleach : bleach}/></div>
</div>
<div>
<h2>{joggersflag && ((joggerswash) || (joggersfold) || (joggersiron) || (joggerspack)) ? joggersquantity+" x "+joggerprice +" = "+ (joggersquantity*joggerprice) : "__"}</h2>
</div>
</div>

  return (
      <>
        <Loginheader/>
        <div className='forflex'>
        <div className='orders'>
          Create Order
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
          {forshirts}
          {fortshirts}
          {forjoggers}
          {forjeans}
          {forboxers}
          {fortrousers}
        </div>
        <div className='flex-button'>
        <button className='cancel-button'>Cancel</button>
        <button className='proceed-button'>Proceed</button>
        </div>
        <Loginfooter/>
        
      </>
  );
}
