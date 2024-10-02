import React from "react";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-img">
        <img
          src="https://imgs.search.brave.com/D8mQqCB1dEuYreOVddhdD0-uSrAGLBEcl-MZWPe8LhA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/bG9nb2Rlc2lnbi5u/ZXQvbG9nby9zbW9r/aW5nLWJ1cmdlci13/aXRoLWxldHR1Y2Ut/MzYyNGxkLnBuZz9u/d209MSZud3M9MSZp/bmR1c3RyeT1mb29k/JnNmPSZ0eHRfa2V5/d29yZD1BbGw"></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>Add restaurant</li>
          <li>Order</li>
          <li>Log in</li>
          <li>Sign up</li>
        </ul>
      </div>
    </div>
  );
};

const RestroCard = () => {
    return (
        <div className="res-card ">
            <p>Restaurant Name</p>
            <p>Restaurant rating</p>
        </div>
    );
}

const Body = () => {
  return (
    <div className="body">
          <div className="search-bar">
              <p>Search Bar :/</p>
          </div>
          <div className="res-card-container">
              <RestroCard/>
          </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

export default AppLayout;
