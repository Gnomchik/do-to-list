import React, { useEffect } from 'react'
import style from '../css/AddTask.module.css'
import { NavLink, useNavigate , useParams } from 'react-router-dom'
import { useState } from 'react'
export default function AddEdit() {
    const [tasks, setTasks] = useState({})
    const { id } = useParams();
    const navigate = useNavigate()
    useEffect(() => {
        loadData()
    },[])

    const loadData = async () => {
        console.log(id);
        await fetch(`http://localhost:3000/api/tasks/task/search/${id}`)
        .then(res => res.json()).then(
          data => setTasks(data),
          )
        .catch(error => console.log(error))
      }
      console.log(tasks);

    const onSubmitHandler = (e) => {
      console.log(e.target.Priority.value);
          fetch("http://localhost:3000/api/tasks/task/edit", {
            method: "put",
            body: JSON.stringify({ 
                id: parseInt(id),
              name: e.target.TaskName.value,
              description: e.target.Description.value,
              dueDate: new Date(e.target.DueDate.value).toISOString(),
              priority: parseInt(e.target.Priority.value),
              tags: e.target.Tags.value,
              storageId:  tasks.storageId
            }),
            headers: {
                "Content-type": "application/json",
            }
  
        }).then(res => res.json()).then(data => console.log(data))
          navigate(`/tasks/${tasks.storageId}`)
    }
  
    return (
      <form className= {style.wrapper} onSubmit={onSubmitHandler} method='put'>
        <div className="mb-3">
              <label className="form-label">Task name</label>
              <input type="text" className="form-control" name = "TaskName" placeholder="Enter Task Name" />
          </div>
          <div className="mb-3">
              <label className="form-label">Description</label>
              <textarea className="form-control" name="Description" placeholder="Enter Description" rows="3"></textarea>
          </div>
          <div className="mb-3">
              <label className="form-label">Due to</label>
              <input type="date" className="form-control" name="DueDate" placeholder="Enter Due Date" ></input>
          </div>
          <div className="mb-3">
          <label className="form-label">Priority</label>
              <select name="Priority" className="form-control" >
                  <option value="1">High</option>
                  <option value="2">Medium</option>
                  <option value="3">Low</option>
              </select>
          </div>
          <div className="mb-3">
              <label className="form-label">Tags</label>
              <input type="text" className="form-control" name="Tags" placeholder="Enter Tags" ></input>
          </div>
          <div>
              <button className="btn btn-primary">Save</button>
              <NavLink className={style.button +" "+"btn btn-danger"} to="/">Cancel</NavLink>
          </div>
      </form>
    )
}
