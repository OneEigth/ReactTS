import { CartItem } from '../redux/cart/types';
export const updateLocalStorage = (items: CartItem[]) => {
    localStorage.setItem('cart', JSON.stringify(items));
};