import React, {useState}  from 'react'
import TodoForm from './TodoForm'
import {MdOutlineModeEdit} from 'react-icons/md'
import {MdCancel} from 'react-icons/md'

function Todo({todosList, completeTodo, deleteTodo, updateTodo }) {
    const [update, setUpdate] = useState({
        id: null,
        value: ''
    })

    const applyUpdate = value => {
      updateTodo(update.id, value)
      setUpdate({
        id: null,
        value: ''
      })
    }

    if (update.id){
      return <TodoForm edit={update} onSubmit={applyUpdate}/>
    }

  return todosList.map((todo, index)=> (
      <div className={todo.isComplete ? 'todo-row complete':'todo-row' } key={index}>
          {/* When clicking on the todo, you can change the completion value */}
          <div key={todo.id} onClick={()=> completeTodo(todo.id)}>
              {todo.text}
          </div>
          
          <div className='icons'>
          </div>
        {/* update and delete buttons */}
        <MdOutlineModeEdit
          onClick={()=> setUpdate({id: todo.id, value: todo.text})}
          classname='updateButton'
        />
        <MdCancel
          onClick={()=> deleteTodo(todo.id)}
          classname='deleteButton'
        />
      </div>

  ))
}

export default Todo