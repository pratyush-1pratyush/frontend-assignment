// src/App.js
import React from 'react';
import LeaderBoard from "./Components/LeaderBoard"

function App() {

  const divStyle = {
    backgroundColor:"black",
    height:"100vh"
  }
  const headingStyle = {
    textAlign:"center",
    color:"white",
    marginTop:"0",
    paddingTop:"10px",
  }
  return (
   <div style={divStyle}>
    <h1 style={headingStyle}>Streamer's LeaderBoard</h1>
     <LeaderBoard />
   </div>
  );
}
export default App;

