import React from 'react'
import TaskCard from '../../../UI/TaskCard'
import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'


export default function Tasks() {
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
    fetch('http://localhost:3000/api/tasks/storages/lastTen')
    .then(res => res.json()).then(data => setTasks(data))
    .catch(error => console.log(error))
  }, [])
  return (
    <>
    <NavLink data-mdb-ripple-init className="btn bg-success text-white " style={{marginTop: "10px"}} to="../createStorage" role="button">Create</NavLink>
    <div style={{ display: "flex", alignItems: "center" }}>
       {WriteTask()}
    </div>
    </>
  )
}
