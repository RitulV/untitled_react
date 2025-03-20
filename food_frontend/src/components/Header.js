import { useState } from "react";
import { Link } from "react-router-dom";
import { HEAD_LOGO } from "../utils/constants";
import { useSelector } from "react-redux";

const Header = () => {
  // whole header component is rendered when setter method is called
  const [logInBtn, setlogInBtn] = useState("Log in");

  // subscribing to the store using a selector (Redux)
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="header">
      <div className="logo-img">
        <img src={HEAD_LOGO}></img>
      </div>
      <div className="nav-items-container">
        <div className="nav-items">
          <Link to="/">Home</Link>
        </div>
        <div className="nav-items">
          <Link to="/offers">Offer</Link>
        </div>
        <div>
          <Link to="/cart" className="nav-item-cart">
            Cart
            <div className="w-[22px] flex justify-center border border-transparent rounded-bl-2xl rounded-br-2xl bg-[rgb(57,187,57)] text-white font-bold">
              {cartItems.length}
            </div>
          </Link>
        </div>
        <div
          className="nav-items"
          onClick={() => {
            logInBtn == "Log in"
              ? setlogInBtn("Log out")
              : setlogInBtn("Log in");
          }}
        >
          {logInBtn}
        </div>
      </div>
    </div>
  );
};

export default Header;
