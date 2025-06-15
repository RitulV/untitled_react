import { createContext } from "react";

const cartContext = createContext({
  restaurantId: "default id",
});

export default cartContext;