import React from 'react'
import TaskCard from '../../UI/TaskCard'
import style from './css/MainBody.module.css'
import HeaderImg from './components/HeaderImg'
import { NavLink } from 'react-router-dom'
import { useEffect, useState } from 'react'

export default function MainBody() {
  const [tasks, setTasks] = useState({})
  function removeRow(ID) {
    let newObjValute = {}
    for (const key in tasks) {
        if (tasks[key].ID === ID)
            continue;
        newObjValute[key] = tasks[key]
    }
    setTasks(newObjValute)
  }
  function WriteTask() {
    const list = []
    for (const key in tasks) {
      list.push(<TaskCard
        removeItem={removeRow}
        key={tasks[key].id}
        id={tasks[key].id}
        name={tasks[key].name}
        description={tasks[key].description}
        duration={tasks[key].duration.name}
      />)
    }
    return list
  }

  console.log(tasks);
  useEffect(() => {
    const getStorages = async () => {
      const res = await fetch('http://localhost:3000/api/tasks/storages/lastTen')
      const data = await res.json()
      console.log(data)
    }
    getStorages()
    fetch('http://localhost:3000/api/tasks/storages/lastTen')
    .then(res => res.json()).then(data => setTasks(data))
    .catch(error => console.log(error))
    console.log(tasks)
  }, [])
  return (
    <div>
      <HeaderImg />
      <h2>Reacent created tasks</h2>
      <div className={style.wrapper}>
        <div className={style.Card}>
            <NavLink className={style.button} to="createStorage"><p>+</p></NavLink>
        </div>
        {WriteTask()}
      </div>

    </div>
  )
}
