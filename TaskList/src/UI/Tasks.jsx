import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import style from './css/Task.module.css'

export default function Tasks({ id, removeItem, name, description }) {
  const [flag, setFlag] = useState(true)
  const Id = id;
  const deleteHandler = () => {
    console.log(Id);
    fetch("http://localhost:3000/api/tasks/task/delete", {
          method: "Delete",
          body: JSON.stringify({ 
            id: Id
          }),
          headers: {
              "Content-type": "application/json",
          }
      }).then(res => res.json()).then(data => console.log(data))
  }
  return (
    <div className={style.wrapper}>
      <div className={style.InfoList + " " + (flag ? "bg-white" : "bg-danger")}>
        <h2 style={{ width: "70vw" ,background: "transparent" ,borderBottom: "1px solid black", paddingBottom: "10px", borderRight:  "1px solid black", marginRight: "10px" }}>{name}</h2>
        <p style={{  width: "70vw" ,background: "transparent" ,paddingBottom: "10px", borderRight:  "1px solid black", marginRight: "10px" }}>{description}</p>
      </div>
      <div className={style.buttonList}>
        <button className="btn bg-dark text-white" onClick={() =>setFlag(!flag)}>Cross</button>
        <NavLink className="btn" style={{background: "lightgreen", color: "white"}} to={`../edit/${id}`}>edit</NavLink>
        <button className="btn bg-danger text-white" onClick={deleteHandler}>Delete</button>
      </div>
    </div>
  )
}
