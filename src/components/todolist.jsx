import { useState } from "react";

export default function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  const addTask = () => {
    if (task.trim() !== "") {
      setTasks([...tasks, { text: task, completed: false }]);
      setTask("");
    }
  };
  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="container d-flex flex-column align-items-center p-5 min-vh-100">
      <h1 className="text-info mb-4">Todo List</h1>
      <div className="d-flex mb-4">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          className="form-control w-50"
          placeholder="Enter a task..."
        />
        <button onClick={addTask} className="btn btn-primary mx-2">
          Add
        </button>
      </div>
      <ul className="list-group w-50">
        {tasks.map((t, index) => (
          <li
            key={index}
            className={`list-group-item d-flex justify-content-between align-items-center ${t.completed ? "bg-light text-decoration-line-through" : ""}`}
          >
           {t.text}
            <button
              onClick={() => deleteTask(index)}
              className="btn btn-danger btn-sm"
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
