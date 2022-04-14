import styles from "./HeaderCartButton.module.css";
import CartIcon from "../../Cart/CartIcon/CartIcon";
import { useContext } from "react";
import { CartContext } from "../../../providers/CartProvider";

const HeaderCartButton = ({ onClick }) => {
  const { cart } = useContext(CartContext);
  const itemsInCart = cart.items.reduce((acc, cur) => {
    return acc + cur.amount;
  }, 0);
  return (
    <button className={styles.button} onClick={onClick}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={styles.button}>{itemsInCart}</span>
    </button>
  );
};

export default HeaderCartButton;
