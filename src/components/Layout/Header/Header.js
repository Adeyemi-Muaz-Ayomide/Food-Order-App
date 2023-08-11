import { Link } from "react-router-dom";
import HeaderCartButton from "./HeaderCartButton";
import styles from "./Header.module.css";
import images from "../../../assets/meals.jpg";
import { useContext } from "react";
import { mealsContext } from "../../../App";

const Header = () => {
  const meals = useContext(mealsContext);
  const totalCount = meals.reduce((total, meal) => total + meal.count, 0);
  return (
    <>
      <header className={styles.header}>
        <h1>ReactMeals</h1>
        <Link to={"/cart"} style={{ textDecoration: "none" }}>
          <HeaderCartButton totalCount={totalCount} />
        </Link>
      </header>
      <div className={styles["main-image"]}>
        <img src={images} alt="meal table" />
      </div>
    </>
  );
};

export default Header;
