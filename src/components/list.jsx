import React, { useState } from 'react';
import './list.css'
const List = () => {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const AddTask=()=>{
    if(task.trim()!==''){
      setTasks([...tasks,{text:task,completed:false}])
    }
  }
  const deleteTask=(index)=>{
    const updatedTask =[...tasks]
    updatedTask.splice(index,1)
    setTasks(updatedTask)

  }
  const Toggler=(index)=>{
    const getToggler=[...tasks]
    getToggler[index].completed=!getToggler[index].completed
    setTasks(getToggler)
  }
  return (
    <>
      <div className="container-fluid">
        <h1 className="text-info text-center">To Do List</h1>
        <div className="d-flex  justify-content-center mb-3">
          <input
            type="text"
            value={task}
            className="form-control w-50 text-center border-info"
            onChange={(e)=>setTask(e.target.value)}
            placeholder="Enter the TODO"
           
          />
          <button className="btn btn-danger mx-1 py-1" onClick={AddTask} >
            Add
          </button>
        </div>
        <div className='d-flex  justify-content-center mb-3' >
        <ul className='w-75 list-group' >
            {
              tasks.map((value,index)=>(
                <li key={index} className={`list-group-item d-flex justify-content-between align-items-center`} >
                  <span className={` fw-bold fs-3 ${value.completed ? 'text-success':'text-danger' } `} >{value.text}</span>
                <div className='d-flex align-items-center' >
                  <input type="checkbox" className="custom-checkbox " onClick={()=>Toggler(index)}  name="" id="" />
                <button className='btn btn-danger mx-2 ' onClick={()=>deleteTask(index)}  >X</button>
                </div>
                </li>
              ))
            }
          </ul>
        </div>
        
      </div>
    </>
  );
};

export default List;
