import { useState } from "react";
import MealsItem from "./MealsItem";
import Card from "../UI/Card/Card";
import styles from "./Meals.module.css";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];

const Meals = () => {
  const [meals, setMeals] = useState(DUMMY_MEALS);

  const addToCart 
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
