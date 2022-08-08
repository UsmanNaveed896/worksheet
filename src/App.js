import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Homepage from './Components/Homepage/homepage'
import Login from'./Components/login/login'
import CheckIn from './Components/Check In/checkIn'
import Signup from './Components/Register/signup'
import '../src/App.css'
function App() {
  return (
    <div className="App">
      {/* <Navbar/>
      <Homepage/> */}
      {/* <Signup/> */}
      {/* <CheckIn/> */}
      <Login/>
    </div>
  );

}

export default App;
