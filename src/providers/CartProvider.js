import { createContext, useReducer } from "react";
import Cart from "../components/Cart/Cart";

export const CartContext = createContext();

const cartReducer = (state, action) => {
  if (action.type === "ADD_ITEM") {
    const updateCartItems = [...state.items, action.item];
    const updateTotalAmount =
      state.totalAmount + action.item.price * action.item * action.item.amount;

    return { items: updateCartItems, totalAmount: updateTotalAmount };
  }
  if (action.type === "REMOVE_ITEM") {
  }
  return {
    items: [],
    totalAmount: 0,
  };
};

export const CartProvider = ({ children }) => {
  const [cart, dispatchCart] = useReducer(cartReducer, {
    items: [],
    totalAmount: 0,
  });

  const addItem = item => {
    dispatchCart({ type: "ADD_ITEM", item });
  };
  const removeItem = id => {
    dispatchCart({ type: "REMOVE_ITEM", id });
  };

  const cartData = { cart, addItem, removeItem };
  return (
    <CartContext.Provider value={cartData}>{children}</CartContext.Provider>
  );
};
