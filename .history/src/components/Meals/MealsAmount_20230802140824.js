import Button from "../UI/Button/Button";
import Input from "../UI/Input/Input";
import styles from "./MealsAmount.module.css";
import {useState} from 'react'

const MealsAmount = () => {

  const [count, setCount] = useState(0);

  const increment = (e) => {
    e.preventDefault();
    setCount(count + 1);
  }
  const decrement = (e) => {
    e.preventDefault();
    setCount(count - 1);
  }
  const nullBtn = (e) => {count <= 0
  return (
    <form className={styles.form}>
      {/* <Input type="number" min="0" max="5" step="1" label="Amount" />
      <Button>+Add</Button> */}

      <div className={styles.counter}>
        <button onClick={decrement} >
          disabled={nullBtn}
            {/* disabled="count <= 1" */}
            -
        </button>

        <p className={styles.count}>{ count }</p>

        <button onClick={increment}>
          +
        </button>
      </div>

      <Button>+Add</Button>

    </form>
  );
};

export default MealsAmount;
