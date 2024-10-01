import React, { useState, useEffect } from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ }) {
  const [fav, setFav] = useState(false);

  function handleFav() {
    setFav(!fav)
  }

  function handleDeleteClick() {
    fetch(`http://localhost:6001/listings/${id}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then(() => onDeleteListing(listing));
  }


  function handleDeleteListing(deledtedListing) {
    const newListingArray = listings.filter((listing) => listing.id !== deledtedListing.id);
    setListings(newListingArray)
  }



  return (
    <div className="">
      <ul className="cards">
        <ListingCard

          onDeleteListing={handleDeleteListing}
        />


      </ul>
    </div>
  );
}

export default ListingsContainer;