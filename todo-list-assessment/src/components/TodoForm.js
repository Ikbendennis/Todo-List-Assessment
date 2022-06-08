
import React, {useState} from 'react'

function TodoForm(props) {
    const [input, setInput] = useState('')

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
    <form className='todo-form' onSubmit={handleSubmit}>
        <input 
        type='text' 
        placeholder='Add something todo' 
        value={input} 
        name='text' 
        className='todo-input'
        onChange={applyChange}
        />
        <button className='todo-button'>Add</button>
    </form>
  )
}

export default TodoForm