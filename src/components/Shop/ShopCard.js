import React from "react"
// import "./Shop.css"

export const ShopCard = ({ shop }) => {
  return (
    <div className="card">
      <div className="card-content">
        <h1>
          <span className="card-shopname">{shop.name}</span>
        </h1>
        <h2> {shop.city}</h2>
        <p> Notes: {shop.notes}</p>
      </div>
    </div>
  );
}