import React from 'react'

const TodoItem = ({todo}) => {
    return (
        <div className="todoItem">
            <h1>{todo.message}</h1>
            <p>{todo.id}</p>
        </div>
    )
}

export default TodoItem
