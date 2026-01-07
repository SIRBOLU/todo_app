import React, { useEffect, useState } from "react";

import { v4 as uuidv4 } from "uuid";
import { TodoForm } from "./todoForm";
import { Todo } from "./todo";
import EditTodoForm from "./EditTodoForm";
import "./todoWrapper.css";

uuidv4();

export const TodoWrapper = () => {
  // Initialize state from localStorage or empty array
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });
  const [deletingId, setDeletingId] = useState(null);
  // Save to localStorage whenever todos changes
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (todo) => {
    setTodos([
      ...todos,
      { id: uuidv4(), task: todo, completed: false, isEditing: false },
    ]);
    console.log(todos);
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };
  const deleteTodo = (id) => {
    setDeletingId(id);

    setTimeout(() => {
      setTodos((prev) => prev.filter((todo) => todo.id !== id));
      setDeletingId(null);
    }, 350); // matches CSS animation duration
  };

  const editTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  };

  const editTask = (task, id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
      )
    );
  };
  return (
    <div className="todoWrapper">
      <div className="todocover">
        <h1>Tasks to be caried out!</h1>

        <TodoForm addTodo={addTodo} />

        {/* 👇 Scrollable area */}
        <div className="todoList">
          {todos.map((todo, index) => (
            <div
              key={todo.id}
              className={`todo-animate ${
                deletingId === todo.id ? "collapse" : ""
              }`}
              style={{ animationDelay: `${index * 40}ms` }}
            >
              {todo.isEditing ? (
                <EditTodoForm editTodo={editTask} task={todo} />
              ) : (
                <Todo
                  task={todo}
                  toggleComplete={toggleComplete}
                  deleteTodo={deleteTodo}
                  editTodo={editTodo}
                />
              )}
            </div>
          ))}
        </div>
      </div>
      <footer>
        <p>techlyCoded &copy; 2025</p>
      </footer>
    </div>
  );
};
