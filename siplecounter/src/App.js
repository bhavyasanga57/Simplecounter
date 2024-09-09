import logo from './logo.svg';
import React, { useState } from 'react';

function App() {
  const containerstyle={
    display:'flex',
    alignItems:'center',
justifyContent:'center'
  }
  const buttonstyle={
    height:'50px',
    width:'50px',
    color:'black',
    margin:'0 7px'
  }
  const[increment,setincrement]=useState(0);
  const handleincrement=()=>{
    setincrement(increment+1);
  }
  const handldecrement=()=>{
    setincrement(increment-1);
  }
  return (
    <div className="App">
      <header className="App-header">
      <div style={containerstyle}>
      <h1>Lets Count the Counter: {increment}</h1><br/>
      
      </div>
       <div style={containerstyle}>
     
        <button style={buttonstyle} onClick={handleincrement}>+</button>
        <button style={buttonstyle}onClick={handldecrement}>-</button>
       </div>
      </header>
    </div>
  );
}

export default App;
