import MealsItem from "./MealsItem";
import Card from "../UI/Card/Card";
import styles from "./Meals.module.css";
import { useContext } from "react";
import { mealsContext } from "../../App";

const Meals = () => {
  const meals = useContext(mealsContext);

  return (
    <section className={styles.meals}>
      <Card>
        <ul>
          <MealsItem mealItem={meals} />
        </ul>
      </Card>
    </section>
  );
};

export default Meals;
