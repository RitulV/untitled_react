import { HEAD_LOGO } from "../utils/constants";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-img">
        <img src={HEAD_LOGO}></img>
      </div>
      <div className="nav-items-container">
        <div className="nav-items">Search</div>
        <div className="nav-items">Offers</div>
        <div className="nav-items">Sign in</div>
        <div className="nav-items">Cart</div>
      </div>
    </div>
  );
};

export default Header;