import styles from "./AvailableMeals.module.css";
import MealItem from "../MealItem/MealItem";
import Card from "../../UI/Card/Card";
import { useCallback, useEffect, useState } from "react";
// const HARDCODE_MEALS = [
//   {
//     id: "m1",
//     name: "Salmon Roll",
//     description:
//       "Calling all salmon Lovers, this roll has 50grams of the highest quality atlantic",
//     price: 9.99,
//   },
//   {
//     id: "m2",
//     name: "Tuna Roll",
//     description:
//       "Maguro is the name in Japanese and it is freshly delivered by plane each week!",
//     price: 12.99,
//   },
//   {
//     id: "m3",
//     name: "Dragon Roll",
//     description:
//       "Hearty and delicious roll with shrimp tempera, avocado and tobiko",
//     price: 16.99,
//   },
//   {
//     id: "m4",
//     name: "Chirashi Sushi",
//     description:
//       "For those that want the freshest selection of fish available each day on a bed of sweet and savoury sushi rice.",
//     price: 28.99,
//   },
//   {
//     id: "w4",
//     name: "Sushi & Sashimi Boat",
//     description:
//       "This is the best party platter you can find in the market. Just order and become the best host in town.",
//     price: 88.29,
//   },
// ];

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const listOfMeals = meals.map(meal => <MealItem key={meal.id} {...meal} />);

  const fetchMeals = useCallback(async () => {
    try {
      setIsLoading(true);
      const response = await fetch(
        "https://react-http-4c46f-default-rtdb.firebaseio.com/Meals.json"
      );
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
      const data = await response.json();
      const meals = [];
      for (let key in data) {
        meals.push({
          id: key,
          name: data[key].name,
          description: data[key].description,
          price: data[key].price,
        });
      }
      setIsLoading(false);
      setMeals(meals);
    } catch (error) {
      setIsLoading(false);
      setError(error.message);
    }
  }, []);
  useEffect(() => {
    fetchMeals();
  }, [fetchMeals]);

  return (
    <section className={styles.meals}>
      <Card>
        {isLoading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        <ul>{listOfMeals}</ul>
      </Card>
    </section>
  );
};
export default AvailableMeals;
