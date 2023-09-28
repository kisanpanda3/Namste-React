import React, { useState } from "react";
import RestaurantCard from "./Restaurant";

const Body = () => {
const [listOfRestaurants,setListOfRestaurants] = useState([
  {
    data: {
      id: 334475,
      name: "KFC",
      cloudinaryImageId: "bdcd233971b7c81bf77e1fa4471280eb",
      cuisines: ["Burgers", "Biriyani", "American", "Snacks", "Fast Food"],
      costForTwo: 40000,
      deliveryTime: 36,
      avgRating: "3.8",
    },
  },
  {
    data: {
      id: 334476,
      name: "Dominos",
      cloudinaryImageId: "bdcd233971b7c81bf77e1fa4471280eb",
      cuisines: ["Burgers", "Biriyani", "American", "Snacks", "Fast Food"],
      costForTwo: 40000,
      deliveryTime: 36,
      avgRating: "4.4",
    },
  },
  {
    data: {
      id: 334477,
      name: "MCD",
      cloudinaryImageId: "bdcd233971b7c81bf77e1fa4471280eb",
      cuisines: ["Burgers", "Biriyani", "American", "Snacks", "Fast Food"],
      costForTwo: 40000,
      deliveryTime: 36,
      avgRating: "4.4",
    },
  },
])
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            // Filter Logic Here
            const filteredList = listOfRestaurants.filter(
              (res) => res.data.avgRating > 4
            );
            setListOfRestaurants(filteredList)
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
