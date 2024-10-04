import React, { useState, useEffect } from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ listings, onDeleteListing }) {


  return (
    <div className="">
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
