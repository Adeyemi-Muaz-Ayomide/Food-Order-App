// import HeaderCartButton from "../Layout/Header/HeaderCartButton";
import styles from "./Cart.module.css";

const Cart = () => {
  return (
    <>
      <div className={styles.container}>
        <header className={styles.header}>
          <h1>ReactMeals</h1>
          {/* <logo src="/path/to/your/logo.png" alt="Logo" /> */}
        </header>
        <body className={styles.body}>
          <p>Your cart is empty</p>
          {/* Display items in the cart here, if any */}
          {/* <CartItem /> */}
          <button>Remove Item</button>
        </body>
        <footer className={styles.footer}>
          <div>
            <h3>Total</h3>
            {/* Calculate and display the total sum of cart items here */}
            {/* <h2>$ 0.00</h2> */}
          </div>
          <div>
            <button>Checkout</button>
            <button>Remove all</button>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Cart;