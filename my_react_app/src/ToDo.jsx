import React, {useState} from 'react'

function ToDo(){

    const [Tasks, setTasks] = useState([]);
    function AddTask(){
        const newTask= document.getElementById("task").value;
        document.getElementById("task").value="";  
        if(newTask.trim()!==""){
            setTasks([...Tasks, newTask]);
        }
    }
    function RemoveTask(index){
        setTasks(Tasks.filter((_, i)=>i!==index));
    }
    function Up(index){
        if(index>0){
            const updatedTasks=[...Tasks];
            [updatedTasks[index],updatedTasks[index-1]]=[updatedTasks[index-1],updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }
    function Down(index){
        if(index< Tasks.length-1){
            const updatedTasks=[...Tasks];
            [updatedTasks[index],updatedTasks[index+1]]=[updatedTasks[index+1],updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }
    return(
        <div className="Tname">
            <h2>To-Do List</h2>
            <input type="text" placeholder="Enter Task" id="task"></input><button onClick={AddTask}>Add Task</button>
            <ul>
                {Tasks.map((Task,index)=> <li>{Task}<button key={index} onClick={()=>RemoveTask(index)}>Delete</button><button onClick={()=>Up(index)}>👆🏻</button><button onClick={()=>Down(index)}>👇🏻</button></li>)}
            </ul>
            
        </div>
    );
}

export default  ToDo