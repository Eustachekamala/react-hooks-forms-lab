import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ onItemFormSubmit }) {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("Produce");

  // TODO: Add unique id to each item
  const [items, setItems] = useState([{ name, category }]); 

  // Handles the change event for the form fields
  function handleChange(event) {
    const { name, value } = event.target;
    if (name === "name") {
      setName(value);
    } else if (name === "category") {
      setCategory(value);
    }
  }
  
  // Handles the submit event for the form
  function handleSubmit(event) {
    event.preventDefault();

    // Check for empty fields
    if (!name || !category) {
      alert("Please fill out all fields.");
      return;
    }

    const newItem = {
      id: uuid(), // Generate a unique id for the new item
      name: name,
      category: category,
    };

    onItemFormSubmit(newItem);

    // Call the parent function to add the new item
    setItems((prevItems) => [...prevItems, { ...newItem, id: prevItems.length + 1 }]);

    // Clear the form
    setName("");
    setCategory("Produce");
  }

  return (
    <form onSubmit={handleSubmit} className="NewItem">
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          required="required"
        />
      </label>

      <label>
        Category:
        <select
          name="category"
          value={category}
          onChange={handleChange}
        >
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">
        Add to List
      </button>
    </form>
  );
}

export default ItemForm;
