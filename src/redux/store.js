import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./slice/CartSlice";
import SearchSlice from "./slice/SearchSlice";

export const store = configureStore({
    reducer: {
        cart: CartSlice,
        search: SearchSlice,
    }
})

export default store;