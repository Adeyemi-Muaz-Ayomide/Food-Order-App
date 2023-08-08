// import Cart from "./components/Cart/Cart";
import { useState, createContext } from "react";
import Header from "./components/Layout/Header/Header";
import InfoStore from "./components/Layout/InfoStore/InfoStore";
import Meals from "./components/Meals/Meals";

export const countContext = createContext();
export const incrementContext = createContext();
export const decrementContext = createContext();

const App = () => {
  const [count, setCount] = useState(0);

  const incrementHandler = (e) => {
    e.preventDefault();
    if (count < 10) {
      setCount((prevCount) => prevCount + 1);
    }
  };
  const decrementHandler = (e) => {
    e.preventDefault();
    if (count > 0) {
      setCount((prevCount) => prevCount - 1);
    }
  };

  return (
    <div className="App">
      <countContext.Provider value={count}>
        <incrementContext.Provider value={incrementHandler}>
          <decrementContext.Provider value={decrementHandler}>
            <Header />
            <InfoStore />
            <Meals />
          </decrementContext.Provider>
        </incrementContext.Provider>
      </countContext.Provider>
    </div>
  );
};

export default App;
