import { useContext } from "react";
import CartIcon from "../../Cart/CartIcon";
import styles from "./HeaderCartButton.module.css";
import { countContext } from "../../Meals/MealsAmount";

const HeaderCartButton = () => {
  const count = useContext(countContext);
  return (
    <button className={styles.button}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={styles.badge}>{count}</span>
    </button>
  );
};

export default HeaderCartButton;
