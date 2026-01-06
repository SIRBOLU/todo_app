import React from "react";
import { useNavigate } from "react-router-dom";
import "./WelcomeStyle.css";

const Welcome = () => {
  const navigate = useNavigate();
  return (
    <div className="welcome">
      <div>
        <h1>Welcome to To-Do List</h1>
        <p>Welcome to your smart to-do list, stay organized</p>
      </div>
      <div>
        <div>
          <img src="" alt="" />
          <div>
            <h3>Create Tasks Quickly and Easily</h3>
            <p>Input tasks, subtasks and repetitive tasks</p>
          </div>
        </div>
        <div>
          <img src="" alt="" />
          <div>
            <h3>Task Reminders</h3>
            <p>Set reminders, and never miss important things</p>
          </div>
        </div>
        <div>
          <img src="" alt="" />
          <div>
            <h3>Settings</h3>
            <p>Select your preferred mode</p>
          </div>
        </div>
      </div>

      <button className="go-to" onClick={() => navigate("/todos")}>
        Go to Tasks
      </button>
    </div>
  );
};

export default Welcome;
