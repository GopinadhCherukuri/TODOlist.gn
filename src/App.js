import React, { useEffect, useState } from "react";
import axios from 'axios';
import Todo from "./Todolist/Todo";
import Todolist2 from "./todolist2/Todolist2";

function App() {
 return(
    <div>
        <Todo/>
        {/* <Todolist2/> */}
    </div>
 )   
}
export default App;