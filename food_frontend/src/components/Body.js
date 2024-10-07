import RestroCard from "./RestroCard";
import { resList } from "../utils/mockData";

const Body = () => {
  return (
    <div className="body">
      <div className="search-bar">
        <p>&nbsp;</p>
      </div>

      <div className="res-card-container">
        {resList.map((restaurant) => (
          <RestroCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
