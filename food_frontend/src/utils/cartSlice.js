import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      const itemId = action.payload.id;
      // console.log(action.payload);
      
      if (!state.items[itemId]) {
        state.items[itemId] = { ...action.payload, quantity: 1 }; // Proper initialization
      } else {
        state.items[itemId].quantity++; // Safely incrementing quantity
      }
    },

    removeItem: (state, action) => {
      const itemId = action.payload;
      if (state.items[itemId]) {
        state.items[itemId]--;
      }
      if (state.items[itemId] == 0) {
        delete state.items[itemId];
      }
    },

    clearCart: (state) => {
      state.items = {}; // []
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
