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
<<<<<<< HEAD
      
      <div className={styles["main-image"]}>
=======
       <div className={styles["main-image"]}>
>>>>>>> 70943953a67fd46c3e02dd67b99876ba6551c8f4
        <img src={images} alt="meal table" />
      </div> 
    </>
  );
};

export default Header;
