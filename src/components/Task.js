import React from "react";

function Task({ category, task, onDelete }) {
  const handleDeleteClick = () => {
    onDelete(task);
  };

  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{task}</div>
      <button className="delete" onClick={handleDeleteClick}>
        X
      </button>
    </div>
  );
}

export default Task;
