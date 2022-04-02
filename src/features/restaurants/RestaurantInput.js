import React, { useState } from "react";
import { useDispatch } from "react-redux"
import { restaurantAdded } from "./restaurantsSlice"

function RestaurantInput() {
  const [name, setName] = useState("")
  const dispatch = useDispatch()

  function handleChange(e) {
    setName(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()
    dispatch(restaurantAdded(name))
    setName("")
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name
        <input 
          type="text" 
          name="name"
          value={name}
          onChange={handleChange}
        />
      </label>
      <input type="submit" value="Add Restaurant"/>
    </form>
  );
}

export default RestaurantInput;
