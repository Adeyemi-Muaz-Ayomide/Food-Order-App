import { useContext } from "react";
import Input from "../UI/Input/Input";
import styles from "./MealsAmount.module.css";
import { countContext, decrementContext, incrementContext } from "../../App";

const MealsAmount = () => {
  const count = useContext(countContext);
  const incrementHandler = useContext(incrementContext);
  const decrementHandler = useContext(decrementContext);

  return (
    <form className={styles.form}>
      <Input
        count={count}
        incrementHandler={incrementHandler}
        decrementHandler={decrementHandler}
      />
    </form>
  );
};

export default MealsAmount;
