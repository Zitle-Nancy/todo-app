import { Fragment, useState } from 'react';
import './App.css';
import FormTask from './component/FormTask';
import Task from './component/Task'

function App() {
  const [tasks, setTasks] = useState([]);
  const [areFinishedTasks, setFinishedTasks] = useState(false);

  const createTask = (task) => {
    const newTask = {
      id:crypto.randomUUID(),
      title:task,
      isDone: areFinishedTasks,
    }
    setTasks([newTask,...tasks ])
  }

  const deleteTask = (idTask) => {
    const currentTasks = tasks.filter((currentTask) => currentTask.id !== idTask)
    setTasks(currentTasks)
    if(tasks.length === 0){
      setFinishedTasks(!areFinishedTasks)
    }
  }

  const updateTask = (id, newTitleTask) => {
    const updatedTasks = tasks.map((task) => {
      if(task.id === id){
        task.title = newTitleTask
      }

      return task;
    })

    setTasks(updatedTasks)
  }

  const handleFinishedTask = (id) => {
    const finishedTask = tasks.map(element => {
      if(element.id === id) {
        element.isDone = !element.isDone
      }
      return element
  })

  setTasks(finishedTask)
  const isDoneAnyTask = tasks.some(task => task.isDone === false)
  setFinishedTasks(!isDoneAnyTask)
  }

  const finishedAllTasks = () => {
    setFinishedTasks(!areFinishedTasks)
    const finishedTasks = tasks.map(task => {
      return ({...task, isDone:!areFinishedTasks})
    })
    setTasks(finishedTasks)
  }

  return (
    <div className="App">
      <FormTask createTask={createTask} />
      {!!tasks.length && 
        <Fragment>
          <input type="checkbox" onChange={finishedAllTasks} id="finishedTasks" checked={areFinishedTasks}/>
          <label for="finishedTasks">Marcar todas las tareas como terminadas</label>
        </Fragment>
      }
      
      <section style={{marginTop: '2rem'}}>
        {tasks.map(task => (
          <Task 
            key={task.id}
            task={task}
            deleteTask={deleteTask}
            updateTask={updateTask}
            handleFinishedTask={handleFinishedTask}
            finishedAllTasks={finishedAllTasks}
            />
            
        ))}
      </section>
    </div>
  );
}

export default App;
