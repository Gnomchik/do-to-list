import React from 'react'
import style from './css/TaskCard.module.css'
import { NavLink } from 'react-router-dom'

export default function TaskCard({ id, name, description, duration, removeItem }) {
  return (
    <div className={style.Card}>
      <div>
        <h2 style={{ textAlign: "center" }}>{name}</h2>
        <p style={{ textAlign: "center" }}>{description}</p>
      </div>
      <NavLink className={style.button} to={`/tasks/${id}`}><p>Open</p></NavLink>
      <p>{duration}</p>
    </div>
  )
}
