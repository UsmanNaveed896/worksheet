import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Homepage from './Components/Homepage/homepage'
import Login from'./Components/login/login'
import '../src/App.css'
function App() {
  return (
    <div className="App">
      {/* <Navbar/>
      <Homepage/> */}
      <Login/>
    </div>
  );
}

export default App;
