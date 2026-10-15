"use client"
import React, { FormEvent, useState } from 'react'
import { } from 'react'
import { v4 as uuidV4 } from 'uuid'
import { Task } from './types/task'


const page = () => {

  const [tasks, setTasks] = useState<Task[]>([])
  const [inputValue, setinputValue] = useState<string>("")

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (inputValue.trim() === "") return
    /*  */
    const newTask: Task = {
      id: uuidV4(),
      title: inputValue,
      completed: false,
      createdAt: new Date()
    }
    setTasks(prev => [...prev, newTask])
    setinputValue("")

  }
  /*  */
  const toogleTask = (id: string, checked: boolean) => {
    setTasks((prev) =>
      prev.map(task =>
        task.id === id ? { ...task, completed: checked } : task
      )
    )
  }



  return (
    <main>
      <div>
        <ul>
          <li>
            <label htmlFor="">
              <input type="text" />
            </label>
          </li>
        </ul>
        {/*  */}
        <form action="">
          <input type="text" />
          <button>Add</button>
        </form>
      </div>
      <h1>hola</h1>

    </main>
  )
}

export default page