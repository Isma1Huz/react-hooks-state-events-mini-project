import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [taskText, setTaskText] = useState("");
  const [taskCategory, setTaskCategory] = useState("");

  const handleTextChange = (event) => {
    setTaskText(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setTaskCategory(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (taskText.trim() === "" || taskCategory === "") {
      return; // Do not add empty tasks
    }

    const newTask = {
      text: taskText,
      category: taskCategory,
    };

    onTaskFormSubmit(newTask);

    // Clear the form fields after submission
    setTaskText("");
    setTaskCategory("");
  };

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" value={taskText} onChange={handleTextChange} />
      </label>
      <label>
        Category
        <select name="category" value={taskCategory} onChange={handleCategoryChange}>
          <option value="">Select a category</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
