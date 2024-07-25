import react from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";
import TodoList from "./TodoList";
import './To-do.css';
let count=0;
function To_do(){
    let inputref =useRef(null);
    const [task,setask] =useState([]);
    function add()
    {
        const n={
            no:count++,
            text:inputref.current.value,
            display:"",
        }
        setask((previous)=>[...previous,n]);
        inputref.current.value="";
       
    }
    useEffect(()=>{
        setTimeout(()=>{
            console.log(task); 
            localStorage.setItem("todos",JSON.stringify(task));
            localStorage.setItem("count",count);
        },100)
     
    },[task])

    useEffect(()=>{
        setask(JSON.parse(localStorage.getItem("todos")));
        count=localStorage.getItem("count");

    },[])
    return(
        <div className="outer">
            <h3>To-do List</h3>
            <div className="head">
                <input className="text" type="text" placeholder="Enter your text" ref={inputref} />
                <input className="but" type="Add" onClick={()=>add()} value="Submit" />
            </div>
            <div className="textarea">
            <ul>
                 {task.map((t, index) => {
                return <TodoList no={t.no} settask={setask} text={t.text} display={t.display} />
})}
            </ul>
            </div>
        </div>
    );
}

export default To_do;