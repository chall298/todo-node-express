import React from "react";
import TodoItem from "./TodoItem";

const Todos = ({todos}) => {
    return (
        todos.map((todo) => (
            <TodoItem key={todo.id} todo={todo}/>
        )) 
    )
}

export default Todos