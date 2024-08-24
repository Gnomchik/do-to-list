import React from 'react'
import style from '../css/AddTask.module.css'
import { NavLink ,useNavigate} from 'react-router-dom'
export default function CreateStorage() {
  const navigate = useNavigate()
  const onSubmitHandler = (e) => {
        fetch("http://localhost:3000/api/tasks/storages/add", {
          method: "put",
          body: JSON.stringify({ 
            name: e.target.TaskName.value,
            description: e.target.Description.value,
            durationId: parseInt(e.target.duration.value)
          }),
          headers: {
              "Content-type": "application/json",
          }

      }).then(res => res.json()).then(data => console.log(data))
        navigate("/")
  }
  return (
    <form className= {style.wrapper} onSubmit={onSubmitHandler} method='put'>
      <div className="mb-3">
            <label className="form-label">Task Storage Name</label>
            <input type="text" className="form-control" name = "TaskName" placeholder="Enter Task Name" />
        </div>
        <div className="mb-3">
            <label className="form-label">Description</label>
            <textarea className="form-control" name="Description" placeholder="Enter Description" rows="3" maxLength={100}></textarea>
        </div>
        <div className="mb-3">
            <label className="form-label">Description</label>
            <select name="duration" className="form-control">
                <option value="1">day</option>
                <option value="2">week</option>
                <option value="3">month</option>
            </select>
        </div>
        <div>
            <button className="btn btn-primary">Save</button>
            <NavLink className={style.button +" "+"btn btn-danger"} to="/">Cancel</NavLink>
        </div>
    </form>
  )
}
