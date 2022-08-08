import React  from 'react';
import Moment from 'react-moment';
import 'moment-timezone';
import '../Check In/checkin.css'
export default()=>{
    
    return(
        <>
       <div className="time"> <Moment interval={10000} format="HH:mm:ss YYYY/MMMM/DD"  ></Moment></div>
        </>
    )
}
