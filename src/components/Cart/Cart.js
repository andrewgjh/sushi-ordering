import Modal from "../UI/Modal/Modal";
import styles from "./Cart.module.css";

const Cart = ({ onClose }) => {
  const cartItems = [{ id: "c1", name: "sushi", amount: 2, price: 12.99 }];
  const cartList = (
    <ul className={styles["cart-items"]}>
      {cartItems.map(item => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
  return (
    <Modal onClose={onClose}>
      {cartList}
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>35.62</span>
      </div>
      <div className={styles.actions}>
        <button className={styles["button--alt"]} onClick={onClose}>
          Close
        </button>
        <button className={styles["button"]}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
