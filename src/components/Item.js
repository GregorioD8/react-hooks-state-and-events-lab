import React from "react";
import { useState } from "react"

function Item({ name, category }) {

  const [isInCart, setIsInCart] = useState(false)
  const itemClass = isInCart ? "in-cart" : ""
  
  function handleClick(){
    setIsInCart((isInCart) => !isInCart)
  }
  const buttonClass = isInCart ? "remove" : "add"

  return (
    <li className={itemClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button 
      className={buttonClass} 
      onClick={handleClick}>{isInCart ? "Remove from Cart" : "Add to Cart"}
      </button>
    </li>
  );
}

export default Item;
