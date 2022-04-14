import styles from "./AvailableMeals.module.css";
import Card from "../../UI/Card/Card";
const HARDCODE_MEALS = [
  {
    id: "m1",
    name: "Salmon Roll",
    description:
      "Calling all salmon Lovers, this roll has 50grams of the highest quality atlantic",
    price: 9.99,
  },
  {
    id: "m2",
    name: "Tuna Roll",
    description:
      "Maguro is the name in Japanese and it is freshly delivered by plane each week!",
    price: 12.99,
  },
  {
    id: "m3",
    name: "Dragon Roll",
    description:
      "Hearty and delicious roll with shrimp tempera, avocado and tobiko",
    price: 16.99,
  },
  {
    id: "m4",
    name: "Chirashi Sushi",
    description:
      "For those that want the freshest selection of fish available each day on a bed of sweet and savoury sushi rice.",
    price: 28.99,
  },
];
const AvailableMeals = () => {
  const listOfMeals = HARDCODE_MEALS.map(meal => <li>{meal.name}</li>);

  return (
    <section className={styles.meals}>
      <Card>
        <ul>{listOfMeals}</ul>
      </Card>
    </section>
  );
};
export default AvailableMeals;