import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [itemsList, setItemsList] = useState([...items]);
  const [searchTerm, setSearchTerm] = useState("");

  // Handles the category change event
  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  // Handles the search term change event
  function handleSearchTermChange(term) {
    setSearchTerm(term);
  }

  // Filters the items based on the selected category and search term
  const itemsToDisplay = itemsList.filter((item) => {
    const matchesCategory = selectedCategory === "All" || item.category === selectedCategory;
    const matchesSearchTerm = item.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearchTerm;
  });

  // Handles the item form submit event
  function addItem(newItem) {
    // Generate a unique id for the new item
    const newId = itemsList.length ? Math.max(itemsList.map(item => item.id)) + 1 : 1;
    setItemsList((prevItems) => [...prevItems, { ...newItem, id: newId }]);
  }

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={addItem} />
      <Filter
        onCategoryChange={handleCategoryChange}
        onSearchChange={handleSearchTermChange}
        search={searchTerm} // Pass searchTerm as search prop
      />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
