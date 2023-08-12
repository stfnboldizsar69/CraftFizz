import React from "react";
import "./WebshopGrid.css";

const WebshopGrid = () => {
  const items = [
    { name: "strawberry", price: 19.99 },
    { name: "raspberry", price: 19.99 },
    { name: "blueberry", price: 19.99 },
    { name: "plum", price: 19.99 },
    { name: "grape", price: 19.99 },
    { name: "mango", price: 19.99 },
    { name: "passion fruit", price: 19.99 },
    { name: "orange", price: 19.99 },
    { name: "citrom", price: 19.99 },
    { name: "pear", price: 19.99 },
    { name: "Apple", price: 19.99 }
    
  ];

  return (
    <div className="webshop-grid">
      {items.map((item, index) => (
        <div className="item" key={index}>
          <div className="item-name">{item.name}</div>
          <div className="item-price">${item.price}</div>
          <button className="add-to-cart-button">Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default WebshopGrid;
