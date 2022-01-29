import React from 'react';
import "./Popup.css"

export default function Popup(props) {
    function popupopen(){
        props.popupfunction(false)
    }
  return (
      <>
        <div className='popup'>
            <div className='popupheading'>
            <div className='Alert'><p><b> Alert</b></p></div>
            <div onClick={popupopen} className='XX'><p><b> X</b></p></div>
            </div>
            <div className='popupbody'>
                <p>Are you sure want to cancel the</p>
                <p>order No: OR1213</p>
                <button onClick={popupopen} className='proceed'>Proceed</button>
            </div>
        </div>
      </>
  );
}
