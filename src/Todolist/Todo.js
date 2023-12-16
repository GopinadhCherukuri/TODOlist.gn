import React, { useState } from "react";
import "./todo.css"

function Todo() {
  const [todoapp, setTodoapp] = useState("");
  const [todoapplist, setTodoapplist] = useState([]);
  const [checkList, setCheckList] = useState(false);

  // To get the name from input field
  function handleInput(s) {
    // const name = s.target.value;
    setTodoapp(s.target.value);
  }

  function handleChange() {
    setTodoapplist([...todoapplist, todoapp]);
    setTodoapp("");

    console.log(todoapplist);
  }
  function handleClick(ind) {
    if (checkList === true) {
      let arr = todoapplist.filter((val, index) => {
        return index !== ind;
      });
      setTodoapplist(arr);
    } else {
      setTodoapplist(todoapplist);
    }
  }
  function handleCheck() {
    setCheckList(true);
  }

  return (
    <div>
      <div className="bg-color">
        <h2 style={{fontSize:"30px"}}>ToDolist-APP</h2>
        <input style={{height:"30px", width:"200px", margin:"15px" }} placeholder="Enter To Do Name"
          onChange={(s) => {
            handleInput(s);
          }}
          type="text"
          value={todoapp}
        />
        <button style={{height:"35px", width:"100px", borderRadius:"10px"}} onClick={handleChange}>Submit</button>
        <br />
      </div>

      {todoapplist.map((val, ind) => {
        return (
          <>
            <div style={{ display: "flex", justifyContent:"center", backgroundColor:"yellow" ,padding:"15px"}}>
              <input style={{marginRight:"20px"}} onClick={handleCheck} type="Checkbox" value={checkList} />
              <p style={{marginRight:"20px", fontSize:"25px", fontWeight:"bold",}}>{val}</p>
              <button style={{height:"35px", width:"100px", borderRadius:"10px",marginTop:"25px", backgroundColor:"red"}}
                onClick={() => {
                  handleClick(ind);
                }}
              >
                Delete
              </button>
            </div>
          </>
        );
      })}
    </div>
  );
}
export default Todo;
