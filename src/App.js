// import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header/Header";
import InfoStore from "./components/Layout/InfoStore/InfoStore";
import Meals from "./components/Meals/Meals";

// export const countContext = createContext();
// export const incrementContext = createContext();
// export const decrementContext = createContext();

const App = () => {
  return (
    <div className="App">
      <Header />
      <InfoStore />
      <Meals />
    </div>
  );
};

export default App;
