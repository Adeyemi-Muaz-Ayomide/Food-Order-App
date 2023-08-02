import Header from "./components/Layout/Header/Header";
import InfoStore from "./components/Layout/InfoStore/InfoStore";
import Meals from "./components/Meals/Meals";

const App = () => {
  return (
    <div className="App">
      <Header />
      <InfoStore />
      <Meals />
      <h2>Food Order App</h2>
    </div>
  );
}

export default App;
