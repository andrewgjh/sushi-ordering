import { useContext } from "react";
import Modal from "../UI/Modal/Modal";
import styles from "./Cart.module.css";
import { CartContext } from "../../providers/CartProvider";
import CartItem from "./CartItem/CartItem";

const Cart = ({ onClose }) => {
  const { cart } = useContext(CartContext);
  const addItemHandler = item => {};
  const removeItemHandler = id => {};
  const cartList = (
    <ul className={styles["cart-items"]}>
      {cart.items.map(item => (
        <CartItem
          key={item.id}
          {...item}
          onAdd={addItemHandler.bind(null, item)}
          onRemove={removeItemHandler.bind(null, item.id)}
        />
      ))}
    </ul>
  );
  return (
    <Modal onClose={onClose}>
      {cartList}
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>{`$${cart.totalAmount}`}</span>
      </div>
      <div className={styles.actions}>
        <button className={styles["button--alt"]} onClick={onClose}>
          Close
        </button>
        {cart.items.length > 0 && (
          <button className={styles["button"]}>Order</button>
        )}
      </div>
    </Modal>
  );
};

export default Cart;
