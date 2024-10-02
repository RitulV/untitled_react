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
            <img src="https://imgs.search.brave.com/YcasNzYOTi2BQoPq6k8p5XsiiXPxjUNm573M4jLxp2c/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTAz/NTAyMjEwMC9waG90/by9zdWJ3YXktYnVy/Z2VyLmpwZz9zPTYx/Mng2MTImdz0wJms9/MjAmYz1RVUc5cTYy/QTFDZ0lGNGhxMGlS/dG1zLVdNbzIyUmpq/eURLai16VUo0ZWxz/PQ"></img>
            <p>Restaurant Name: </p>
            <p>Cuisine: </p>
            <p>Restaurant rating: </p>
            <p>Price for 2: </p>
        </div>
    );
}

const Body = () => {
  return (
    <div className="body">
          <div className="search-bar">
              <p>&nbsp;</p>
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
