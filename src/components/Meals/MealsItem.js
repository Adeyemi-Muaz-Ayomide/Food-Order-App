import { useContext } from "react";
import Input from "../UI/Input/Input";
import styles from "./MealsItem.module.css";
import { decrementContext, incrementContext, mealsContext } from "../../App";

const MealsItem = () => {
  const meals = useContext(mealsContext);
  const incrementHandler = useContext(incrementContext);
  const decrementHandler = useContext(decrementContext);
  return (
    <>
      {meals.map((meal) => (
        <li className={styles.meal} key={meal.id}>
          <div>
            <h3>{meal.name}</h3>
            <div className={styles.description}>{meal.description}</div>
            <div className={styles.price}>${meal.price}</div>
          </div>
          <div>
            <Input
              meal={meal}
              key={meal.id}
              incrementHandler={incrementHandler}
              decrementHandler={decrementHandler}
            />
          </div>
        </li>
      ))}
    </>
  );
};

export default MealsItem;
