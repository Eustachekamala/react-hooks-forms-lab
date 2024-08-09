import React, { useState } from "react";
import items from "../data/items";

function Item({ name, category }) {
  const [isInCart, setIsInCart] = useState(false);  

  const item = items.find((item) => item.name === name);

  if(!item) {
    return null;
  }

  // console.log(item);

  function handleAddToCartClick() {
    setIsInCart((isInCart) => !isInCart);
  }

  return (
    <li className={isInCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button
        className={isInCart ? "remove" : "add"}
        onClick={handleAddToCartClick}
      >
        {isInCart ? "Remove From" : "Add to"} Cart
      </button>
    </li>
  );
}

export default Item;
