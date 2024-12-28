// import React from "react";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import router from "./router";
// import "./App.css";

// function App() {
//   return (
//     <div className="App">
//       <RouterProvider router={createBrowserRouter(router)} />
//     </div>
//   );
// }

// export default App;
// Install axios before running this app: npm install axios
import React, { useState, useEffect } from 'react';
import axios from 'axios';


const API_URL = 'https://crudapi.co.uk/app/keys';
const API_KEY = 'tiyXH3o613lWYK7QdxEYySDfC_m53pdLWrBG5UNFuvoULmvXVA';

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTaskName, setNewTaskName] = useState('');
  const [editingTask, setEditingTask] = useState(null);

  // Fetch tasks on component mount
  useEffect(() => {
    axios
      .get(API_URL, { headers: { Authorization: API_KEY } })
      .then((response) => setTasks(response.data.items))
      .catch((error) => console.error('Error fetching tasks:', error));
  }, []);

  // Add a new task
  const addTask = () => {
    if (!newTaskName) return;

    const newTask = { name: newTaskName, isCompleted: false };

    axios
      .post(API_URL, newTask, { headers: { Authorization: API_KEY } })
      .then((response) => {
        setTasks([...tasks, response.data]);
        setNewTaskName('');
      })
      .catch((error) => console.error('Error adding task:', error));
  };

  // Toggle task completion
  const toggleTaskCompletion = (task) => {
    const updatedTask = { ...task, isCompleted: !task.isCompleted };

    axios
      .put(`${API_URL}/${task._id}`, updatedTask, { headers: { Authorization: API_KEY } })
      .then(() => {
        setTasks((prevTasks) =>
          prevTasks.map((t) => (t._id === task._id ? updatedTask : t))
        );
      })
      .catch((error) => console.error('Error updating task:', error));
  };

  // Edit task name
  const editTask = (task, newName) => {
    const updatedTask = { ...task, name: newName };

    axios
      .put(`${API_URL}/${task._id}`, updatedTask, { headers: { Authorization: API_KEY } })
      .then(() => {
        setTasks((prevTasks) =>
          prevTasks.map((t) => (t._id === task._id ? updatedTask : t))
        );
        setEditingTask(null);
      })
      .catch((error) => console.error('Error editing task:', error));
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>TODO App</h1>

      <div>
        <input
          type="text"
          value={newTaskName}
          onChange={(e) => setNewTaskName(e.target.value)}
          placeholder="New Task Name"
        />
        <button onClick={addTask}>Add Task</button>
      </div>

      <ul>
        {tasks.map((task) => (
          <li key={task._id} style={{ margin: '10px 0' }}>
            {editingTask === task._id ? (
              <input
                type="text"
                defaultValue={task.name}
                onBlur={(e) => editTask(task, e.target.value)}
                autoFocus
              />
            ) : (
              <span
                style={{
                  textDecoration: task.isCompleted ? 'line-through' : 'none',
                  cursor: 'pointer',
                }}
                onClick={() => toggleTaskCompletion(task)}
              >
                {task.name}
              </span>
            )}
            <button onClick={() => setEditingTask(task._id)}>Edit</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;