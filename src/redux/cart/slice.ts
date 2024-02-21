import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { calcTotalPrice } from '../../utils/calcTotalPrice'
import {checkOutCart, fetchCart, removeItemFromCart, updateCartItem} from './asyncActions';
import { CartItem, CartSliceState} from './types';
import {updateLocalStorage} from "../../utils/cartUtils";



const initialState: CartSliceState = {
  items: [],
  totalPrice: 0,
  status: 'idle', // Добавлено состояние для отслеживания статуса загрузки
  error: null, // Добавлено состояние для отслеживания ошибок
};



const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {

    addItem(state, action: PayloadAction<CartItem>) {
      const findItem = state.items.find((obj) => obj.id === action.payload.id);
      if (findItem) {
        findItem.count++;
      } else {
        state.items.push({
          ...action.payload,
          count: 1,
        });
      }
      state.totalPrice = calcTotalPrice(state.items);
      updateLocalStorage(state.items);
    },

    minusItem(state, action: PayloadAction<string>) {
      const findItem = state.items.find((obj) => obj.id === action.payload);
      if (findItem) {
        findItem.count--;
      }
      state.totalPrice = calcTotalPrice(state.items);
      updateLocalStorage(state.items);
    },

    removeItem(state, action: PayloadAction<string>) {
      state.items = state.items.filter((obj) => obj.id !== action.payload);
      state.totalPrice = calcTotalPrice(state.items);
      updateLocalStorage(state.items);
    },

    clearItems(state) {
      state.items = [];
      state.totalPrice = 0;
      updateLocalStorage(state.items);
    },

    setItemCount(state, action: PayloadAction<{ itemId: string; count: number }>) {
      const { itemId, count } = action.payload;
      const existingItem = state.items.find((item) => item.id === itemId);

      if (existingItem && count > 0) {
        existingItem.count = count;
        state.totalPrice = calcTotalPrice(state.items);
        updateLocalStorage(state.items);
      }
    },
  },
  extraReducers: (builder) => {
    // Добавляем обработчики для различных стадий загрузки данных
    builder
        .addCase(fetchCart.pending, (state) => {
          state.status = 'loading';
        })
        .addCase(fetchCart.fulfilled, (state, action) => {
          state.status = 'succeeded';
          state.items = action.payload;
          state.totalPrice = calcTotalPrice(action.payload);
        })
        .addCase(fetchCart.rejected, (state, action) => {
          state.status = 'failed';
          state.error = action.error.message;
        })
        .addCase(checkOutCart.fulfilled, (state, action) => {
          state.items.push(...action.payload);
          state.totalPrice = calcTotalPrice(state.items);
        })
        .addCase(updateCartItem.fulfilled, (state, action) => {
          const updatedItemIndex = state.items.findIndex((item) => item.id === action.payload.id);

          if (updatedItemIndex !== -1) {
            state.items[updatedItemIndex] = action.payload;
            state.totalPrice = calcTotalPrice(state.items);
          }
        })
        .addCase(removeItemFromCart.fulfilled, (state, action) => {
          state.items = state.items.filter((item) => item.id !== action.payload);
          state.totalPrice = calcTotalPrice(state.items);
        });
  },
});

export const { addItem, removeItem, minusItem, clearItems, setItemCount  } = cartSlice.actions;

export default cartSlice.reducer;
