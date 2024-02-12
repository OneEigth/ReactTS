import { configureStore } from '@reduxjs/toolkit'
import filter from "./filter/slice/filter";
import product from "./product/slice"
import {useDispatch} from "react-redux";
import cart from "./cart/slice"


export const store = configureStore({
    reducer: {
        filter,
        product,
        cart
    },
})

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();