import styles from "./Input.module.css";

const Input = ({ count, incrementHandler, decrementHandler }) => {
  
  return (
    <>
      <div className={styles.input}>
        <label>Quantity</label>
        <input
          type="number"
          min={0}
          max={10}
          step="1"
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
