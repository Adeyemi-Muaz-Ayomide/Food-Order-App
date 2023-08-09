import { useState, createContext } from "react";
import Header from "./components/Layout/Header/Header";
import InfoStore from "./components/Layout/InfoStore/InfoStore";
import Meals from "./components/Meals/Meals";

export const countContext = createContext();
export const incrementContext = createContext();
export const decrementContext = createContext();
export const mealsContext = createContext();

const meals = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];

const App = () => {
  const [count, setCount] = useState(0);

  const incrementHandler = (id, meal) => {
    console.log(id, meal.id)
    if (count < 10 && id === meal.id) {
      setCount((prevCount) => prevCount + 1);
    }
  };
  const decrementHandler = (id, meal) => {
    if (count > 0 && id === meal.id) {
      setCount((prevCount) => prevCount - 1);
    }
  };

  return (
    <div className="App">
      <mealsContext.Provider value={meals}>
        <countContext.Provider value={count}>
          <incrementContext.Provider value={incrementHandler}>
            <decrementContext.Provider value={decrementHandler}>
              <Header />
              <InfoStore />
              <Meals />
            </decrementContext.Provider>
          </incrementContext.Provider>
        </countContext.Provider>
      </mealsContext.Provider>
    </div>
  );
};

export default App;
