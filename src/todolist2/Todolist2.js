import React, { useState } from "react";

const Todolist2 = () => {
  const [todoName, setTodoName] = useState("");
  const [todoBranch, setTodoBranch] = useState("");
  const [todoEmail, setTodoEmail] = useState("");
  const [todoSub, setTodoSub] = useState([]);

  function handleName(s) {
    setTodoName(s.target.value);
  }
  function handleBranch(r) {
    setTodoBranch(r.target.value);
  }
  function handleEmail(q) {
    setTodoEmail(q.target.value);
  }
  function handleClick() {
    setTodoSub([
      ...todoSub,
      { todoName: todoName, todoBranch: todoBranch, todoEmail: todoEmail },
    ]);
    setTodoName("");
    setTodoBranch("");
    setTodoEmail("");
  }

  return (
    <div>
      <input
        onChange={(s) => {
          handleName(s);
        }}
        type="text"
        placeholder="name"
        value={todoName}
      />
      <input
        onChange={(r) => {
          handleBranch(r);
        }}
        type="text"
        placeholder="branch"
        value={todoBranch}
      />
      <input
        onChange={(q) => {
          handleEmail(q);
        }}
        type="text"
        placeholder="email"
        value={todoEmail}
      />
      <button onClick={handleClick}>Submit</button>
      {todoSub.map((val) => {
        return (
          <>
            <div style={{display:"flex"}}>
              <p style={{padding:"10px"}}>{val.todoName}</p>
              <p style={{padding:"10px"}}>{val.todoBranch}</p>
              <p style={{padding:"10px"}}>{val.todoEmail}</p>
              <button onClick={handleUpdate}>Update</button>
              <button onClick={handleDelete}>Delete</button>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default Todolist2;
