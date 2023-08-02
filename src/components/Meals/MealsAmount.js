import Button from "../UI/Button/Button";
import Input from '../UI/Input/Input'
import styles from "./MealsAmount.module.css";

const MealsAmount = () => {
  return (
    <form className={styles.form}>
      
      <Input type="number" min="0" max="5" step="1" label='Amount'/>
      <Button>+Add</Button>
    </form>
  );
};

export default MealsAmount;
