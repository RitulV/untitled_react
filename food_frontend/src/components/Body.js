import RestroCard from "./RestroCard";
import Shimmer from "./Shimmer";
import { useState, useEffect } from "react";

const Body = () => {
  const [listOfRest, setNewList] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.022505&lng=72.5713621&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setNewList(
      // optional chaining
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  }

  if (listOfRest.length == 0) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="search-bar">
        <button
          onClick={() => {
            const newList = listOfRest.filter(
              (rest) => rest.info.avgRating > 4
            );
            setNewList(newList);
          }}
        >
          Filter
        </button>
      </div>

      <div className="res-card-container">
        {listOfRest.map((restaurant) => (
          <RestroCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
