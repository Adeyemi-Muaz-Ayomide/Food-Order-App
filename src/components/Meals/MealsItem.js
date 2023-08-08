// import Input from "../UI/Input/Input";
// import Input from "../UI/Input/Input";
import MealsAmount from "./MealsAmount";
import styles from "./MealsItem.module.css";

const MealsItem = ({ mealItem }) => {
  return (
    <>
      {mealItem.map((meal) => (
        <li className={styles.meal} key={meal.id}>
          <div>
            <h3>{meal.name}</h3>
            <div className={styles.description}>{meal.description}</div>
            <div className={styles.price}>${meal.price}</div>
          </div>
          <div>
            <MealsAmount />
            {/* <Input /> */}
          </div>
        </li>
      ))}
    </>
  );
};

export default MealsItem;
