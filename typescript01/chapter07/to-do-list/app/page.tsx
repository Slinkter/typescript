"use client";

import { useState, type FormEvent } from "react";
import { v4 as uuidV4 } from "uuid";
import type { Task } from "./types/task";

type TaskFormProps = {
  inputValue: string;
  onInputChange: (value: string) => void;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
};

const TaskForm = ({ inputValue, onInputChange, onSubmit }: TaskFormProps) => (
  <form onSubmit={onSubmit} className="flex gap-2">
    <label htmlFor="task-title" className="sr-only">
      Nueva tarea
    </label>
    <input
      type="text"
      id="task-title"
      value={inputValue}
      onChange={(event) => onInputChange(event.target.value)}
      placeholder="¿Qué necesitas hacer?"
      autoComplete="off"
      className="min-w-0 flex-1 rounded-sm border border-gray-500 px-2 py-1 focus:outline-2 focus:outline-offset-1 focus:outline-slate-600"
    />
    <button
      type="submit"
      className="cursor-pointer rounded-sm border border-gray-500 bg-gray-200 px-3 py-1 text-black hover:bg-gray-300"
    >
      Agregar
    </button>
  </form>
);

type TaskItemProps = {
  task: Task;
  onToggle: (id: string, checked: boolean) => void;
};

const TaskItem = ({ task, onToggle }: TaskItemProps) => (
  <li>
    <label
      className={`flex items-center gap-2 cursor-pointer rounded px-1 py-1 hover:bg-slate-50 ${
        task.completed ? "line-through text-gray-500" : ""
      }`}
    >
      <input
        type="checkbox"
        checked={task.completed}
        onChange={(event) => onToggle(task.id, event.target.checked)}
        className="size-4 accent-slate-700"
      />
      <span>{task.title}</span>
    </label>
  </li>
);

const Page = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [inputValue, setInputValue] = useState<string>("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const title = inputValue.trim();
    if (title === "") return;

    const newTask: Task = {
      id: uuidV4(),
      title,
      completed: false,
      createdAt: new Date(),
    };
    setTasks((prev) => [...prev, newTask]);
    setInputValue("");
  };

  const toggleTask = (id: string, checked: boolean) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: checked } : task,
      ),
    );
  };

  const completedCount = tasks.filter((task) => task.completed).length;

  return (
    <main className="flex min-h-screen justify-center bg-slate-100 px-4 py-10">
      <section className="w-full max-w-md self-start rounded-lg bg-white p-6 shadow-sm">
        <header className="mb-4">
          <h1 className="text-2xl font-semibold text-slate-800">To-Do List</h1>
          <p className="text-sm text-slate-500">
            Capítulo 7 · Next.js + TypeScript + Tailwind CSS
          </p>
        </header>

        <TaskForm
          inputValue={inputValue}
          onInputChange={setInputValue}
          onSubmit={handleSubmit}
        />

        <div className="mt-5">
          {tasks.length === 0 ? (
            <p className="rounded border border-dashed border-slate-300 px-3 py-6 text-center text-sm text-slate-500">
              No hay tareas todavía. Agrega una arriba.
            </p>
          ) : (
            <>
              <ul id="list" className="mb-2 list-none space-y-1 p-0">
                {tasks.map((task) => (
                  <TaskItem key={task.id} task={task} onToggle={toggleTask} />
                ))}
              </ul>
              <p className="text-xs text-slate-500">
                {completedCount} de {tasks.length} completadas
              </p>
            </>
          )}
        </div>
      </section>
    </main>
  );
};

export default Page;
