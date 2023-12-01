import React, { useState } from "react";

function TodoList() {
  const [tasks, setTasks] = useState([])
  const [input, setInput] = useState("")

  const handleAddTask = () => {
    setTasks([...tasks, input]);
    setInput("")
  }

  const handleDeleteTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  }

  return (
    <div className="container">
      <h1>to do list</h1>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="введите задачу"
      />
      <button onClick={handleAddTask}>добавить задачу</button>
      {tasks.map((task, index) => (
        <div key={index}>
          <p>задача #{index + 1}: {task}</p>
          <button onClick={() => handleDeleteTask(index)}>удалить</button>
        </div>
      ))}
    </div>
  );
}

export default TodoList;