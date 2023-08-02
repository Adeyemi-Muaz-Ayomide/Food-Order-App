import Button from "../UI/Button/Button";
import Input from "../UI/Input/Input";
import styles from "./MealsAmount.module.css";

const MealsAmount = () => {
  return (
    <form className={styles.form}>
      <Input type="number" min="0" max="5" step="1" label="Amount" />
      <Button>+Add</Button>
      <div class="counter">
        <button disabled="cartproduct.count <= 1" @click="cartproduct.count--" >
            -
        </button>

        <p class="count">{{ cartproduct.count }}</p>

        <button @click="cartproduct.count++">
          +
        </button>
      </div>
    </form>
  );
};

export default MealsAmount;
