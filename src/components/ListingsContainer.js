import React from "react";
import ListingCard from "./ListingCard";
import { useEffect, useState} from "react"


function ListingsContainer({search}) {
  /// delete from DOM and db
  const [listings, setListings] = useState([]);
 
  
  useEffect(() => {
    fetch(`http://localhost:6001/listings`)
    .then (resp => resp.json())
    .then ((listings) => setListings(listings))
  }, []);
  
  
  return (
    <main>
      <ul className="cards">
        {/* use the ListingCard component to display listings */}
      {  listings.map((listings) =>(
      <ListingCard key={listings.id} listings={listings}/>
    ))}
      </ul>
    </main>
  );
}

export default ListingsContainer;
