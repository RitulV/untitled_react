import { useParams } from "react-router-dom";
import MenuItemCard from "./MenuItemCard";
import useRestMenu from "../utils/useRestMenu";
import MenuItemCardShimmer from "./MenuItemCardShimmer";
import RestMenuCategory from "./RestMenuCategory";

const RestMenu = () => {
  const { resId } = useParams(); // to get the restaurant id from the url

  const resInfo = useRestMenu(resId);

  // to be displayed in the quick-info box for the restaurant
  const resData = resInfo?.cards[2]?.card?.card?.info;

  // to be displayed in the menu item list
  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
    (c) =>
      c.card?.["card"]?.["@type"] ==
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  // console.log(categories);

  return (
    <div className="res-menu-container">
      <div className="res-menu-path">
        <span>Home</span>
        <span>/</span>
        <span>{resData?.city}</span>
        <span>/</span>
        <span>{resData?.name}</span>
      </div>
      <div className="res-menu-name">
        <h2>{resData?.name}</h2>
      </div>
      <div className="quick-info-card">
        <div className="quick-info-first">
          <img src="https://ritulv.github.io/image-hosting/star-logo.png" />
          <span>
            {resData?.avgRatingString}
            {" ("}
            {resData?.totalRatingsString}
            {") "}
          </span>
          <span className="quick-info-first-dot">·</span>
          <span>{resData?.costForTwoMessage}</span>
        </div>

        <div className="quick-info-second">{resData?.cuisines.join(", ")}</div>

        <div className="quick-info-third">
          <img src="https://ritulv.github.io/image-hosting/loc-pin.png" />
          <span>Outlet</span>
          <p>{resData?.areaName}</p>
        </div>

        <div className="quick-info-fourth">
          <img src="https://ritulv.github.io/image-hosting/timer.png" />
          <span>{resData?.sla?.slaString}</span>
        </div>
      </div>
      <hr />

      <div>
        {categories == undefined ? (
          <MenuItemCardShimmer />
        ) : (
          <div>
            {categories.map((category, index) => (
              <RestMenuCategory key={index} data={category.card?.card} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default RestMenu;
