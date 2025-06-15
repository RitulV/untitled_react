import { useSelector } from "react-redux";
import useRestMenu from "../../utils/useRestMenu";
import cartContext from "../../utils/cartContext";
import { useContext } from "react";

const MenuSummary = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const { restaurantId } = useContext(cartContext);
  const resInfo = useRestMenu(restaurantId);
  // console.log(resInfo);

  // const { cloudinaryImageId, name } = resInfo?.cards[2]?.card?.card?.info;
  console.log(resInfo?.cards[2]?.card?.card?.info);
  // console.log(name);
  return (
    <div>
      <div>Restaurant logo and name</div>
      <div></div>
      <div>Bill</div>
    </div>
  );
};

export default MenuSummary;
