import React, { useState, useRef, useEffect } from "react";
import "./board.css";

const Board = (props) => {
  useEffect(() => {
    
    namebuttonRef.current.click();
    
  }, []);
  const [count, setcount] = useState(0);
  useEffect(() => {
    
    checkwinner();
    
  }, [count]);
  
 


  //button refs
  const namebuttonRef = useRef(null);
  const winnerbuttonRef = useRef(null);

  //   state vars
  const [player1, setplayer1] = useState(null);
  const [player2, setplayer2] = useState(null);
  const [a1, seta1] = useState(null);
  const [a2, seta2] = useState(null);
  const [a3, seta3] = useState(null);
  const [b1, setb1] = useState(null);
  const [b2, setb2] = useState(null);
  const [b3, setb3] = useState(null);
  const [c1, setc1] = useState(null);
  const [c2, setc2] = useState(null);
  const [c3, setc3] = useState(null);
  const [cur_var, setcur_var] = useState("X");

  const [winner, setwinner] = useState(null);
  // checking the winner
  
  const checkwinner = () => {
   
    if (
      (a1 === "X" && a2 === "X" && a3 === "X") ||
      (a1 === "O" && a2 === "O" && a3 === "O") ||
      (a1 === "X" && b1 === "X" && c1 === "X") ||
      (a1 === "O" && b1 === "O" && c1 === "O") ||
      (c1 === "X" && c2 === "X" && c3 === "X") ||
      (c1 === "O" && c2 === "O" && c3 === "O") ||
      (a3 === "X" && b3 === "X" && c3 === "X") ||
      (a3 === "O" && b3 === "O" && c3 === "O") ||
      (a2 === "X" && b2 === "X" && c2 === "X") ||
      (a2 === "O" && b2 === "O" && c2 === "O") ||
      (a1 === "X" && b2 === "X" && c3 === "X") ||
      (a1 === "O" && b2 === "O" && c3 === "O") ||
      (c1 === "X" && b2 === "X" && a3 === "X") ||
      (c1 === "O" && b2 === "O" && a3 === "O") ||
      (b1 === "X" && b2 === "X" && b3 === "X") ||
      (b1 === "O" && b2 === "O" && b3 === "O")
    ) {
      if (count % 2 === 0) {
        setwinner(player2);
      } else {
        setwinner(player1);
      }

      save(winner);
      
      
    
      winnerbuttonRef.current.click();
      // winnerbuttonRef.current.click();
      return true;
    } else {
      return false;
    }
  };


  //sending it to server
  const save = async (winner) => {
    let response;
    try {
      response = await fetch(`http://localhost:5000/user/storeresult`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          status: winner,
          player1: player1,
          player2: player2,
        }),
      });
    } catch (error) {}

    const json = await response.json();
    console.log(json);
  };
  //restart game
  const restart = () => {
    window.location.reload();
    
  };
  //save names
  const savename = () => {
    setplayer1(document.getElementById("player1").value);
    setplayer2(document.getElementById("player2").value);
  };

  //set values to squares
  const setvar = (pos_var) => {
    if ( !checkwinner() && pos_var === null && count < 9) {
      
      let temp = count;
      
      setcount(temp + 1);
      
      if (temp % 2 === 0) {
        setcur_var("O");
       
      } else {
        setcur_var("X");
     
      }
     
      
      return true
      
   
    } else {
      return false;
    }
  };

  return (
    // game board
    <div>
      <div className="d-flex justify-content-center">
        {" "}
        <h4 className="m-2">
          <span style={{ color: "yellow" }}>{player1}</span> v/s{" "}
          <span style={{ color: "green" }}>{player2}</span>
        </h4>
      </div>
      <h5 className="m-3">
        {" "}
        Your turn : {count % 2 === 0 ? player1 : player2}
      </h5>
      <div className=" d-flex justify-content-center">
        <div className="board">
          <div style={{ "margin-left": "4vw" }} className="d-flex flex-column">
            <div
              className="d-flex justify-content-center square"
              
              onClick={ () => {
                if (setvar(a1)) {
                  seta1(cur_var)
                  
                   
                }
              }}
            >
              {a1}
            </div>
            <div
              className="d-flex justify-content-center square"
              onClick={() => {
                if (setvar(a2)) {
                  seta2(cur_var);
                 
                }
              }}
            >
              {a2}
            </div>
            <div
              className="d-flex justify-content-center square"
              onClick={() => {
                if (setvar(a3)) {
                  seta3(cur_var);
                }
              }}
            >
              {a3}
            </div>
          </div>
          <div className="d-flex flex-column">
            <div
              className="d-flex justify-content-center square"
              onClick={() => {
                if (setvar(b1)) {
                  setb1(cur_var);
                }
              }}
            >
              {b1}
            </div>
            <div
              className="d-flex justify-content-center square"
              onClick={() => {
                if (setvar(b2)) {
                  setb2(cur_var);
                }
              }}
            >
              {b2}
            </div>
            <div
              className="d-flex justify-content-center square"
              onClick={() => {
                if (setvar(b3)) {
                  setb3(cur_var);
                }
              }}
            >
              {b3}
            </div>
          </div>
          <div className="d-flex flex-column">
            <div
              className="d-flex justify-content-center square"
              onClick={() => {
                if (setvar(c1)) {
                  setc1(cur_var);
                }
              }}
            >
              {c1}
            </div>

            <div
              className="d-flex justify-content-center square"
              onClick={() => {
                if (setvar(c2)) {
                  setc2(cur_var);
                }
              }}
            >
              {c2}
            </div>
            <div
              className="d-flex justify-content-center square"
              onClick={() => {
                if (setvar(c3)) {
                  setc3(cur_var);
                }
              }}
            >
              {c3}
            </div>
          </div>
        </div>

        {/* winner display modal */}
        <button
          id="winnerbutton"
          type="button"
          ref={winnerbuttonRef}
          className="btn btn-primary invisible"
          data-toggle="modal"
          data-target="#winnermodal"
        ></button>
        <div
          className="modal fade"
          id="winnermodal"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalCenterTitle"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title " id="exampleModalLongTitle">
                  The WINNER is
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body d-flex justify-content-center">
                <h3>{winner}</h3>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  <span>Close</span>
                  <svg
                    viewBox="-5 -5 110 110"
                    preserveAspectRatio="none"
                    aria-hidden="true"
                  >
                    <path d="M0,0 C0,0 100,0 100,0 C100,0 100,100 100,100 C100,100 0,100 0,100 C0,100 0,0 0,0" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* name input modal */}

        <button
          type="button"
          ref={namebuttonRef}
          className="btn btn-primary invisible"
          data-toggle="modal"
          data-target="#namemodal"
        ></button>
        <div
          class="modal fade"
          id="namemodal"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalCenterTitle"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLongTitle">
                  Let's Go.....
                </h5>
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <form action="">
                <div class="modal-body">
                  <label className="p-2" htmlFor="">
                    Enter the name of player-1
                  </label>
                  <input type="text" name="player1" required id="player1" />
                  <label className="p-2" htmlFor="">
                    Enter the name of player-2
                  </label>
                  <input type="text" name="player2" required id="player2" />
                </div>
                <div class="modal-footer">
                  <button
                    type="submit"
                    onClick={savename}
                    data-dismiss="modal"
                    class="btn btn-primary "
                  >
                    <span>Continue</span>
                    <svg
                      viewBox="-5 -5 110 110"
                      preserveAspectRatio="none"
                      aria-hidden="true"
                    >
                      <path d="M0,0 C0,0 100,0 100,0 C100,0 100,100 100,100 C100,100 0,100 0,100 C0,100 0,0 0,0" />
                    </svg>{" "}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* logs modal */}

      <div
        className="modal fade"
        id="logsmodal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLongTitle">
                Game Logs
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body d-flex justify-content-center">
              <table>
                <tr>
                  <td>player - 1</td>
                  <td>player - 2</td>
                  <td>winner</td>
                </tr>
                {props.logs.map((ele) => {
                  return (
                    <tr key={ele.status}>
                      <td className="names">{ele.player1}</td>
                      <td className="names">{ele.player2}</td>
                      <td className="winner">{ele.status}</td>
                    </tr>
                  );
                })}
              </table>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                <span>close</span>
                <svg
                  viewBox="-5 -5 110 110"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <path d="M0,0 C0,0 100,0 100,0 C100,0 100,100 100,100 C100,100 0,100 0,100 C0,100 0,0 0,0" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* restart button */}
      <div className="d-flex justify-content-center">
        {" "}
        <button
          type="button"
          onClick={restart}
          style={{ "margin-top": "2vh", "margin-left": "5px" }}
          className="btn  "
        >
          <span>Restart</span>
          <svg
            viewBox="-5 -5 110 110"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path d="M0,0 C0,0 100,0 100,0 C100,0 100,100 100,100 C100,100 0,100 0,100 C0,100 0,0 0,0" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Board;
