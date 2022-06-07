import React, {useState} from 'react'
import TodoForm from './TodoForm'

function TodoList() {
    const[todos, setTodos] = useState([])

    const addTodoObject = todo => {
        if(!todo.text || /^\s*$/.test(todo.text)){
            return
        }

        const newTodo = [todo, ...todos]

        setTodos(newTodo)
    }

  return (
    <div>
        <h1>Hello doctor, how are you doing</h1>
        <TodoForm onSubmit ={addTodoObject}/>
    </div>
  )
}

export default TodoList