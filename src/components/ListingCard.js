import React from "react";
import ListingsContainer from "./ListingsContainer";
import { useState } from "react"

function ListingCard({listings,onDeleteListing}) {
  /// favorite function delete function
  const { id, description, image, location,  } = listings
  const [fav, setFav] = useState (false)


  function handleDeleteClick() {
    fetch(`http://localhost:6001/listings${id}`, {
      method:"DELETE",
    })
    onDeleteListing(id)
  }
  
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
        <button onClick={handleDeleteClick} className="emoji-button delete"  >🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
