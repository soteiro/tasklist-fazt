import Tasklist from "./components/TaskList";
import TaskForm from "./components/TaskForm";


function App() {
  
  // console.log("tareas: ",tareas);
 

 
  return (
    <>
      <TaskForm />
      <hr />
      <Tasklist />
    </>
  );
}

export default App;
