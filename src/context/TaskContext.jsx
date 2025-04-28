import { createContext, useState, useEffect } from "react";
import { tasks as data } from "../data/tasks";

export const TaskContext = createContext();

export function TaskContextProvider(props) {
  const [tasks, setTask] = useState([]);

  function createTask(taskTitle, taskDescription) {
    setTask([
      ...tasks,
      {
        title: taskTitle,
        id: tasks.length + 1,
        description: taskDescription,
      },
    ]);
  }

  function deleteTask(taskId) {
    setTask(tasks.filter((task) => task.id !== taskId));
  }

  useEffect(() => {
    //cargar los datos de tasks al useState
    setTask(data);
  }, []);

  return (
    <>
      <TaskContext.Provider
        value={{
          tasks: tasks,
          deleteTask: deleteTask,
          createTask: createTask,
        }}
      >
        {props.children}
      </TaskContext.Provider>
    </>
  );
}
