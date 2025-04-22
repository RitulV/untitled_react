import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    addresses: [],
  },
  reducers: {
    addAddr: (state, action) => {
      state.addresses.push(action.payload);
    },
    removeAddr: (state) => {
      state.addresses.pop();
    },
  },
});

export const { addAddr, removeAddr } = userSlice.actions;
export default userSlice.reducer;
