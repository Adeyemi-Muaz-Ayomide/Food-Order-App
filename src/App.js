import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header/Header";
import InfoStore from "./components/Layout/InfoStore/InfoStore";
import Meals from "./components/Meals/Meals";

const App = () => {
  return (
    <div className="App">
      <Header />
      <InfoStore />
      <Meals />
      <Cart />
    </div>
  );
};

export default App;
