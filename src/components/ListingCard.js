import React from "react";
import ListingsContainer from "./ListingsContainer";
import { useState } from "react"

function ListingCard({listings}) {
  /// favorite function delete function
  const { id, description, image, location } = listings
  const [fav, setFav] = useState (false)


  
  
  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {fav? (
          <button onClick={() => setFav(false)} className="emoji-button favorite active">★</button>
        ) : (
          <button onClick={() => setFav(true) } className="emoji-button favorite">☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
