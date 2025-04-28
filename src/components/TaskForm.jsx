import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext.jsx";

function TaskForm() {
  const [title, setTitle] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const { createTask } = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() === "") {
      alert("no puedes dejar el campo vacio");
    } else {
      createTask(title, descripcion);
      // alert("texto guardado");
      setTitle("");
      setDescripcion("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-4 m-4 flex flex-col gap-4.5">
      <input className="bg-gray-200 text-gray-700 border-gray-200 rounded-lg p-2 w-full padding-2"  
        id="title"
        placeholder="escribe tu tarea"
        value={title}
        autoFocus
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <textarea
        className="bg-gray-200 text-gray-700 border-gray-200 rounded-lg p-2 w-full padding-2"
        name="description"
        id="description"
        value={descripcion}
        placeholder="ingresa la descripción"
        onChange={(e) => {
          setDescripcion(e.target.value);
        }}
        ></textarea>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"> Guardar</button>
    </form>
  );
}

export default TaskForm;
