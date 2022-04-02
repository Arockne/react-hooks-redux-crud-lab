import React from "react";
import ReviewsContainer from "../reviews/ReviewsContainer";
import { restaurantRemoved } from "./restaurantsSlice"
import { useDispatch } from "react-redux"

function Restaurant({ restaurant }) {
  const dispatch = useDispatch();

  const { id, name } = restaurant;

  function handleDeleteClick() {
    dispatch(restaurantRemoved(id))  
  }
  
  return (
    <div>
      <li>
        {name}
        <button onClick={handleDeleteClick}> Delete Restaurant </button>
        <ReviewsContainer restaurantId={id} />
      </li>
    </div>
  );
}

export default Restaurant;
