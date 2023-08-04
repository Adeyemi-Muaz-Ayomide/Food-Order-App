// import { isDisabled } from "@testing-library/user-event/dist/utils";
import Input from "../UI/Input/Input";
import styles from "./MealsAmount.module.css";
// import { useState } from "react";

const MealsAmount = ({ addToCart }) => {
  // const [count, setCount] = useState(0);

  // const increment = (e) => {
  //   e.preventDefault();
  //   setCount((prevCount) => prevCount + 1);
  // };
  // const decrement = (e) => {
  //   e.preventDefault();
  //   setCount(count - 1);
  // };

  // const isButtonDisabled = count <= 0;
  return (
    <form className={styles.form}>
      <Input />
      {/* <Input type="number" min="0" max="5" step="1" label="Amount" />
      <Button>+Add</Button> */}
      {/* <div className={styles.counter}>
        <button onClick={decrement} disabled={isButtonDisabled}>
          -
        </button>

        <p className={styles.count}>{count}</p>

        <button onClick={increment}>+</button>
      </div> */}
      {/* <Button onClick={addToCart}>+Add</Button> */}
    </form>
  );
};

export default MealsAmount;
