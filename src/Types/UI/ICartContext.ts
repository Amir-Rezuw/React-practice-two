export interface ICartItem {
  id: string;
  name: string;
  amount: number;
  price: number;
}
export interface ICtx {
  items: ICartItem[];
  totalAmount: number;
  addItem: (item: ICartItem) => void;
  removeItem: (item: ICartItem) => void;
}
export interface ICartReducerAction {
  type: "Add_Item" | "Remove_Item";
  cart: ICartItem;
}
export interface ICartPrimaryData {
  items: ICartItem[];
  totalAmount: number;
}
