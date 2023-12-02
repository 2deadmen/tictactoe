import Board from "./components/Board";
import { useState } from "react";

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
      <nav className="navbar navbar-light bg-light justify-content-between">
  <h1 className="navbar-brand"> Tic - Tac - Toe</h1>
  

  
</nav>
<button type="button" class="btn btn-primary" onClick={fetchlog} data-toggle="modal" data-target="#logsmodal">
   Game logs
</button>
      </div>
     <Board logs={logs}/>
     
    </div>
  );
}

export default App;
