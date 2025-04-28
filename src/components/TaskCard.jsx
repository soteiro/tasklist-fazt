import { useContext } from "react";
import { TaskContext } from "../context/TaskContext.jsx";

function TaskCard({ task, }) {
  const { deleteTask } = useContext(TaskContext);

  return (
    <div className="bg-white shadow-md rounded-lg p-4 m-4">
      <h3 className=" text-xl font-bold mb-2">{task.title}</h3>
      <p className="text-gray-700 text-sm">{task.description}</p>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
        onClick={() => {
          deleteTask(task.id);
        }}
      >
        {" "}
        eliminar tarea{" "}
      </button>
    </div>
  );
}

export default TaskCard;
