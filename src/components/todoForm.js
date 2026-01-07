// import React from "react";
import React, { useState } from "react";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    value !== " " && value !== "" && addTodo(value);

    setValue("");
  };
  return (
    <form className="todoForm" onSubmit={handleSubmit}>
      <input
        type="text"
        maxLength={18}
        className="todo-input"
        value={value}
        placeholder="Enter task"
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit" className="todo-btn">
        <FontAwesomeIcon icon={faPlus} />
      </button>
    </form>
  );
};
export default TodoForm;
