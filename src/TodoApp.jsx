import React from "react";
import TodoList from "./TodoList";
import './TodoApp.css'
import { useState } from "react"; 
import TodoForm from "./TodoForm";
function Todo(){
    let initialTodos = [
        {id: 1 , task : "dummy 1"},
        {id: 2 , task : "dummy 2"}
    ]
    const [todos , setTodos] = useState(initialTodos)
    const [idTodo , setIdTodo] = useState(0)
    const addTodo = newTodotext =>{
        setIdTodo(idTodo => idTodo+1)
        setTodos([...todos , {id : idTodo , task : newTodotext}]);
    }
    return(
        <div className="TodoAppDiv">
            <header>TODOS WITH HOOKS</header>
            <TodoForm addTodo={addTodo} />
            <TodoList data = {todos} />
        </div>
    )
}
export default Todo