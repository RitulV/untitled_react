import { useState } from "react";
import MenuItemCard from "./MenuItemCard";

const RestMenuCategory = (props) => {
    const { data } = props;
    const [isDropped, setIsDropped] = useState(true);

    const handleDropDown = () => {
        setIsDropped(!isDropped);
    }
//   console.log(data);

  return (
    <div>
      <div className="mx-auto my-4 flex justify-between">
        <p
          className="text-[20px] font-bold cursor-pointer"
          onClick={handleDropDown}
        >
          {data.title} ({data.itemCards.length})
        </p>
        <img
          className="mr-4 w-[18px] h-[18px] self-center cursor-pointer"
          src="https://ritulv.github.io/image-hosting/drop-down-3.png"
          onClick={handleDropDown}
        />
      </div>

      {isDropped && <MenuItemCard itemData={data?.itemCards} />}
    </div>
  );
};

export default RestMenuCategory;
