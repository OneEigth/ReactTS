export type ProductItem = {
  id: string;
  title: string;
  price: number;
  image: string;
  category:string;
  count: number;
};

export interface ProductSliceState {
  totalPrice: number;
  items: ProductItem[];
}
