import React,{ useState,useEffect } from 'react';
import "./Pastorders.css"
import Loginheader from "./components/Loginheader"
import Loginfooter from './components/Loginfooter';
import Modal from './components/Modal';
import Popup from './components/Popup';

export default function Pastorders() {
  // var result
  var [data1,setData1]=useState(0)
  var [status, setStatus] = useState(true);
  async function Data(){
    try{
      const res = await fetch("http://localhost:5000/orders",{mode:"cors"});
      var data = await res.json();
      if (data.message.length === 0) {
        setStatus(false);
      }
      var result = data.message
      setData1(result)
    }catch(e){
      console.log(e)
    }
  }
  useEffect(() => {
    Data();
  }, []);

  // const [users, setusers] = useState(null);

  // + adding the use
  // useEffect(() => {
  //   getData();

  //   // we will use async/await to fetch this data
  //   async function getData() {
  //     const response = await fetch("http://localhost:5000/orders",{mode:"cors"});
  //     const data = await response.json();
  //     // store the data into our user variable
  //     setData(data.message);
  //   }
  // }, []);





  // window.location.reload();
  console.log(data1)
  const [modalOpen, setModalOpen] = useState(false);
  const [popup,setPopup] = useState(false)

  return (
      <div className='Pastorders'>
      {/* start coding here */}
      <Loginheader/>
      <div className='pastordersbody'>
        <div className='tooglebar'>
          <div className='homeicon'>
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22.002" viewBox="0 0 22 22.002">
            <path id="home-run_1_" data-name="home-run (1)" d="M21.409,9.57l0,0L12.432.594a2.025,2.025,0,0,0-2.865,0L.6,9.564l-.009.009a2.025,2.025,0,0,0,1.348,3.451q.031,0,.062,0h.358v6.6A2.373,2.373,0,0,0,4.727,22H8.238a.645.645,0,0,0,.645-.645V16.179A1.083,1.083,0,0,1,9.964,15.1h2.071a1.083,1.083,0,0,1,1.082,1.082v5.178a.645.645,0,0,0,.645.645h3.511a2.373,2.373,0,0,0,2.371-2.37v-6.6h.332A2.026,2.026,0,0,0,21.409,9.57Zm0,0" transform="translate(0.001)" fill="#fff"/>
          </svg>
          </div>
          <div className='plusicon'>
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22">
            <path id="more" d="M11,0A11,11,0,1,0,22,11,11.012,11.012,0,0,0,11,0Zm4.813,11.917h-3.9v3.9a.917.917,0,1,1-1.833,0v-3.9h-3.9a.917.917,0,1,1,0-1.833h3.9v-3.9a.917.917,0,1,1,1.833,0v3.9h3.9a.917.917,0,1,1,0,1.833Zm0,0" fill="#fff"/>
          </svg>
          </div>
          <div className='listicon'>
          <svg xmlns="http://www.w3.org/2000/svg" width="25.283" height="18.143" viewBox="0 0 25.283 18.143">
            <g id="list" transform="translate(-1.093 -78.931)">
              <g id="Group_5192" data-name="Group 5192" transform="translate(6.377 86.574)">
                <g id="Group_5191" data-name="Group 5191" transform="translate(0 0)">
                  <path id="Path_2413" data-name="Path 2413" d="M143.23,236H125.294a1.26,1.26,0,0,0,0,2.478H143.23a1.26,1.26,0,0,0,0-2.478Z" transform="translate(-124.262 -236)" fill="#5861ae"/>
                </g>
              </g>
              <g id="Group_5194" data-name="Group 5194" transform="translate(6.377 78.931)">
                <g id="Group_5193" data-name="Group 5193">
                  <path id="Path_2414" data-name="Path 2414" d="M143.23,86H125.294a1.248,1.248,0,0,0,0,2.458H143.23a1.248,1.248,0,0,0,0-2.458Z" transform="translate(-124.262 -86)" fill="#5861ae"/>
                </g>
              </g>
              <g id="Group_5196" data-name="Group 5196" transform="translate(6.377 94.237)">
                <g id="Group_5195" data-name="Group 5195" transform="translate(0 0)">
                  <path id="Path_2415" data-name="Path 2415" d="M143.23,386H125.294a1.261,1.261,0,0,0,0,2.479H143.23a1.261,1.261,0,0,0,0-2.479Z" transform="translate(-124.262 -386)" fill="#5861ae"/>
                </g>
              </g>
              <g id="Group_5198" data-name="Group 5198" transform="translate(1.093 79.074)">
                <g id="Group_5197" data-name="Group 5197">
                  <circle id="Ellipse_635" data-name="Ellipse 635" cx="1.5" cy="1.5" r="1.5" transform="translate(0 0)" fill="#5861ae"/>
                </g>
              </g>
              <g id="Group_5200" data-name="Group 5200" transform="translate(1.093 86.074)">
                <g id="Group_5199" data-name="Group 5199">
                  <circle id="Ellipse_636" data-name="Ellipse 636" cx="1.5" cy="1.5" r="1.5" transform="translate(0 0)" fill="#5861ae"/>
                </g>
              </g>
              <g id="Group_5202" data-name="Group 5202" transform="translate(1.093 94.074)">
                <g id="Group_5201" data-name="Group 5201">
                  <circle id="Ellipse_637" data-name="Ellipse 637" cx="1.5" cy="1.5" r="1.5" transform="translate(0 0)" fill="#5861ae"/>
                </g>
              </g>
            </g>
          </svg>

          </div>


        </div>
        <div className='pastorderbox'>
            <div className='ordersandbutton'>
                    <div className='ordersheading'>
                      <p>Orders | 0</p>
                    </div>
                    <div className='createbutton'>
                        <button>Create</button>
                    </div>
                    <div className='searchbar'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="14.051" height="14.553" viewBox="0 0 14.051 14.553">
                      <path id="search" d="M14.821,13.256l-3.464-3.6a5.874,5.874,0,1,0-4.5,2.1,5.813,5.813,0,0,0,3.366-1.063l3.49,3.63a.766.766,0,1,0,1.1-1.063ZM6.86,1.533A4.343,4.343,0,1,1,2.517,5.876,4.348,4.348,0,0,1,6.86,1.533Z" transform="translate(-0.984)" fill="#a0a0a0"/>
                      </svg>
                    </div>
                    <div className='searchbox'>
                      <input type="text" />
                    </div>
              </div>
              <div className='list_of_past_orders'>
              <table> 
              <tr>
                <th>Order Id</th>
                <th>Ordered Date & Time</th>
                <th>Store Location</th>
                <th>City</th>
                <th>Store Phone</th>
                <th>Total Items</th>
                <th>Price</th>
                <th>Status</th>
                <th className='status'></th>
                <th>View</th>
              </tr>
              {status &&
                data1.map((item,key)=>{                  
                  return(
                    <tr key = {item._id} onClick={() => {
                      setModalOpen(true);
                    }}>
                      {console.log(key)}
                      <td>{item._id}</td>
                      <td>{item.date}</td>
                      <td>{item.Storelocation}</td>
                      <td>{item.city}</td>
                      <td>{item.storephone}</td>
                      <td>{item.totalitems}</td>
                      <td>{item.productlist[0].price}</td>
                      <td>{item.status}</td>
                      <td></td>
                      <td><svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M12.01 20c-5.065 0-9.586-4.211-12.01-8.424 2.418-4.103 6.943-7.576 12.01-7.576 5.135 0 9.635 3.453 11.999 7.564-2.241 4.43-6.726 8.436-11.999 8.436zm-10.842-8.416c.843 1.331 5.018 7.416 10.842 7.416 6.305 0 10.112-6.103 10.851-7.405-.772-1.198-4.606-6.595-10.851-6.595-6.116 0-10.025 5.355-10.842 6.584zm10.832-4.584c2.76 0 5 2.24 5 5s-2.24 5-5 5-5-2.24-5-5 2.24-5 5-5zm0 1c2.208 0 4 1.792 4 4s-1.792 4-4 4-4-1.792-4-4 1.792-4 4-4z"/></svg></td>
                    </tr>
                  );
                })
              }
              </table>
              </div>
          </div>
      </div>
      <Loginfooter/>
      <div> 
      {modalOpen && <Modal functionname={setModalOpen} statename={modalOpen} data1={data1} popupfunction={setPopup} popupstatename={popup}/>}
      {popup && <Popup popupfunction={setPopup} popupstatename={popup}/>}
      </div>
    </div>
  );
}
