import HeaderShop from "./Components/HeaderShop";
import NavbarShop from "./Components/NavbarShop";
import MainShop from "./Components/MainShop";
import allProducts from "./data/allProducts"
import Cart from "./Components/Cart";
import { useEffect, useState } from "react";

function App({cartAmount}) {

  const [currentProductSelected, setCurrentProductSelected] =  useState('All Products')
  const [productDisplayed, setProductDisplayed] = useState(allProducts)

  function selectProductEvent(product, productCategory){
    setCurrentProductSelected(currentProductSelected => currentProductSelected = product)
    if(product == currentProductSelected) return

    let productCatCopy = allProducts.filter(x=>{
      if(productCategory=='allProduct') return x == x
      return x.categoryId==productCategory
    })
    console.log(productCatCopy)
    setProductDisplayed(productDisplayed=>productDisplayed = productCatCopy)
  }

  return (
    <div className="App">
      <HeaderShop cartAmount={cartAmount}/>
      <div className="mainShop">
        <NavbarShop selectedProduct={currentProductSelected} selectProductEvent={selectProductEvent}/>
        <MainShop productDisplayed={productDisplayed}/>
      </div>
      <Cart/>
    </div>
  );
}

export default App;
