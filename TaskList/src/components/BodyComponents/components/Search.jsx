import React from 'react'
import Tasks from '../../../UI/Tasks'
import { useState } from 'react'

export default function Search() {
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

  const changeHandler = (e) => {
    const search = e.target.value
    console.log(search)
    fetch(`http://localhost:3000/api/tasks/search/tasks/${search}`)
    .then(res => res.json()).then(
      data => setTasks(data),
      
      )
    .catch(error => console.log(error))
    if(search === ""){
      setTasks({})
    }
  }

  return (
    <div className="mb-3">
      <input type="text" className="form-control" name = "search" placeholder="search" onChange={changeHandler} />
      <div>
        {WriteTask()}
      </div>
    </div>
  )
}
