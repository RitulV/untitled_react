import { CDN_URL } from "../utils/constants";

const RestroCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, areaName } =
    resData?.info;
  return (
    <div className="res-card">
      <img src={CDN_URL + cloudinaryImageId} className="res-card-img" />
      <p>{name}</p>
      <p>{cuisines.join(", ")}</p>
      <p>{avgRating}⭐</p>
      <p>{areaName}</p>
    </div>
  );
};

export default RestroCard;
