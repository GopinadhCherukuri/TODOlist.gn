import React from "react";
import "./index1.css";

import { useState } from "react";

function App1() {
  const [task, setTask] = useState("");
  const [dueDate, setDuedate] = useState("");
  const [priority, setPriority] = useState("High");
  const [todayList, setTodayList] = useState([]);
  const [futureList, setFutureList] = useState([]);
  const [completedList, setCompletedList] = useState([]);

  function handleUserInput(e) {
    const value = e.target.value;

    setTask(value);
  }

  function handleDate(e) {
    const value = e.target.value;
    setDuedate(value);
  }

  function handlePriority(e) {
    const value = e.target.value;
    setPriority(value);
  }
  function handleClick(e) {
    console.log("Add button clicked;");
    const newTaskObj = { id:todayList.length+1,task, dueDate, priority };

    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const currentDay = date.getDate().toString();
    console.log(typeof currentDay);
    const date1 = currentDay.padStart(2, 0);
    const dateString = year + "-" + month + "-" + date1;
    if (dueDate === dateString) {
      setTodayList([...todayList, newTaskObj]);
    } else {
      setFutureList([...futureList, newTaskObj]);
    }
  }
  function handleCompleteToday(index) {
    const newTodayList = [...todayList];
    const removedElement = newTodayList.splice(index, 1);
    console.log(removedElement);

    setCompletedList([...completedList, ...removedElement]);
    setTodayList([...newTodayList]);
  }
  
  function DeleteTodo(id){
    let copyTodos = [...todayList]
    let filterTodos = copyTodos.filter((todo)=>todo.id!=id)
    setTodayList(filterTodos)
  }
  console.log(todayList,'this is todoList Data')
  return (
    <>
      <div className="bg-container">
        <p>
          {task} {dueDate}
        </p>
        <h1>Todo List</h1>
        <div className="container">
          <input
            onChange={handleUserInput}
            type="text"
            className="user-input"
          />
          <input onChange={handleDate} type="date" className="todo-date" />
          <select value={priority} onChange={handlePriority} className="option">
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
          <button onClick={handleClick} className="add">
            Add
          </button>
        </div>
        <div className="today-list">
          <h2>Today's TodoList</h2>
          <ul>
            {todayList.map((obj, index) => (
              <>
                <li>{obj.task}</li>
                <button onClick={() => handleCompleteToday(index)}>
                  Complete
                </button>
                <button onClick={()=>DeleteTodo(obj.id)}>Delete</button>
              </>
            ))}
          </ul>
        </div>
        <div className="future-list">
          <h2>Future TodoList </h2>
          <ul>
            {futureList.map((obj) => (
              <li>{obj.task}</li>
            ))}
          </ul>
        </div>
        <div className="comp-list">
          <h2>Completed TodoList</h2>
          {
            <ul>
              {completedList.map((obj) => (
                <li>{obj.task}</li>
              ))}
            </ul>
          }
        </div>
      </div>
    </>
  );
}
export default App1;
