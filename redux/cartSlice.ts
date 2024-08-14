import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "./index";

interface CartSate {
  cart: any;
}
const initialState: CartSate = {
  cart: [],
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cart.push(action.payload);
    },
  },
});
export const { addToCart } = cartSlice.actions;
export const getCart = (state: RootState) => state.cart.cart;
export default cartSlice.reducer;
