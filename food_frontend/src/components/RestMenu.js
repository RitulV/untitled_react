import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MENU_CARD } from "../utils/constants"

const RestMenu = () => {
  const [resInfo, setData] = useState(null);
  const { resId } = useParams(); // to get the restaurant id from the url

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const response = await fetch(MENU_CARD + resId);
    const json = await response.json();
    console.log(json);
    setData(json.data);
  };

  const resData = resInfo?.cards[2]?.card?.card?.info;

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
          <img src="https://ritulv.github.io/image-hosting/star-logo.png"></img>
          <span>
            {resData?.avgRatingString}
            {" ("}
            {resData?.totalRatingsString}
            {") "}
          </span>
          <span className="quick-info-first-dot">·</span>
          <span>{resData?.costForTwoMessage}</span>
        </div>

        <div className="quick-info-second">
          {resData?.cuisines.join(", ")}
        </div>

        <div className="quick-info-third">
          <img src="https://ritulv.github.io/image-hosting/loc-pin.png"></img>
          <span>Outlet</span>
          <p>{resData?.areaName}</p>
        </div>

        <div className="quick-info-fourth">
          <img src="https://ritulv.github.io/image-hosting/timer.png"></img>
          <span>{resData?.sla?.slaString}</span>
        </div>
      </div>

      <hr></hr>

      <div className="res-menu-list-container">
        
      </div>

    </div>
  );
};

export default RestMenu;
