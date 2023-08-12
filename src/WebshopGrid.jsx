import React from "react";
import "../public/flavours/strawberry.png";
import "../public/flavours/raspberry.png";
import "../public/flavours/blueberry.png";
import "../public/flavours/plum.png";
import "../public/flavours/grape.png";
import "../public/flavours/mango.png";
import "../public/flavours/passionfruit.png";
import "../public/flavours/orange.png";
import "../public/flavours/lemon.png";
import "../public/flavours/pear.png";
import "../public/flavours/apple.png";


const WebshopGrid = () => {
  const items = [
    { name: "Strawberry", price: 9.99, src: "../public/flavours/strawberry.png" },
    { name: "Raspberry", price: 9.99, src: "../public/flavours/raspberry.png" },
    { name: "Blueberry", price: 9.99, src: "../public/flavours/blueberry.png" },
    { name: "Plum", price: 9.99, src: "../public/flavours/plum.png" },
    { name: "Grape", price: 9.99, src: "../public/flavours/grape.png" },
    { name: "Mango", price: 9.99, src: "../public/flavours/mango.png" },
    { name: "Passionfruit", price: 9.99, src: "../public/flavours/passionfruit.png" },
    { name: "Orange", price: 9.99, src: "../public/flavours/orange.png" },
    { name: "Lemon", price: 9.99, src: "../public/flavours/lemon.png" },
    { name: "Pear", price: 9.99, src: "../public/flavours/pear.png" },
    { name: "Apple", price: 9.99, src: "../public/flavours/apple.png" }
    
  ];

  return (
    <>
      <h2 className = "shopTitle">Shop</h2>
      <div className="webshop-grid">
        {items.map((item, index) => (
          <div className="item" key={index} style={{backgroundImage:`url(${item.src})`, backgroundSize: "cover"}}>
            <div className="item-name">{item.name}</div>
            <div className="item-price">${item.price}</div>
            <button className="add-to-cart-button">Add to Cart</button>
          </div>
        ))}
      </div>
    </>
  );
};

export default WebshopGrid;
