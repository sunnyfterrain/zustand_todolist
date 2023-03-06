import React, { useState } from "react";
import { useTodoStore } from "../zustandStore/useTodoStore";
import "./TodoList.css";

const TodoList = () =>{
const [todoValue, setTodoValue] = useState("")


const todoItems = useTodoStore(state => state.todos)
const addTodo = useTodoStore(state => state.addTodo)
const deleteTodo = useTodoStore(state => state.deleteTodo)
const completeTodo = useTodoStore(state => state.completedTodo)
const completeTodoAll = useTodoStore(state => state.completeTodoAll)
const deleteTodoAll = useTodoStore(state => state.deleteTodoAll)

const clearStorage = () => {
    useTodoStore.persist.clearStorage();
    deleteTodoAll();
}

const handleSumit = (e) => {
    e.preventDefault();
    addTodo(todoValue)
    setTodoValue("")
}

    return (
        <div>
            <h1>Todo List</h1>
            <form onSubmit={handleSumit}>
                <input type="text" id="new-todo" name="newTodo" value={todoValue} onChange={(e)=>setTodoValue(e.target.value)} />
                <button type="submit">Add</button>
            </form>
            {todoItems.map(todo => (
                <ul>
                    <li key={todo.id} className={todo.isCompleted ? 'done' : ''}>
                        <div>
                        <button onClick={() => completeTodo(todo.id)}>done</button>
                        <button onClick={completeTodoAll}>done all</button>
                        {todo.id}-{todo.text}
                        <button onClick={() => deleteTodo(todo.id)}>x</button>
                        </div>
                        </li>
                </ul>
            ))}
            <button onClick={clearStorage}>clear</button>
        </div>
    )
}

export default TodoList;