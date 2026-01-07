import React from "react";
import { useNavigate } from "react-router-dom";
import "./WelcomeStyle.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faListCheck, faBell, faGear } from "@fortawesome/free-solid-svg-icons";

const Welcome = () => {
  const navigate = useNavigate();
  return (
    <div className="container">
      <div className="welcome">
        <div className="top">
          <h1>Welcome to To-Do List</h1>
          <p>Welcome to your smart to-do list, stay organized always.</p>
        </div>
        <div>
          <div className="create">
            <FontAwesomeIcon icon={faListCheck} />
            <div>
              <h4>Create Tasks Quickly and Easily</h4>
              <p>Input tasks, subtasks and repetitive tasks</p>
            </div>
          </div>
          <div className="reminders">
            <FontAwesomeIcon icon={faBell} />
            <div>
              <h4>Task Reminders</h4>
              <p>Set reminders, and never miss important things</p>
            </div>
          </div>
          <div className="settings">
            <FontAwesomeIcon icon={faGear} />
            <div>
              <h4>Settings</h4>
              <p>Select your preferred mode</p>
            </div>
          </div>
        </div>

        <button className="go-to" onClick={() => navigate("/todos")}>
          Go to Tasks
        </button>
      </div>
      <footer>
        <p>techlyCoded &copy; 2025</p>
      </footer>
    </div>
  );
};

export default Welcome;
