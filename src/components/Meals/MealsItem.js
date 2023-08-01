import styles from "./MealsItem.module.css";

const MealsItem = ({ mealItem }) => {
  return (
    <>
      {mealItem.map((meal) => (
        <li className={styles.meal} key={meal.id}>
          <div>
            <h3>{meal.name}</h3>
            <p className={styles.description}>{meal.description}</p>
            <p className={styles.price}>{meal.price}</p>
          </div>
          <div>
            Amount
          </div>
        </li>
      ))}
    </>
  );
};

export default MealsItem;
