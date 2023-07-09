import { ReactNode, createContext, useReducer } from "react";

interface ICartItem {
  id: string;
  name: string;
  amount: number;
  price: number;
}
interface ICtx {
  items: ICartItem[];
  totalAmount: number;
  addItem: (item: ICartItem) => void;
  removeItem: (item: ICartItem) => void;
}
interface ICartReducerAction {
  type: "Add_Item" | "Remove_Item";
  cart: ICartItem;
}
const CartContext = createContext<ICtx>({
  items: [],
  totalAmount: 0,
  addItem: (_item: ICartItem) => {},
  removeItem: (_item: ICartItem) => {},
});
interface ICartPrimaryData {
  items: ICartItem[];
  totalAmount: number;
}
const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducerFn = (state: ICartPrimaryData, action: ICartReducerAction) => {
  if (action.type === "Add_Item") {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.cart.id
    );
    const existingCartItem = state.items[existingCartItemIndex];

    let updatedItems;
    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.cart.amount,
      };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.cart);
    }
    const updatedTotalAmount =
      state.totalAmount + action.cart.amount * action.cart.price;
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  if (action.type === "Remove_Item") {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.cart.id
    );
    const existingCartItem = state.items[existingCartItemIndex];
    const updatedTotalAmount = state.totalAmount - existingCartItem.price;
    let updatedItems;
    if (existingCartItem.amount === 1) {
      updatedItems = state.items.filter((item) => item.id !== action.cart.id);
    } else {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount - 1,
      };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    }
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  return defaultCartState;
};

export const CartContextProvider = ({ children }: { children: ReactNode }) => {
  const [cartState, dispatchCart] = useReducer(cartReducerFn, defaultCartState);

  const addItem = (item: ICartItem) => {
    dispatchCart({ type: "Add_Item", cart: item });
  };
  const removeItem = (item: ICartItem) => {
    dispatchCart({ type: "Remove_Item", cart: item });
  };
  return (
    <CartContext.Provider
      value={{
        items: cartState.items,
        addItem,
        removeItem,
        totalAmount: cartState.totalAmount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
export default CartContext;
