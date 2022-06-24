import { Fragment, useState } from "react";

const Task = ({task:{title, id, isDone}, deleteTask, updateTask, handleFinishedTask}) => {
  const [modeEditable, setModeEditable] = useState(false);
  const [editText, setEditText] = useState(title);

  const handleEdit = () => {
    setModeEditable(true)
  }

  const onChangeEditableInput = (event) => {
    setEditText(event.target.value)
  }

  const submitEdit = (event) => {
    event.preventDefault();
    updateTask(id, editText) // aquí estaba mi error, yo le pasaba task
    setModeEditable(false)
  }

  const updateTaskCancel = () => {
    setEditText(title)
    setModeEditable(false)
  }
 

  return(
    <Fragment>
      {modeEditable ? 
      <form onSubmit={submitEdit}>
        <input value={editText} onChange={onChangeEditableInput}/>
        <button >Guardar</button>
        <button onClick={updateTaskCancel}>Cancelar</button>
      </form>
      :
      <div>
        <input type="checkbox" onChange={() => handleFinishedTask(id)} id={id} checked={isDone}/>
        <label for={id} style={{textDecoration: `${isDone ? 'line-through' :  'auto'}`}}>{title}</label>
        <button onClick={handleEdit}>Editar</button>
        <button onClick={() => deleteTask(id)}>Eliminar</button>
      </div> 
      }
    </Fragment>
  )
}

export default Task;