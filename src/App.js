// import Cart from "./components/Cart/Cart";
import { BackdropProvider } from "use-backdrop";
import Header from "./components/Layout/Header/Header";
import InfoStore from "./components/Layout/InfoStore/InfoStore";
import Meals from "./components/Meals/Meals";

const App = () => {
  return (
    <BackdropProvider>
      <div className="App">
        <Header />
        <InfoStore />
        <Meals />
        {/* <Cart /> */}
      </div>
    </BackdropProvider>
  );
};

// <Route path="contact" element={<Contact />} />
export default App;
