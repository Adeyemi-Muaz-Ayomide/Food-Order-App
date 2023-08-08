import { useState, createContext } from "react";
import Input from "../UI/Input/Input";
import styles from "./MealsAmount.module.css";

export const countContext = createContext();
const MealsAmount = () => {
  const [count, setCount] = useState(0);

  const incrementHandler = (e) => {
    e.preventDefault();
    if (count < 10) {
      setCount((prevCount) => prevCount + 1);
      return;
    }
  };
  const decrementHandler = (e) => {
    e.preventDefault();
    if (count > 0) {
      setCount((prevCount) => prevCount - 1);
      return;
    }
  };
  return (
    <form className={styles.form}>
      <countContext.Provider value={count}>
        <Input
          count={count}
          incrementHandler={incrementHandler}
          decrementHandler={decrementHandler}
        />
      </countContext.Provider>
    </form>
  );
};

export default MealsAmount;
