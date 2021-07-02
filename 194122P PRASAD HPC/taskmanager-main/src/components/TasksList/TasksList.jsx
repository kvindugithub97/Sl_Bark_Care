import React, { useEffect, useState } from 'react';
import axios from 'axios';

import TaskItem from './TaskItem';

function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [taskUpdated,setTaskUpdated] = useState(false);

  useEffect(() => {
    const apiUrl = 'https://slbark-default-rtdb.firebaseio.com/tasks.json';
    axios.get(apiUrl).then(response => {
      if (response.data) {
        setTasks(Object.values(response.data));
      }
    });
  });

  const handleDelete = (taskId) => {
    const apiUrl = `https://slbark-default-rtdb.firebaseio.com/tasks/${taskId}.json`;
    axios.delete(apiUrl).then((response) => {
      setTaskUpdated(!taskUpdated);
    });
  };

  const displayTasks = () => {
    return tasks.map((task) => {
      return (
      <TaskItem 
      key={task.id} 
      taskInfo={task} 
      onDelete={handleDelete} 
      />
      );
    });
  };

  return (
    <div className="container mt-4">
      <div className="row row-cols-1 row-cols-md-3">{displayTasks()}</div>
    </div>
  );
}

export default TodoList;
