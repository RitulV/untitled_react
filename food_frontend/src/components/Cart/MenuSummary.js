import { useSelector } from "react-redux";

const MenuSummary = () => {
  const cartItems = useSelector((store) => store.cart.items);
  // console.log(cartItems);
  // console.log(typeof cartItems);
  return (
    <div>
      <div>Restaurant logo and name</div>
      <div>
        
      </div>
      <div>Bill</div>
    </div>
  );
};

export default MenuSummary;
