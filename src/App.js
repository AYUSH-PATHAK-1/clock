import React, { useState } from 'react'
import './index.css';

function App() {
  let currentTime=new Date().toLocaleTimeString();
  const[time,setTime]=useState(currentTime);
  const changeTime=()=>{
    let newTime=new Date().toLocaleTimeString();
    setTime(newTime);
  }
  setInterval(changeTime,1000);
  return (
    <>    
    <div className="container my-5">
      <h1 className="text-light text-center">{time}</h1>
      <button className="btn btn-warning" onClick={changeTime}>Click Me</button>
    </div>
    </>
  )
}

export default App