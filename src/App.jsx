import { useEffect, useState } from "react";
import "./styles.css";
import { NewTodoForm } from "./NewTodoForm";
import { TodoList } from "./TodoList";

export default function App() {
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("ITEMS");
    if (localValue == null) return [];

    return JSON.parse(localValue);
  });

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos));
    //Storing todos array as string in local storage
  }, [todos]);
  //useEffect : Run this function every time the values in our todos array change

  function addTodo(title) {
    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title, completed: false },
      ];
    });
  }

  function toggleTodo(id, completed) {
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed };
        }

        return todo;
      });
    });
  }

  function deleteTodo(id) {
    setTodos((currentTodos) => {
      //Filter only those todos whose id do not match with the id that needs to be deleted
      //We are simply "not" showing the id that needs to be deleted
      return currentTodos.filter((todo) => todo.id !== id);
    });
  }
  return (
    <>
      <h1 style="text-align: center; font-weight: 600; font-size: 2em;">Gaurav's To Do List</h1>
      <NewTodoForm onSubmit={addTodo} />
      <h1 className="header">To Do List</h1>
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </>
  );
}
