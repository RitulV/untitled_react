import { useEffect, useState } from "react";

const RestMenu = () => {
  const [resInfo, setData] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const response = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=23.022505&lng=72.5713621&restaurantId=47589&catalog_qa=undefined&submitAction=ENTER"
    );
    const json = await response.json();
    console.log(json);
    setData(json.data);
  };

  return (
    <div className="res-menu-container">
      <div className="res-menu-path">
        <span>Home</span>
        <span>/</span>
        <span>{resInfo?.cards[2]?.card?.card?.info?.city}</span>
        <span>/</span>
        <span>{resInfo?.cards[2]?.card?.card?.info?.name}</span>
      </div>

      <div className="res-menu-name">
        <h2>{resInfo?.cards[2]?.card?.card?.info?.name}</h2>
      </div>

      <div className="quick-info-card">
        <div className="quick-info-first">
          <img src="https://ritulv.github.io/image-hosting/star-logo.png"></img>
          <span>
            {resInfo?.cards[2]?.card?.card?.info?.avgRatingString}
            {" ("}
            {resInfo?.cards[2]?.card?.card?.info?.totalRatingsString}
            {") "}
          </span>
          <span className="quick-info-first-dot">·</span>
          <span>{resInfo?.cards[2]?.card?.card?.info?.costForTwoMessage}</span>
        </div>

        <div className="quick-info-second">
          {resInfo?.cards[2]?.card?.card?.info?.cuisines.join(", ")}
        </div>

        <div className="quick-info-third">
          <img src="https://ritulv.github.io/image-hosting/loc-pin.png"></img>
          <span>Outlet</span>
          <p>{resInfo?.cards[2]?.card?.card?.info?.areaName}</p>
        </div>

        <div className="quick-info-fourth">
          <img src="https://ritulv.github.io/image-hosting/timer.png"></img>
          <span>{resInfo?.cards[2]?.card?.card?.info?.sla?.slaString}</span>
        </div>
      </div>

      <div className="res-menu-list-container">
        
      </div>

    </div>
  );
};

export default RestMenu;
