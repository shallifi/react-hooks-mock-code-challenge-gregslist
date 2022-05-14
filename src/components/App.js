import React from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";
import { useState, useEffect } from "react"


function App() {
  const [listings, setListings] = useState([]);
  const [search, setSearch] = useState("")
 
  
  useEffect(() => {
    fetch(`http://localhost:6001/listings`)
    .then (resp => resp.json())
    .then ((listings) => setListings(listings))
  }, []);

const shownListings = listings.filter((listings) =>
  listings.description.toLowerCase().includes(search.toLowerCase())
)

  function handleDelete(deletedListings){
    const filteredListings = listings.filter((listings) => listings.id !== deletedListings); setListings(filteredListings)
  }


  return (
    <div className="app">
      <Header onSearch={setSearch}/>
      <ListingsContainer 
       listings={shownListings}
       onDeleteListing={handleDelete}
        />
    </div>
  );
}

export default App;
