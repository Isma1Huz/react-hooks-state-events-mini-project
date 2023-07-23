import React from "react";

function CategoryFilter({ categories, selectedCategory, onCategoryFilter }) {
  return (
    <div className="categories">
      {categories.map((category) => (
        <button
          key={category}
          className={category === selectedCategory ? "category-button selected" : "category-button"}
          onClick={() => onCategoryFilter(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;
