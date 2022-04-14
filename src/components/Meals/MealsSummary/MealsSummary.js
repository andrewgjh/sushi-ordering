import classes from "./MealsSummary.module.css";

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>The Sushi App that brings Sushi to Your Door</h2>
      <p>
        Sushi is Great for any time of day. You can enjoy it for breakfast,
        lunch or dinner.
      </p>
      <p>
        All our sushi is freshly made daily with high-quality ingredients and
        delivered to you in record time!
      </p>
    </section>
  );
};

export default MealsSummary;
