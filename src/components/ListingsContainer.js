import React, { useState, useEffect } from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ listings, onDeleteListing }) {


  return (
    <div className="">
      <h1>Hello, i'm the card container</h1>

      <ul className="cards">
        {listings.map((listing) => (
          <ListingCard
            key={listing.id}
            listing={listing}
            onDeleteListing={onDeleteListing}
          />
        ))}

      </ul>
    </div>
  );
}

export default ListingsContainer;
