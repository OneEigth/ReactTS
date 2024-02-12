import { ProductItem } from '../redux/cart/types';

export const calcTotalPrice = (items: ProductItem[]) => {
  return items.reduce((sum, obj) => obj.price * obj.count + sum, 0);
};
