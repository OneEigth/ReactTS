
export type CartItem = {
  id: string;
  title: string;
  price: number;
  image: string;
  category:string;
  count: number;
};

export interface CartSliceState {
  totalPrice: number;
  items: CartItem[];
  status: string;
  error: any
}
