import styles from "./MealItemForm.module.css";
import Input from "../../UI/Input/Input";

const MealItemForm = ({ id }) => {
  const inputConfig = {
    id: `amount + ${id}`,
    type: "number",
    min: "1",
    max: "10",
    step: "1",
    defaultValue: "1",
  };
  return (
    <form className={styles.form}>
      <Input label={"Amount"} input={inputConfig} />
      <button>+ Add</button>
    </form>
  );
};

export default MealItemForm;
