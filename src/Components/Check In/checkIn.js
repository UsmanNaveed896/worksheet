import React, { useEffect, useState } from 'react';
import moment from 'moment';
import 'moment-timezone';
import '../Check In/checkin.css'
export default () => {
  const [defaultColor, setNewcolor] = useState('');
  setInterval(() => {
    document.getElementById("current-time").innerHTML = `
      ${moment().format("  h:mm:ss A ")}
      `;
  }, 1000);
  setInterval(() => {
    document.getElementById("current-day").innerHTML = `
      ${moment().format(" dddd ")}
      `;
  });
  setInterval(() => {
    document.getElementById("current-date").innerHTML = `
      ${moment().format(" MMMM Do, YYYY ")}
      `;
  });
  const toggle = (time) => {
    setNewcolor(time)
  }
  return (
    <>
      <div className="container-fluid time-in d-flex justify-content-center">
        <div className="time-button  d-flex">
          <div className="Time-btn " style={{
            backgroundColor: defaultColor === 'timeIn' ?   '#3399ff ' :'white' ,
            color:defaultColor === 'timeIn' ? 'white' : '' 
          }} onClick={()=>toggle('timeIn')}>Time In </div>
          <div className="Time-btn"  style={{
            backgroundColor: defaultColor === 'timeOut' ?   '#3399ff ' :'white' , color:defaultColor === 'timeOut' ? 'white' : ''  }} onClick={()=>toggle('timeOut')}><span>Time Out</span></div>
        </div>
        <div class="area" >
          <ul class="circles">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div >
        <div className="time" >
          <div className="circle-clock">
            <span id="current-day"></span>
            <br></br>
            <span id="current-time" style={{ "color": "black" }}></span>
            <br></br>
            <span id="current-date"></span>
          </div>
          <div className="login-id d-flex ">
          <input type="phone" class="form-control form-control-sm" placeholder="ENTER YOUR ID" name="phone" />
          <button className="confirm"> Confirm</button>                   
          </div>
        </div>
      </div>
    </>
  )
}
