import { configureStore } from "@reduxjs/toolkit";
import { cartReducher } from "./cartSlice";

const store = configureStore({
    reducer:{
        cartState : cartReducher
    }
})

export default store;