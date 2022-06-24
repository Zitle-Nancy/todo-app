import { useState } from 'react';
import './App.css';
import FormTask from './component/FormTask';
import Task from './component/Task'

function App() {
  const [tasks, setTasks] = useState([]);

  const createTask = (task) => {
    const newTask = {
      id:crypto.randomUUID(),
      title:task,
      isDone: false
    }
    setTasks([newTask,...tasks ])
  }

  const deleteTask = (idTask) => {
    const currentTasks = tasks.filter((currentTask) => currentTask.id !== idTask)
    setTasks(currentTasks)
  }

  const actualizarTarea = (id, tarea) => {
    const listaActualizada = tasks.map((elemento) => {
      if(elemento.id === id){
        elemento.title = tarea
      }

      return elemento;
    })

    setTasks(listaActualizada)
  }

  const handleIsDone = (id) => {
    const finishedTask = tasks.map(element => {
      if(element.id === id) {
        element.isDone = !element.isDone
      }

      return element
  })

    setTasks(finishedTask)

  }

  return (
    <div className="App">
      <FormTask createTask={createTask} />

      <section style={{marginTop: '2rem'}}>
        {tasks.map(task => (
          <Task 
            key={task.id}
            task={task}
            deleteTask={deleteTask}
            editar={actualizarTarea}
            handleIsDone={handleIsDone}
            />
            
        ))}
      </section>
    </div>
  );
}

export default App;
