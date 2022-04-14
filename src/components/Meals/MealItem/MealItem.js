import styles from "./MealItem.module.css";
import MealItemForm from "../MealItemForm/MealItemForm";

const MealItem = props => {
  const { name, description, price, id } = props;
  const formatPrice = `$${Math.round(price * 100) / 100}`;
  return (
    <li className={styles.meal}>
      <div>
        <h3>{name}</h3>
        <div className={styles.description}>{description}</div>
        <div className={styles.price}>{formatPrice}</div>
      </div>
      <div>
        <MealItemForm id={id} />
      </div>
    </li>
  );
};

export default MealItem;
