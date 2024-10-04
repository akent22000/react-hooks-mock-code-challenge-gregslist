import React, { useState } from "react";

function ListingCard({ listing, onDeleteListing }) {
  const { id, description, image, location } = listing
  const [fav, setFav] = useState(false);

  function handleFav() {
    setFav(!fav)
  }

  function handleDeleteClick() {
    fetch(`http://localhost:6001/listings/${id}`, {
      method: "DELETE",
    })
    onDeleteListing(id)

  }

  return (

    <div className="">
      <li className="card">
        <div className="image">
          <span className="price">$0</span>
          <img src={image} alt={description} />
        </div>

        <div className="details">
          {fav ? (
            <button className="emoji-button favorite active"
              onClick={handleFav}
            >★</button>
          ) : (
            <button className="emoji-button favorite"
              onClick={handleFav}
            >☆</button>
          )}

          <strong>{description}</strong>
          <span> · {location}</span>
          <button className="emoji-button delete"
            onClick={handleDeleteClick}
          >🗑</button>
        </div>
      </li>
    </div>
  );
}

export default ListingCard;