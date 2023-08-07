import { useContext} from "react";
import styles from "./Input.module.css";
import { countContext, decrementContext, incrementContext } from "../../../App";

const Input = () => {
  const count = useContext(countContext);
  const incrementHandler = useContext(incrementContext);
  const decrementHandler = useContext(decrementContext);


  
  return (
    <>
      <div className={styles.input}>
        <label>Quantity</label>
        <input
          type="number"
          min={0}
          max={10}
          step='1'
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
