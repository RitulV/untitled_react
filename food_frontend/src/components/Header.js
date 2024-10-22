import { useState } from "react";
import { Link } from "react-router-dom";
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
        <div className="nav-items">
          <Link to="/">Home</Link>
        </div>
        <div className="nav-items">
          <Link to="/offers">Offer</Link>
        </div>
        <div className="nav-items">
          <Link to="/cart">Cart</Link>
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
