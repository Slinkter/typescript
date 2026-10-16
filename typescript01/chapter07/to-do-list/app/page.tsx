"use client";
import { FormEvent, useState } from "react";
import { v4 as uuidV4 } from "uuid";
import { Task } from "./types/task";

const Page = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [inputValue, setinputValue] = useState<string>("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputValue.trim() === "") return;
    /*  */
    const newTask: Task = {
      id: uuidV4(),
      title: inputValue,
      completed: false,
      createdAt: new Date(),
    };
    setTasks((prev) => [...prev, newTask]);
    setinputValue("");
  };
  /*  */
  const toogleTask = (id: string, checked: boolean) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: checked } : task,
      ),
    );
  };

  const style = {
    main: "grid place-items-center pt-10 px-4 bg-slate-200 ",
    ul: "list-none p-0 mb-3 space-y-1",
    lab: "",
    formInput: "border border-gray-500 px-2 py-0.5 rounded-sm",
    formButtonAdd:
      "border border-gray-500 bg-gray-200 text-black px-3 py-0.5 rounded-sm hover:bg-gray-300 cursor-pointer",
  };

  return (
    <main className={style.main}>
      <h1>hola</h1>

      <div className="bg-yellow-50">
        <ul id="list" className={style.ul}>
          {tasks.map((task) => (
            <li key={task.id}>
              <label
                className={`flex item-center gap-2 cursor-pointer ${
                  task.completed} ? "line-throug" : "" ` }
              >
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={(e) => toogleTask(task.id, e.target.checked)}
                />
                <span>{task.title}</span>
              </label>
            </li>
          ))}
        </ul>
        {/*  */}
        <form id="task-form" onSubmit={handleSubmit} className="flex gap-1">
          <input
            type="text"
            id="task-title"
            value={inputValue}
            onChange={(e) => setinputValue(e.target.value)}
            className={style.formInput}
          />
          <button type="submit" className={style.formButtonAdd}>
            Add
          </button>
        </form>
      </div>
    </main>
  );
};

export default Page;
