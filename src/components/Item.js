import React, { useState } from "react";

function Item({ name, category }) {

  const [inCart, setInCart] = useState(false);

  function handleCartClick() {
    setInCart((prevCartStatus) => !prevCartStatus);
  }

  let cartClass = inCart ? "in-cart" : "";
  let btnText = inCart ? "Remove From Cart" : "Add To Cart";
  let btnClass = inCart ? "remove" : "add";

  return (
    <li className={cartClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleCartClick} className={btnClass}>{btnText}</button>
    </li>
  );
}

export default Item;
