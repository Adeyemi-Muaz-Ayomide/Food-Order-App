import MealsAmount from "./MealsAmount";
import styles from "./MealsItem.module.css";

const MealsItem = ({ mealItem }) => {
  const [cartItems, setCartItems] = useState([])

  const addToCart = (cartProduct) => {
    const cartItemsIndex = cartItems.value.findIndex(product => product.id === cartProduct.id);

    if (cartItemsIndex !== -1) {
      setCartItems.value[cartItemsIndex].count++;
    } else {
      const newItem = { ...cartProduct, count: 1 };
      setCartItems.value.push(newItem);
    }
    localStorage.setItem('shoppingcart', JSON.stringify(setCartItems.value));
  }
  return (
    <>

      {mealItem.map((meal) => (
        <li className={styles.meal} key={meal.id}>
          <div>
            <h3>{meal.name}</h3>
            <div className={styles.description}>{meal.description}</div>
            <div className={styles.price}>${meal.price}</div>
          </div>
          <div>
            <MealsAmount />
          </div>
        </li>
      ))}

    </>
  );
};

export default MealsItem;
