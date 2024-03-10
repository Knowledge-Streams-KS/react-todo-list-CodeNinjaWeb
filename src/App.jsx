import React, { useState } from "react";
import NewTask from "./Components/Tasklist/Task";

const App = () => {
  const datalist = [
    { id: 1, description: "loremipsumloremipsum" },
    { id: 2, description: "loremipsumloremipsum" },
    { id: 3, description: "loremipsumloremipsum" },
    { id: 4, description: "loremipsumloremipsum" },
  ];

  const [TaskData, setTaskData] = useState(datalist);

  const handleDelete = (taskId) => {
    const updatedTaskData = TaskData.filter((task) => task.id !== taskId);
    setTaskData(updatedTaskData);
  };

  const handleAddTask = (newDesc) => {
    const newTask = {
      id: Date.now(),
      description: newDesc,
    };

    setTaskData((prevTaskData) => [...prevTaskData, newTask]);
  };

  return (
    <div>
      {TaskData.map((task) => (
        <NewTask
          key={task.id}
          task={task}
          onDelete={() => handleDelete(task.id)}
          onAdd={handleAddTask}
        />
      ))}
    </div>
  );
};

export default App;
