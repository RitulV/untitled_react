import { useState } from "react";
import { HEAD_LOGO } from "../utils/constants";

const Header = () => {
  // whole header component is rendered when setter method is called
  const [logInBtn, setlogInBtn] = useState("Log in");

  return (
    <div className="header">
      <div className="logo-img">
        <img src={HEAD_LOGO}></img>
      </div>
      <div className="nav-items-container">
        <div className="nav-items">Search</div>
        <div className="nav-items">Offers</div>
        <div className="nav-items">Cart</div>
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
