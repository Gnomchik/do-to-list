import React from 'react'
import Tasks from '../../../UI/Tasks'
import { NavLink } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from "axios"

export default function TaskList() {
  const { id } = useParams();
  const [tasks, setTasks] = useState({})
  function remove(ID) {
    let newObjValute = {}
    for (const key in tasks) {
        if (tasks[key].id === ID)
            continue;
        newObjValute[key] = tasks[key]
    }
    setTasks(newObjValute)
  }
  function WriteTask() {
    const list = []
    for (const key in tasks) {
      list.push(<Tasks
        removeItem={remove}
        key={tasks[key].id}
        id={tasks[key].id}
        name={tasks[key].name}
        description={tasks[key].description}
      />)
    }
    return list
  }

  useEffect(() => {
    loadData()
  }, [])

  const loadData = async () => {
    await fetch(`http://localhost:3000/api/tasks/storages/${id}`)
    .then(res => res.json()).then(
      data => setTasks(data),
      
      )
    .catch(error => console.log(error))
  }
  console.log(tasks);
  return (
    <div>
        <div>
            <NavLink className='btn btn-primary' to={`../add/${id}`}>Create</NavLink>
        </div>  
        {WriteTask()}
    </div>
  )
}
