import HeaderShop from "./Components/HeaderShop";
import NavbarShop from "./Components/NavbarShop";
import MainShop from "./Components/MainShop";

function App() {
  return (
    <div className="App">
      <HeaderShop/>
      <div className="mainShop">
        <NavbarShop/>
        <MainShop/>
      </div>
    </div>
  );
}

export default App;
