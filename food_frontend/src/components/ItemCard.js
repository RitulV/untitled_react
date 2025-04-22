import React, { useState, useEffect, useRef, useContext } from "react";
import { useDispatch } from "react-redux";

import { IMG_CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";
import cartContext from "../utils/cartContext";

const ItemCard = (props) => {
  const { itemData, nameOfRest } = props;
  const dispatch = useDispatch(); // creating a consumer for actions which will help in dispatching actions
  const { restaurantName, setRestName } = useContext(cartContext);

  const [isExpanded, setIsExpanded] = useState(false);
  const [isTruncatable, setIsTruncatable] = useState(false);
  const paragraphRef = useRef(null);

  const handleAddItem = () => {
    if (
      restaurantName === "default restaurant" ||
      restaurantName == nameOfRest
    ) {
      // console.log("restaurant name from context: ", restaurantName);
      // console.log("restaurant name passed from parent: ", nameOfRest);
      setRestName(nameOfRest);
      dispatch(addItem(itemData)); // dispatches an action

      console.log("Item added!!!");
    } else {
      console.log(
        "Item couldn't be added as it is from a different restaurant"
      );
    }
  };

  useEffect(() => {
    if (paragraphRef.current) {
      // check if content exceeds two lines
      const { scrollHeight, offsetHeight } = paragraphRef.current;
      if (scrollHeight > offsetHeight) {
        setIsTruncatable(true);
      }
    }
  }, []);

  const toggleBtn = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="res-menu-list-item">
      <div className="res-menu-list-item-1">
        {itemData.isVeg == 1 || itemData.isVeg != null ? (
          <img src="https://ritulv.github.io/image-hosting/icon-veg.png" />
        ) : (
          <img src="https://ritulv.github.io/image-hosting/icon-non-veg.png" />
        )}
      </div>

      <div className="res-menu-list-item-container">
        <div className="res-menu-list-item-details">
          <div className="res-menu-list-item-1">
            <span>{itemData.name}</span>
          </div>

          <div className="res-menu-list-item-2">
            <img src="https://ritulv.github.io/image-hosting/rupee.png" />
            <span>{itemData.price / 100 || itemData.defaultPrice / 100}</span>
          </div>

          {itemData.ratings.aggregatedRating.rating ? (
            <div className="res-menu-list-item-3">
              <img src="https://ritulv.github.io/image-hosting/star.png" />
              <span
                style={{
                  color: "rgb(57, 187, 57)",
                  fontWeight: "600",
                }}
              >
                {itemData.ratings.aggregatedRating.rating}
              </span>
              <span>({itemData.ratings.aggregatedRating.ratingCountV2})</span>
            </div>
          ) : (
            ""
          )}

          {itemData.description ? (
            <div className="res-menu-list-item-desc-container">
              {/* dynamic assignment of className */}
              <span
                ref={paragraphRef}
                className={`paragraph ${isExpanded ? "expanded" : "truncated"}`}
              >
                {itemData.description}
              </span>
              {isTruncatable && (
                <button className="res-menu-list-item-btn" onClick={toggleBtn}>
                  {isExpanded ? "Less" : "More"}
                </button>
              )}
            </div>
          ) : (
            ""
          )}
        </div>

        <div className="res-menu-list-item-image">
          <div className="flex-col justify-items-center h-[180px]">
            <img
              className="h-[144px] w-[156px] rounded-md"
              src={IMG_CDN_URL + itemData.imageId}
            />
            <button
              className="border-transparent w-15 h-8 bg-[rgb(57,187,57)] rounded-md cursor-pointer text-white font-bold 
                         hover:scale-90 duration-[0.3s] ease"
              onClick={handleAddItem}
            >
              Add +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
