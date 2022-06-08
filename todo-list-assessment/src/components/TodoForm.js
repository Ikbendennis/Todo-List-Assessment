
import React, {useState, useEffect, useRef} from 'react'

function TodoForm(props) {
    const [input, setInput] = useState(props.edit ? props.edit.value : '')
    const setFocus = useRef(null)
    useEffect(()=>{
        setFocus.current.focus()
    })

    const applyChange = e =>{
        setInput(e.target.value);
    }

    const handleSubmit = e => {
    e.preventDefault();

    props.onSubmit({
        //generate a random id to differentiate between todos
        id: Math.floor(Math.random() * 99999),
        text: input
    });

    setInput('')
    }

    return (
        <form onSubmit={handleSubmit} className='todo-form'>
        {props.edit ? (
          <>
            <input
              placeholder='Update the todo'
              value={input}
              onChange={applyChange}
              name='text'
              ref={setFocus}
              className='todo-input edit'
            />
            <button onClick={handleSubmit} className='todo-button edit'>
              Update
            </button>
          </>
        ) : (
          <>
            <input
              placeholder='Add a todo'
              value={input}
              onChange={applyChange}
              name='text'
              className='todo-input'
              ref={setFocus}
            />
            <button onClick={handleSubmit} className='todo-button'>
              Add
            </button>
          </>
        )}
      </form>
  )
}

export default TodoForm