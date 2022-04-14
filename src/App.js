import useCart from "./hooks/useCart";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header/Header";
import AvailableMeals from "./components/Meals/AvailableMeals/AvailableMeals";
import Meals from "./components/Meals/Meals";
import MealsSummary from "./components/Meals/MealsSummary/MealsSummary";

function App() {
  const { toggleCart, showCart } = useCart();
  return (
    <>
      {showCart && <Cart onClose={toggleCart} />}
      <Header onOpen={toggleCart} />
      <main>
        <Meals />
      </main>
    </>
  );
}

export default App;
