import React from "react";
import { createBrowserRouter, Outlet } from "react-router-dom";

import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

import Offer from "./components/Offer";
import Cart from "./components/Cart";
import RestMenu from "./components/RestMenu";
import Error from "./components/Error";
import Team from "./components/Team";

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/offers",
        element: <Offer />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestMenu />,
      },
      {
        path: "/company/team",
        element: <Team />,
      },
    ],
  },
]);

export default AppLayout;