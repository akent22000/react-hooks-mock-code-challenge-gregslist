import React, { useState, useEffect } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [listings, setListings] = useState([]);
  const [search, setSearch] = useState("")

  // Add useEffect hook
  useEffect(() => {
    fetch('http://localhost:6001/listings')
      .then((r) => r.json())
      .then((listings) => setListings(listings))
  }, [])

  function deleteListing(id) {
    const updatedListing = listings.filter(listing => listing.id !== id)
    setListings(updatedListing)
  }

  const filteredListings = listings
    .filter(listing => listing.description.toLowerCase().includes(search.toLowerCase()));


  return (
    <div className="app">
      <Header
        onSearchChange={setSearch}
        search={search}


      />
      <ListingsContainer
        listings={filteredListings}
        onDeleteListing={deleteListing}
        search={search}
      />

    </div>
  );
}

export default App;
