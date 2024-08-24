import React from 'react'
import style from '../css/AddTask.module.css'
import { NavLink, useNavigate, useParams } from 'react-router-dom'

export default function Add() {
const { id } = useParams();
const navigate = useNavigate()
  const onSubmitHandler = (e) => {
    console.log(e.target.Priority.value);
        fetch("http://localhost:3000/api/tasks/task/add", {
          method: "put",
          body: JSON.stringify({ 
            name: e.target.TaskName.value,
            description: e.target.Description.value,
            dueDate: new Date(e.target.DueDate.value).toISOString(),
            priority: parseInt(e.target.Priority.value),
            tags: e.target.Tags.value,
            storageId:  parseInt(id)
          }),
          headers: {
              "Content-type": "application/json",
          }

      }).then(res => res.json()).then(data => console.log(data))
        navigate(`/tasks/${id}`)
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
            <input type="date" className="form-control" name="DueDate" placeholder="Enter Due Date" />
        </div>
        <div className="mb-3">
        <label className="form-label">Priority</label>
            <select name="Priority" className="form-control">
                <option value="1">High</option>
                <option value="2">Medium</option>
                <option value="3">Low</option>
            </select>
        </div>
        <div className="mb-3">
            <label className="form-label">Tags</label>
            <input type="text" className="form-control" name="Tags" placeholder="Enter Tags" />
        </div>
        <div>
            <button className="btn btn-primary">Save</button>
            <NavLink className={style.button +" "+"btn btn-danger"} to="/">Cancel</NavLink>
        </div>
    </form>
  )
}
