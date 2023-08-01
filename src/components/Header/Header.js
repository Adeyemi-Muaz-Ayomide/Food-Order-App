import React from "react";
import styles from "./Header.module.css";
import images from "../UI/Images/meals.jpg";

const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <h2>ReactMeals</h2>
      </header>
      <div className={`${styles["main-image"]}`}>
        <img src={images} alt="meal table" />
      </div>
    </>
  );
};

export default Header;
