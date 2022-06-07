import React, {useState} from 'react'
import TodoForm from './TodoForm'
import Todo from './Todo'


function TodoList() {
    const[todos, setTodos] = useState([])

    const addTodoObject = todo => {
        if(!todo.text || /^\s*$/.test(todo.text)){
            return
        }

        const newTodo = [todo, ...todos]

        setTodos(newTodo)
    }
    const completeTodo = id => {
      let updatedTodos = todos.map(todo => {
        if (todo.id === id) {
          todo.isComplete = !todo.isComplete
        }
        return todo;
      })
      setTodos(updatedTodos)
    }

  return (
    <div>
        <h1>Hello doctor, how are you doing</h1>
        <TodoForm onSubmit ={addTodoObject}/>
        <Todo
        todos ={todos} completeTodo={completeTodo}
        />
    </div>
  )
}

export default TodoList