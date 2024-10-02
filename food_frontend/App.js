import React from "react";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-img">
        <img src="https://ritulv.github.io/image-hosting/1.png"></img>
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

const RestroCard = (props) => {
  return (
    <div className="res-card ">
      <img src={props.resImage} className="res-card-img"></img>
      <p>{props.resName}</p>
      <p>{props.resCuisine}</p>
      <p>{props.resRating}⭐</p>
      <p>Price for 2: ${props.resPrice}</p>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search-bar">
        <p>&nbsp;</p>
      </div>

      <div className="res-card-container">
        <RestroCard
          resName="Subway"
          resCuisine="Subs, Salads, Cookies"
          resRating="5"
          resPrice="15"
          resImage="https://imgs.search.brave.com/YcasNzYOTi2BQoPq6k8p5XsiiXPxjUNm573M4jLxp2c/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTAz/NTAyMjEwMC9waG90/by9zdWJ3YXktYnVy/Z2VyLmpwZz9zPTYx/Mng2MTImdz0wJms9/MjAmYz1RVUc5cTYy/QTFDZ0lGNGhxMGlS/dG1zLVdNbzIyUmpq/eURLai16VUo0ZWxz/PQ"
        />
        <RestroCard
          resName="Dunkin' Donuts"
          resCuisine="Subs, Drinks"
          resRating="4.3"
          resPrice="8"
          resImage="https://imgs.search.brave.com/yP02Co2cIeEEH-zO52K9sHyufsDCMkHi_uSyM9UIU24/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzgwLzI5/LzMzLzgwMjkzMzU2/YWM5ZGRkZDU1YTY5/NDQxMDViZTE4Mzg0/LmpwZw"
        />
        <RestroCard
          resName="KFC"
          resCuisine="Wings, Burgers"
          resRating="3.7"
          resPrice="10"
          resImage="https://imgs.search.brave.com/qQCe_blcV0nyoYB0vI2YRG56en7CT-OupXBtCMVQxEg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA2LzIzLzI3Lzg3/LzM2MF9GXzYyMzI3/ODc4NV8ybm94RFFC/MXlEMnR6N1pGR2Nm/bVlkclJFd3ZsSDVw/ai5qcGc"
        />
        <RestroCard
          resName="McDonalds"
          resCuisine="Burgers, Fries, Softies"
          resRating="4.7"
          resPrice="9"
          resImage="https://imgs.search.brave.com/zIaMljPfw7wzZYmBDbaUww4TpmdSJWtnhCHw9EETbAw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvNDU4/NzAzMzE5L3Bob3Rv/L21jZG9uYWxkcy1i/aWctbWFjLXZhbHVl/LW1lYWwuanBnP3M9/NjEyeDYxMiZ3PTAm/az0yMCZjPVNDbVp4/UVdkelE5VXVLSGtx/TWttbHRZWXYxbU9H/WDJBQTFwOEJ1dWI1/UXM9"
        />
        <RestroCard
          resName="Lapinoz Pizza"
          resCuisine="Pizza, Drinks"
          resRating="4.5"
          resPrice="13"
          resImage="https://imgs.search.brave.com/ild7m0464EarDAuB-CwrV8FMmMNK19JIYjp227f8wkE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTQ1/OTcxNTc5OS9waG90/by9waXp6YS13aXRo/LWhhbS1hbmQtY2hl/ZXNlLmpwZz9zPTYx/Mng2MTImdz0wJms9/MjAmYz1ncFJNVmZx/eTQ0YWc0VGtyb1Q4/V0VlclJvdGxmS2hl/WlF1NmtRa2RobnhR/PQ"
        />
        <RestroCard
          resName="Icontrast"
          resCuisine="Shakes, Ice Cream"
          resRating="4.9"
          resPrice="4"
          resImage="https://imgs.search.brave.com/mPbBji0TH_xyPUerxjMQcJg9La56ML5SGnQA_Ze0TCg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/dGhlc3BydWNlZWF0/cy5jb20vdGhtYi9n/TVVpQ1pBaTMxWS1B/RlA2d0d3V2Z0QXUz/cUU9LzE1MDB4MC9m/aWx0ZXJzOm5vX3Vw/c2NhbGUoKTptYXhf/Ynl0ZXMoMTUwMDAw/KTpzdHJpcF9pY2Mo/KS9jb29raWVzLWFu/ZC1jcmVhbS1taWxr/c2hha2UtNTA5MzUw/NC1oZXJvLTAxLTVk/Mjg5ZThhMTZkMzQx/M2RhMDM0MzBiNWU0/OGIyZmMwLmpwZw"
        />
        <RestroCard
          resName="MMV"
          resCuisine="Misal Thali, Vadapav"
          resRating="4.1"
          resPrice="5"
          resImage="https://imgs.search.brave.com/E2bVB-vRiiwQiHyj1WnLjxD5YhmY04Tl9FG4-1tR2Is/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jb250/ZW50LmpkbWFnaWNi/b3guY29tL2NvbXAv/YWhtZWRhYmFkL3c2/LzA3OXB4eDc5Lnh4/NzkuMjIwNDA1MjEy/NDMwLmM2dzYvY2F0/YWxvZ3VlL211bWJh/aXlhLW1pc2FsLWFu/ZC12YWRhcGF2LXJl/bGllZi1yb2FkLWFo/bWVkYWJhZC1taXNh/bC1wYXYtY2VudHJl/cy0wNmlobmV0aXU3/LmpwZz93PTM4NDAm/cT03NQ"
        />
        <RestroCard
          resName="Theobroma"
          resCuisine="Bakery, Desserts"
          resRating="4.6"
          resPrice="6"
          resImage="https://imgs.search.brave.com/fW9lpr8JrUSaJpVKMiqaS5JuRpiJVJ2oBPK8VNTriyU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/c25kaW1nLmNvbS9m/b29kL2ltYWdlL3Vw/bG9hZC93XzU1NSxo/XzQxNixjX2ZpdCxm/bF9wcm9ncmVzc2l2/ZSxxXzk1L3YxL2lt/Zy9yZWNpcGVzLzE4/LzExLzYvQXltMmY0/OE9RYmFiNGxhbW5T/cWNfdW50aXRsZWQt/Nzc4Ni5qcGc"
        />
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <div className="footer">
      <div className="app-down-container">
        <div className="app-down-promo">Download LunchBox app now</div>

        <div className="app-down-info">
          <div className="app-down-item">
            <img src="https://imgs.search.brave.com/Kme4F67YuI8Nyg-oX9X6xhmjVTwEi27SyH0eCapBCI8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9saDMu/Z29vZ2xldXNlcmNv/bnRlbnQuY29tL3pX/WUpVcHBmVS1UdW5I/U3hLTUE2aTFMUnB2/MlBPV2FHQ09PY3Z3/UjJoMUVfUjhMWjNS/Q2lNVWdieXhKREdG/UXFlUFIzRzVCQTNN/ZHBVdzRfQnRRX21l/ZlYzNldIM3RuQnJW/M1prdVNqPWUzNjUt/cGEtbnUtczA"></img>
          </div>
          <div className="app-down-item">
            <img src="https://imgs.search.brave.com/zkbUGVgXn1M8tiHBbiwr2UTWR9JF2yfXDK_8aSFwz40/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9kZXZl/bG9wZXIuYXBwbGUu/Y29tL2Fzc2V0cy9l/bGVtZW50cy9iYWRn/ZXMvZG93bmxvYWQt/b24tdGhlLWFwcC1z/dG9yZS5zdmc"></img>
          </div>
        </div>
      </div>

      <div className="app-info-container">
        <div className="company">
          <div className="company-info">
            <h3>LunchBox</h3>
            <p>©️ 2024 Big Tech</p>
          </div>
        </div>
        <div className="sidebar1">
          <div className="company-details-container">
            <h2>Company</h2>
            {/* https://imgs.search.brave.com/_QyFIbyj2dD2fMBmHATNX5D5BhOf1EuvmHk75S7tJLc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzFkLzc4/L2JmLzFkNzhiZmJm/ODE3YzVhZWM1NDYy/NjAxYzI5OTA0N2Jj/LmpwZw */}
            <div className="company-details-items">About</div>
            <div className="company-details-items">Careers</div>
            <div className="company-details-items">Team</div>
          </div>
        </div>
        <div className="sidebar2">
          <div className="delivery-details-container">
            <h2>Now delivering to:</h2>
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
            <h2>Contact us</h2>
            <div className="content1-details-items">Help & Support</div>
            <div className="content1-details-items">Partnership</div>
          </div>
        </div>
        <div className="content2">
          <div className="content2-details-container">
            <h2>Legal</h2>
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

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

export default AppLayout;
