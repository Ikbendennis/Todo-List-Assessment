import React, {useState} from 'react'
import TodoForm from './TodoForm'
import Todo from './Todo'


function TodoList() {
    const[todosList, setTodosList] = useState([])

    const addTodoObject = todo => {
      //Check if text is not empty or contains blank lines
        if(!todo.text || /^\s*$/.test(todo.text)){
            return
        }
        //Create new array containing previous todos and the new todo
        const newTodo = [todo, ...todosList]
        //Update array
        setTodosList(newTodo)
    }

    const completeTodo = id => {
    
      let updateCompletedTodos = todosList.map(todo => {
        if (todo.id === id) {
          //Change the completion value based on the current value
          todo.isComplete = !todo.isComplete
        }
        return todo;
      })

      setTodosList(updateCompletedTodos)
    }

    const deleteTodo = id => {
      const deleteTodos = [...todosList].filter(todo => todo.id !== id)

      setTodosList(deleteTodos)
    }

    const updateTodo =(todoId, updatedTodo) => {
      if(!updatedTodo.text || /^\s*$/.test(updatedTodo.text)){
        return
      }
      setTodosList(prev => prev.map(oldTodo => (oldTodo.id === todoId ? updatedTodo : oldTodo)))
    }

  return (
    <div>
        <TodoForm onSubmit ={addTodoObject}/>
        <Todo todosList={todosList} completeTodo={completeTodo} 
              deleteTodo ={deleteTodo} updateTodo={updateTodo}
        />
    </div>
  )
}

export default TodoList