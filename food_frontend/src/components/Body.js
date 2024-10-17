import RestroCard from "./RestroCard";
import Shimmer from "./Shimmer";
import { useState, useEffect } from "react";

const Body = () => {
  const [listOfRest, setNewList] = useState([]); // the original list containing all the restaurants
  const [filteredListOfRest, setNewfilteredListOfRest] = useState([]); // the list that will be shown when filter is applied
  const [searchText, setSearchText] = useState(""); // this will store the value of the search text box

  // Fetch the restaurant data on mount
  useEffect(() => {
    fetchData();
  }, []);

  // Function to fetch the restaurant data
  async function fetchData() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.022505&lng=72.5713621&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    const restaurants =
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

    // Set both original and filtered list initially
    setNewList(restaurants);
    setNewfilteredListOfRest(restaurants);
  }

  // Search filtering
  useEffect(() => {
    const filteredData = listOfRest.filter(
      (restaurant) =>
        restaurant.info.name.toLowerCase().includes(searchText.toLowerCase()) // Filter based on restaurant name
    );
    setNewfilteredListOfRest(filteredData);
  }, [searchText, listOfRest]); // Update filtered list when searchText or listOfRest changes

  // Conditional rendering - shimmer UI when loading
  return listOfRest.length === 0 ? ( <Shimmer />) : (
    <div className="body">
      <div className="search-bar-container">
        <button className="search-bar-btn">Filter</button>
        <button className="search-bar-btn">Sort By</button>
        <button className="search-bar-btn">Fast Delivery</button>
        <button className="search-bar-btn">Pure Veg</button>
        <button
          onClick={() => {
            const newList = listOfRest.filter(
              (rest) => rest.info.avgRating >= 4.0
            );
            setNewfilteredListOfRest(newList); // Update filtered list
          }}
          className="search-bar-btn"
        >
          Ratings 4.0+
        </button>
        <input
          className="search-bar-input"
          type="text"
          value={searchText}
          placeholder="🔎 Search..."
          onChange={(e) => setSearchText(e.target.value)} // Update searchText as user types
        />
      </div>

      <div className="res-card-container">
        {filteredListOfRest.map((restaurant) => (
          <RestroCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
