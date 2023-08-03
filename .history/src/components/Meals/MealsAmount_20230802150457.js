import { isDisabled } from "@testing-library/user-event/dist/utils";
import Button from "../UI/Button/Button";
import Input from "../UI/Input/Input";
import styles from "./MealsAmount.module.css";
import {useState} from 'react'

const MealsAmount = ({addToCart}) => {

  const [count, setCount] = useState(0);

  const increment = (e) => {
    e.preventDefault();
    setCount(count + 1);
  }
  const decrement = (e) => {
    e.preventDefault();
    setCount(count - 1);
    if(count <= 0){
      set isDisabled(value){
        this.isDisabled = value;
      }
    }
  }
  // const nullBtn = (e) => count <= 0 && e.preventDefault()
  return (
    <form className={styles.form}>
      {/* <Input type="number" min="0" max="5" step="1" label="Amount" />
      <Button>+Add</Button> */}

      <div className={styles.counter}>
        <button onClick={decrement}>
          {/* disabled={nullBtn} */}
            -
        </button>

        <p className={styles.count}>{ count }</p>

        <button onClick={increment}>
          +
        </button>
      </div>

      <Button onClick={addToCart}>+Add</Button>

    </form>
  );
};

export default MealsAmount;
