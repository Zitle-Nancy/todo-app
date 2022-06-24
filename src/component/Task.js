import { Fragment, useState } from "react";

const Task = ({task:{title, id, isDone}, deleteTask, editar, handleIsDone}) => {
  const [modeEditable, setModeEditable] = useState(false);
  const [editText, setEditText] = useState(title);

  const handleEdit = () => {
    setModeEditable(true)
  }

  const manejarEdit = (event) => {
    setEditText(event.target.value)
  }

  const submitEdit = (event) => {
    event.preventDefault();
    editar(id, editText) // aquí estaba mi error, yo le pasaba task
    setModeEditable(false)
  }


  return(
    <Fragment>
      {modeEditable ? 
      <form onSubmit={submitEdit}>
        <input value={editText} onChange={manejarEdit}/>
        <button >Guardar</button>
      </form>
      :
      <div>
        <input type="checkbox" onChange={() => handleIsDone(id)} id={id} checked={isDone}/>
        <label for={id} style={{textDecoration: `${isDone ? 'line-through' :  'auto'}`}}>{title}</label>
        <button onClick={handleEdit}>Editar</button>
        <button onClick={() => deleteTask(id)}>Eliminar</button>
      </div> 
      }
    </Fragment>
  )
}

export default Task;