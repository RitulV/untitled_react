import React, { useContext, useState, lazy, Suspense } from "react";
import { Outlet, createHashRouter } from "react-router-dom";
import { Provider } from "react-redux";

import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

import Offer from "./components/Offer";
import RestMenu from "./components/RestMenu";
import Error from "./components/Error";
import Team from "./components/Team";

const Cart = lazy(() => import("./components/Cart"));

// import appStore from "./utils/appStore";
import { appStore, persistor } from "./utils/configureStore";
import { PersistGate } from "redux-persist/integration/react";

import cartContext from "./utils/cartContext";
import Loading from "./utils/Loading";

const AppLayout = () => {
  const cartCtx = useContext(cartContext);
  const [restId, setRestId] = useState(cartCtx.restaurantId);

  // console.log(restId);

  return (
    <Provider store={appStore}>
      <PersistGate loading={<Loading />} persistor={persistor}>
        <div className="app">
          <cartContext.Provider value={{ restaurantId: restId, setRestId }}>
            <Header />
            <Outlet />
          </cartContext.Provider>
          <Footer />
        </div>
      </PersistGate>
    </Provider>
  );
};

export const router = createHashRouter([
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
        element: (
          <Suspense fallback={<Loading />}>
            <Cart />
          </Suspense>
        ),
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
