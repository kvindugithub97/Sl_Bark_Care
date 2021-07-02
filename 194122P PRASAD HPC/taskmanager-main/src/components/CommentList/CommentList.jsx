import React, { useEffect, useState } from 'react';
import axios from 'axios';

import CommentItem from './CommentItem';

function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [taskUpdated,setTaskUpdated] = useState(false);

  useEffect(() => {
    const apiUrl = 'https://comment-20636-default-rtdb.firebaseio.com/comment.json';
    axios.get(apiUrl).then(response => {
      if (response.data) {
        setTasks(Object.values(response.data));
      }
    });
  });

  const handleDelete = (taskId) => {
    const apiUrl = `https://comment-20636-default-rtdb.firebaseio.com/comment/${taskId}.json`;
    axios.delete(apiUrl).then((response) => {
      setTaskUpdated(!taskUpdated);
    });
  };

  const displayTasks = () => {
    return tasks.map((task) => {
      return (
      <CommentItem 
      key={task.id} 
      taskInfo={task} 
      onDelete={handleDelete} 
      />
      );
    });
  };

  return (
    <div className="container mt-4">
      <div className="comment-text text-justify mt-2">{displayTasks()}</div>
    </div>
  );
}

export default TodoList;
