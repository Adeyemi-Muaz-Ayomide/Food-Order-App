import { useState } from "react";
import styles from "./Input.module.css";

const Input = () => {
  const [count, setCount] = useState(0);

  const maxValue = 10;
  const minValue = 0;

  const incrementHandler = (e) => {
    e.preventDefault();
    if (count < maxValue) {
      setCount((prevCount) => prevCount + 1);

      return;
    }
  };
  const decrementHandler = (e) => {
    e.preventDefault();
    if (count > minValue) {
      setCount((prevCount) => prevCount - 1);
      return;
    }
  };

  return (
    <>
      <div className={styles.input}>
        <label>Quantity</label>
        <input
          type="number"
          min={minValue}
          max={maxValue}
          step="0"
          value={count}
          onChange={incrementHandler}
        />
      </div>
      <button className={styles.button} onClick={incrementHandler}>
        +
      </button>
      <button className={styles.button} onClick={decrementHandler}>
        -
      </button>
    </>
  );
};

export default Input;
