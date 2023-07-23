import React from "react";
import Task from "./Task";

function TaskList({ tasks, onDeleteTask }) {
  return (
    <div className="tasks">
      {tasks.map((task, index) => (
        <Task
          key={index}
          task={task.text}
          category={task.category}
          onDelete={onDeleteTask} // Pass onDeleteTask as a prop to Task component
        />
      ))}
    </div>
  );
}

export default TaskList;
