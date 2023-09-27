import { configureStore } from "@reduxjs/toolkit";
import { WishListSlice } from "./Slices/WishListSlice";

export const store = configureStore({
    reducer:{
        cart: WishListSlice.reducer,
    }
});