import React, {Fragment, useState} from 'react';

const FormTask = ({createTask}) => {
  const [inputTask, setInputTask] = useState('');
  
  const handleForm = (event) => {
    setInputTask(event.target.value)
  }

  const submit = (e) => {
    e.preventDefault();
    if(inputTask.trim() !== ''){
      createTask(inputTask)
      setInputTask('')
    }
  }

  
  return (
    <Fragment>
      <form onSubmit={submit}>
        <span>Añadir tarea</span>
        <input type="text" onChange={handleForm} value={inputTask} required/>
        <button>Añadir</button>
      </form>
    </Fragment>
  )
}

export default FormTask;