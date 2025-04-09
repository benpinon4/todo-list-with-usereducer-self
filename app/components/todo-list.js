"use client";

import { useReducer, useState } from "react";
import todoReducer from "./todo-reducer";

export default function TodoList() {
  const [todos, dispatch] = useReducer(todoReducer, []);
  const [todoItem, setTodoItem] = useState("");

  function handleAddTodo(e) {
    e.preventDefault();
    console.log(todoItem);
    if (todoItem.trim === "") return;
    dispatch({ type: "ADD_TODO", payload: todoItem });
    setTodoItem("");
  }

  return (
    <>
      <h1>Todo List App</h1>
      <form onSubmit={handleAddTodo}>
        <input
          value={todoItem}
          onChange={(e) => setTodoItem(e.target.value)}
          type="text"
          placeholder="Add a new todo item"
        />
        <button type="submit">Submit</button>
      </form>

      <ul>
        {todos.map((todo, index) => {
          return (
            <li key={index} >
              <span className={`cursor-pointer ${todo.completed ? "line-through text-gray-500" : ""}`}
                onClick={() => dispatch({ type: "TOGGLE_TODO", payload: todo.id })}
              > {todo.text}</span>
             
                <button onClick={()=> dispatch({type: "DELETE_TODO", payload: todo.id})}>Delete</button>
            </li>
          );
        })}
      </ul>
    </>
  );
}
