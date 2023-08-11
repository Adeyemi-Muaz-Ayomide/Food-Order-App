import styles from "./Input.module.css";

const Input = ({ meal, incrementHandler, decrementHandler }) => {
  return (
    <>
      <div className={styles.input}>
        <label>Quantity</label>
        <input
          type="number"
          min={0}
          max={10}
          step="1"
          value={meal.count}
          onChange={() => incrementHandler(meal.id)}
        />
      </div>
      <button
        className={styles.button}
        onClick={() => incrementHandler(meal.id)}
      >
        +
      </button>
      <button
        className={styles.button}
        onClick={() => decrementHandler(meal.id)}
      >
        -
      </button>
    </>
  );
};

export default Input;
