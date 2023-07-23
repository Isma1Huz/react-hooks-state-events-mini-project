import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [selectedCategory, setSelectedCategory] = useState("All"); // Default to "All" category

  function addTask(newTask) {
    setTasks((prevTasks) => [...prevTasks, newTask]);
  }

  function deleteTask(taskToDelete) {
    setTasks((prevTasks) => prevTasks.filter((task) => task.text !== taskToDelete));
  }

  function handleCategoryFilter(category) {
    setSelectedCategory(category);
  }

  // Filter tasks based on the selected category
  const filteredTasks = selectedCategory === "All" ? tasks : tasks.filter((task) => task.category === selectedCategory);

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} selectedCategory={selectedCategory} onCategoryFilter={handleCategoryFilter} />
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={addTask} />
      <TaskList tasks={filteredTasks} onDeleteTask={deleteTask} />
    </div>
  );
}

export default App;
