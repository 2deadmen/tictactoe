import Board from "./components/Board";
import { useState } from "react";
import './app.css'

function App() {
  const [logs, setlogs] = useState([])
  const fetchlog=async()=>{
      let response;
      try {
        response = await fetch(`http://localhost:5000/user/history`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          }
        });
      } catch (error) {}
      
      const json = await response.json();
      setlogs(json)
    
  }
  return (
    <div className="container">
      <div className="navbar">
      <nav className="title  justify-content-between">
  <h1 className=" navbar-brand"> <span className="heading"><img  src="https://see.fontimg.com/api/renderfont4/zAqL/eyJyIjoiZnMiLCJoIjo4NSwidyI6MTAwMCwiZnMiOjg1LCJmZ2MiOiIjMDAwMDAwIiwiYmdjIjoiI0ZGRkZGRiIsInQiOjF9/VElDIFRBQyBUT0U/one-piece.png" alt="" /> </span></h1>
  

  
</nav>
<button type="button" class="btn" onClick={fetchlog} data-toggle="modal" data-target="#logsmodal">
<span>Game Logs</span>
  <svg viewBox="-5 -5 110 110" preserveAspectRatio="none" aria-hidden="true">
    <path d="M0,0 C0,0 100,0 100,0 C100,0 100,100 100,100 C100,100 0,100 0,100 C0,100 0,0 0,0"/>
  </svg>
</button>
      </div>
     <Board logs={logs}/>
     
    </div>
  );
}

export default App;
