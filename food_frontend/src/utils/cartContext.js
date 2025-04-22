import { createContext } from "react";

const cartContext = createContext({
  restaurantName: "default restaurant",
});

export default cartContext;