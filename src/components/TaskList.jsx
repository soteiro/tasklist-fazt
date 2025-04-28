import TaskCard from "./TaskCard";
import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

export default function Tasklist() {
  const { tasks } = useContext(TaskContext);

  if (tasks.length === 0) {
    return <h1>No hay elementos</h1>;
  }

  return (
    <div className="bg-white shadow-md rounded-lg p-4 m-4 flex flex-col gap-1">
      <h1 className="text-2xl font-bold mb-2">Lista de tareas</h1>
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
}
