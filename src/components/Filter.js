import React from "react";

function Filter({ onCategoryChange, onSearchChange, search }) {

  function handleSearchChange(event) {
    onSearchChange(event.target.value);
  }

  return (
    <div className="Filter">
      <input
        type="text"
        placeholder="Search"
        value={search}// Pass search prop as value
        onChange={handleSearchChange}// Updated prop name
      />
      <select name="filter" onChange={onCategoryChange}>
        <option value="All">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
}

export default Filter;
