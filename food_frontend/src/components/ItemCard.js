import React, { useState, useEffect, useRef } from "react";
import { IMG_CDN_URL } from "../utils/constants";

const ItemCard = (props) => {
  const { itemData } = props;

  const [isExpanded, setIsExpanded] = useState(false);
  const [isTruncatable, setIsTruncatable] = useState(false);
  const paragraphRef = useRef(null);

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

  console.log(itemData);
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
            <span>{itemData.price / 100}</span>
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
          <img src={IMG_CDN_URL + itemData.imageId} />
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
