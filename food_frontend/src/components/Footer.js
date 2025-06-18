import { FOOT_LOGO, G_PLAY_LOGO, APP_STORE_LOGO } from "../utils/constants";
import {Link} from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="app-down-container">
        <div className="app-down-promo">Download LunchBox app now</div>

        <div className="app-down-info">
          <div className="app-down-item">
            <img src={G_PLAY_LOGO}></img>
          </div>
          <div className="app-down-item">
            <img src={APP_STORE_LOGO}></img>
          </div>
        </div>
      </div>

      <div className="app-info-container">
        <div className="company">
          <div className="company-info">
            <h1 className="font-semibold">
              <img src={FOOT_LOGO}></img>
              &nbsp;LunchBox
            </h1>
            <p>©️ 2024 Big Tech</p>
          </div>
        </div>

        <div className="sidebar1">
          <div className="company-details-container">
            <h2 className="font-semibold">Company</h2>
            <div className="company-details-items">About</div>
            <div className="company-details-items">Careers</div>
            <div className="company-details-items">
              <Link to="/company/team">Team</Link>
            </div>
          </div>
        </div>

        <div className="sidebar2">
          <div className="delivery-details-container">
            <h2 className="font-semibold">Now delivering to:</h2>
            <div className="delivery-details-items">Bangalore</div>
            <div className="delivery-details-items">Hyderabad</div>
            <div className="delivery-details-items">Pune</div>
            <div className="delivery-details-items">Chennai</div>
            <div className="delivery-details-items">Ahmedabad</div>
            <div className="delivery-details-items">Jaipur</div>
          </div>
        </div>

        <div className="content1">
          <div className="content1-details-container">
            <h2 className="font-semibold">Contact us</h2>
            <div className="content1-details-items">Help & Support</div>
            <div className="content1-details-items">Partnership</div>
          </div>
        </div>

        <div className="content2">
          <div className="content2-details-container">
            <h2 className="font-semibold">Legal</h2>
            <div className="content2-details-items">Terms & Condition</div>
            <div className="content2-details-items">Cookie Policy</div>
            <div className="content2-details-items">Privacy Policy</div>
            <div className="content2-details-items">Investment Policy</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
