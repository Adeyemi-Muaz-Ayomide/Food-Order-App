import Button from "../UI/Button/Button";
import Input from "../UI/Input/Input";
import styles from "./MealsAmount.module.css";

const MealsAmount = () => {

  const count = 0
  return (
    <form className={styles.form}>
      {/* <Input type="number" min="0" max="5" step="1" label="Amount" />
      <Button>+Add</Button> */}

      <div className={styles.counter}">
        <button disabled="count <= 1" click="cartproduct.count--" >
            -
        </button>

        <p className="count>{ count }</p>

        <button click="count++">
          +
        </button>
      </div>

      <Button>+Add</Button>

    </form>
  );
};

export default MealsAmount;
