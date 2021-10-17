import React, { useRef } from 'react'
import './TodoInput.css'

const TodoInput = ({createTodo}) => {

    const todoInput = useRef('')

    const handleSubmit = (e) => {
        e.preventDefault();
        

        createTodo(todoInput.current.value)
        todoInput.current.value = ''
    }

    return (
        <form onSubmit={handleSubmit}>
            
            <input type="text" ref={todoInput} required className="input"/>
            <input type="submit" className="submitBtn"/>
        </form>
    )
}

export default TodoInput
