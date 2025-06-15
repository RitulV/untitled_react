import MenuItemCard from "./MenuItemCard";
import { useState } from "react";

// controlled component
const RestMenuCategory = ({ data, resid, showMenu, setShowIndex }) => {
  // const [showMenu, setShowMenu] = useState(true);

  const handleDropDown = () => {
    // setShowMenu(!showMenu);
    setShowIndex();
  };
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
          src={
            showMenu
              ? "https://ritulv.github.io/image-hosting/pull-up.png"
              : "https://ritulv.github.io/image-hosting/drop-down-3.png"
          }
          onClick={handleDropDown}
        />
      </div>

      {showMenu && <MenuItemCard resId={resid} itemData={data?.itemCards} />}
    </div>
  );
};

export default RestMenuCategory;
