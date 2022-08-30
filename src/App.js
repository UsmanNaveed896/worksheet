import React, { useState } from 'react'
import { Routes, Route ,useLocation} from "react-router-dom";
import Navbar from './Components/Navbar/Navbar'
import Homepage from './Components/Homepage/homepage'
import Login from'./Components/login/login'
import CheckIn from './Components/Check In/checkIn'
import Addroles from './Components/user-roles/userRoles'
import Userdata from './Components/user-data/userdata'
import Userreport from './Components/user-reports/userreport'
import Updateaccount from './Components/Popups/updateaccount/updateaccount'
import Todolist from './Components/to-do-list/todo-list'
import Changepass from './Components/Popups/changePassword/changepass'
import Attendance from './Components/attendances/attendance'
import AttendanceModal from './Components/Popups/Attendance-modal/Attendance-modal';
import Newuser from './Components/Popups/newusermodal/newuser'
import Newrole from './Components/Popups/newRole/newrole';
import Addjob from './Components/Add-job-title/addjob'
import Employees from './Components/Employees/Employee'
import Adddepartment from './Components/add-daprtment/adddepartment';
import Addcompany from './Components/addcompany/adddcompany'
import UserAuth from './Components/UserAuth'
import '../src/App.css'
function App() {
const location=useLocation();
  return (
    <>
    {/* <Login/> */}
    {/* <Todolist/> */}
    
   
    {(location.pathname !== "/login" && location.pathname !== "/clock/") && <Navbar/>} 
      <Routes>
      < Route  exact path='/dashboard'  element={<Homepage/>}/>
        <Route path='/clock/'  element={<CheckIn/>}/>
        <Route path='/login/'  element={<Login/>}/>
        <Route path='/employees/' element={<Employees/>}/>
        <Route path='/addroles/'  element={<Addroles/>}/>
        <Route path='/userdata/'  element={<Userdata/>}/>
        <Route path='/userreport/'  element={<Userreport/>}/>
        <Route path='/updateaccount/'  element={<Updateaccount/>}/>
        <Route path='/changepassword/'  element={<Changepass/>}/>
        <Route path='/attendance/'  element={<Attendance/>}/>
        <Route path='/addjob/'  element={<Addjob/>}/>
        <Route path='/adddepartment/'  element={<Adddepartment/>}/>
        <Route path='/adddcompany/'  element={<Addcompany/>}/>
      </Routes>
   
    
    </>
  );

}

export default App;
