import React from "react";
import ListingCard from "./ListingCard";
import { useEffect, useState} from "react"


function ListingsContainer({ listings,onDeleteListing }) {
  /// delete from DOM and db
 
  
  
  return (
    <main>
      <ul className="cards">
        {/* use the ListingCard component to display listings */}
      {  listings.map((listings) =>(
      <ListingCard key={listings.id} 
      listings={listings}  
      onDeleteListing={onDeleteListing} />
    ))}
      </ul>
    </main>
  );
}

export default ListingsContainer;
