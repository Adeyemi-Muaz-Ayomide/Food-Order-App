import HeaderCartButton from "./HeaderCartButton";
import styles from "./Header.module.css";
import images from "../../../assets/meals.jpg";


const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton />
      </header>
      {/* <div className={styles["main-image"]}>
        <img src={images} alt="meal table" />
      </div> */}
    </>
  );
};

export default Header;
