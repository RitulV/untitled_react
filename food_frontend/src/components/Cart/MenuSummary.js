import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import useRestMenu from "../../utils/useRestMenu";
import cartContext from "../../utils/cartContext";
import { useContext } from "react";
import { CDN_URL } from "../../utils/constants";

import { addItem, removeItem } from "../../utils/cartSlice";

const MenuSummary = () => {
  const [billTotal, setBillTotal] = useState(0);
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.items);
  const { restaurantId } = useContext(cartContext);
  const resInfo = useRestMenu(restaurantId);
  const restData = resInfo?.cards[2]?.card?.card?.info;

  // console.log(cartItems);

  useEffect(() => {
    if (cartItems.length >= 1) {
      setBillTotal(0);
      cartItems.map((item) => {
        setBillTotal(
          ((item.price / 100 || item.defaultPrice / 100) * item.quantity) + billTotal
        );
      })
    }
  }, [cartItems.length]);

  const handleAddItem = (item) => {
    console.log("addItem clicked");
    dispatch(addItem(item));
  }

  const handleRemoveItem = (item) => {
    console.log("removeItem clicked");
    dispatch(removeItem(item));
  }

  return (
    <div className="grid grid-rows-6 h-[100%] gap-2">
      <div className="place-self-center h-[95%] w-[100%] flex justify-center items-center">
        <div className="flex justify-center items-center h-[70px] mt-4">
          <div className="grid grid-cols-3 gap-1 w-[320px]">
            {restData ? (
              <img
                src={CDN_URL + restData?.cloudinaryImageId}
                className="justify-self-center h-[60px] w-[60px]"
              />
            ) : (
              <div className="h-[60px] w-[60px]"></div>
            )}

            <div className="col-span-2 grid grid-rows-2">
              <span className="subpixel-antialiased font-semibold font-sans text-[17px]">
                {restData?.name}
              </span>
              <span className="font-sans text-[13px] text-[#02060CB3]">
                {restData?.areaName}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="row-span-4 place-self-center inset-shadow-sm inset-shadow-stone-700/80 overflow-y-auto h-[100%] w-[100%] flex flex-col items-center justify-start gap-4">
        <div className="h-1.5"></div>
        {cartItems.map((item) => (
          <div className="grid grid-cols-4 w-[80%]">
            <div className="place-self-start col-span-2 flex justify-center items-center gap-1.5">
              {item.isVeg == 1 || item.isVeg != null ? (
                <img
                  className="h-[15px] w-[15px]"
                  src="https://ritulv.github.io/image-hosting/icon-veg.png"
                />
              ) : (
                <img
                  className="h-[15px] w-[15px]"
                  src="https://ritulv.github.io/image-hosting/icon-non-veg.png"
                />
              )}
              {item.name}
            </div>

            <div className="place-self-center grid grid-cols-3 gap-2">
              <div
                className="place-self-center font-bold text-lg cursor-pointer"
                onClick={() =>
                  handleRemoveItem({
                    id: item.id,
                    quantity: item.quantity,
                  })
                }
              >
                &#x2796;
              </div>
              <div className="place-self-center">x{item.quantity}</div>
              <div
                className="place-self-center font-bold text-lg cursor-pointer"
                onClick={() =>
                  handleAddItem({
                    id: item.id,
                    quantity: item.quantity,
                  })
                }
              >
                &#x2795;
              </div>
            </div>

            <div className="place-self-end flex items-center">
              <img
                className="h-[15px] w-[15px]"
                src="https://ritulv.github.io/image-hosting/rupee.png"
              />
              <div>
                {(item.price / 100 || item.defaultPrice / 100) * item.quantity}
              </div>
            </div>
          </div>
        ))}
        <div className="h-1.5"></div>
      </div>

      <div className="place-self-center h-[100%] w-[100%] flex justify-center items-center">
        <div className="grid grid-cols-6 w-[78%]">
          <div className="col-span-2 place-self-start font-semibold">
            Bill Total:
          </div>
          <div className="col-span-4 place-self-end font-semibold flex items-center">
            <img
              className="h-[15px] w-[15px]"
              src="https://ritulv.github.io/image-hosting/rupee.png"
            />
            <div>
              {/* {billTotal} */}
              NIL
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuSummary;
