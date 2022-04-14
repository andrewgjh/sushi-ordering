import Header from "./components/Layout/Header/Header";
import AvailableMeals from "./components/Meals/AvailableMeals/AvailableMeals";
import Meals from "./components/Meals/Meals";
import MealsSummary from "./components/Meals/MealsSummary/MealsSummary";

function App() {
  return (
    <>
      <Header />
      <main>
        <Meals />
      </main>
    </>
  );
}

export default App;
