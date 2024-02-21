import axios from 'axios';
import { CartItem } from '../redux/cart/types';
import { calcTotalPrice } from './calcTotalPrice';

const API_URL = 'https://65b0cfb2d16d31d11bdd4e24.mockapi.io/carts';

export const getCartFromServer = async () => {
  try {
    const response = await axios.get(`${API_URL}`); // Assuming the cart is stored at /carts/1

    if (response.status === 200) {
      const data = response.data;
      const items = data.items || [];
      const totalPrice = calcTotalPrice(items);

      return {
        items: items as CartItem[],
        totalPrice,
      };
    } else {
      throw new Error(`Failed to fetch cart data. Status: ${response.status}`);
    }
  } catch (error) {
    console.error('Error fetching cart data:', error);
    throw error;
  }
};

