import {  createAsyncThunk } from '@reduxjs/toolkit';

import { CartItem } from './types';

import axios from "axios";


// Экшен для загрузки корзины с сервера
export const fetchCart = createAsyncThunk(
    'cart/fetchCart',
    async (_, { dispatch }) => {
        try {
            const response = await axios.get<CartItem[]>('https://65b0cfb2d16d31d11bdd4e24.mockapi.io/carts');
            return response.data;
        } catch (error) {
            console.error('Error fetching cart data:', error);
            throw error;
        }
    }
);
// Экшен для добавления товара в корзину
export const checkOutCart = createAsyncThunk<CartItem[], CartItem[]>(
    'cart/checkOutCart',
    async (itemsToAdd, { rejectWithValue }) => {
        try {
            const response = await axios.post<CartItem[]>('https://65b0cfb2d16d31d11bdd4e24.mockapi.io/carts', itemsToAdd);
            return response.data;
        } catch (error) {
            console.error('Error adding item to cart:', error);
            throw error;

        }
    }
);

// Экшен для обновления количества товара в корзине
export const updateCartItem = createAsyncThunk<CartItem, { itemId: string; updatedData: Partial<CartItem> }>(
    'cart/updateCartItem',
    async ({ itemId, updatedData }) => {
        try {
            const response = await axios.patch<CartItem>(`https://65b0cfb2d16d31d11bdd4e24.mockapi.io/carts/${itemId}`, updatedData);
            return response.data;
        } catch (error) {
            console.error('Error updating item in cart:', error);
            throw error;
        }
    }
);

// Экшен для удаления товара из корзины
export const removeItemFromCart = createAsyncThunk<string, string>(
    'cart/removeItemFromCart',
    async (itemId) => {
        try {
            await axios.delete(`https://65b0cfb2d16d31d11bdd4e24.mockapi.io/carts/${itemId}`);
            return itemId;
        } catch (error) {
            console.error('Error removing item from cart:', error);
            throw error;
        }
    }
);

