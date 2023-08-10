import { useState, createContext } from "react";
import Header from "./components/Layout/Header/Header";
import InfoStore from "./components/Layout/InfoStore/InfoStore";
import Meals from "./components/Meals/Meals";

export const countContext = createContext();
export const incrementContext = createContext();
export const decrementContext = createContext();
export const mealsContext = createContext();

const mealData = [
  {
    id: 1,
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
    count: 0,
  },
  {
    id: 2,
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
    count: 0,
  },
  {
    id: 3,
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
    count: 0,
  },
  {
    id: 4,
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
    count: 0,
  },
];

const App = () => {
  const [meals, setMeals] = useState(mealData);

  // const markTaskComplete = (id) => {
  //   console.log(id)
  //  const updatedTask = tasks.map((task) => task.id ===id?
  //  {...task,  completed: !task.completed}: task)
  //  setTasks(updatedTask)
  // };

  const incrementHandler = (id) => {
    setMeals((prevMeals) => {
      return prevMeals.map((meal) =>
        meal.id === id && meal.count < 10
          ? { ...meal, count: meal.count + 1 }
          : meal
      );
    });
  };

  const decrementHandler = (id) => {
    setMeals((prevMeals) => {
      return prevMeals.map((meal) =>
        meal.id === id && meal.count > 0
          ? { ...meal, count: meal.count - 1 }
          : meal
      );
    });
  };

  return (
    <div className="App">
      <mealsContext.Provider value={meals}>
        {/* <countContext.Provider value={count}> */}
        <incrementContext.Provider value={incrementHandler}>
          <decrementContext.Provider value={decrementHandler}>
            <Header />
            <InfoStore />
            <Meals />
          </decrementContext.Provider>
        </incrementContext.Provider>
        {/* </countContext.Provider> */}
      </mealsContext.Provider>
    </div>
  );
};

export default App;
