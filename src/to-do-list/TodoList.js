import reac from "react";
import cross from "./Assets/cross.png";
import not_tick from "./Assets/not_tick.png";
import tick from "./Assets/tick.png";
import './TodoList.css';

function TodoList({no,text,display,settask})
{
    function Toggle()
{
    const data =JSON.parse( localStorage.getItem("todos"));
    for(let i=0;i<data.length;i++)
    {
        if(data[i].no===no)
        {
            if(data[i].display==="")
            {
                data[i].display="line";
            }
            else{
                data[i].display="";
            }
            settask(data);
            break;
        }
    }
}
function closed(no)
{
    let data=JSON.parse(localStorage.getItem("todos"));
    data=data.filter((todo)=>todo.no!==no);
    settask(data);
}
    return(
    <div className="out">
    <div className={`circle ${display}`} onClick={Toggle}>
    {display===""?<img src={not_tick} alt="image" />:<img src={tick} alt="image" />}

    <p>{text}</p>

    </div>
 
    <div className="cross">
    <img src={cross} onClick={()=>{closed(no)}} alt="image" />
    </div>
    </div>
    );
}

export default TodoList;