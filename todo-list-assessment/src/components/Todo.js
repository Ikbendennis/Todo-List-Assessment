import React, {useState}  from 'react'
import TodoForm from './TodoForm'
import {MdOutlineModeEdit} from 'react-icons/md'
import {MdCancel} from 'react-icons/md'

function Todo({todos, completeTodo }) {
    const [update, setUpdate] = useState({
        id: null,
        value: ''
    })

  return todos.map((todo, index)=> (
      <div className={todo.isComplete ? 'todo-row-completed':'todo-row' } key={index}>

          <div key={todo.id} onClick={()=> completeTodo(todo.id)}>
              {todo.text}
          </div>
          <div className='icons'>

          </div>
        <MdCancel/>
        <MdOutlineModeEdit/>
      </div>

  ))
}

export default Todo