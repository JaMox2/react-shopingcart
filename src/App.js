import HeaderShop from "./Components/HeaderShop";
import NavbarShop from "./Components/NavbarShop";
import MainShop from "./Components/MainShop";
import allProducts from "./data/allProducts"
import Cart from "./Components/Cart";
import { useEffect, useState } from "react";

function App({cartAmount, cartItems, updateAmount, showCart, isShowing}) {

  const [currentProductSelected, setCurrentProductSelected] =  useState('All Products')
  const [productDisplayed, setProductDisplayed] = useState(allProducts)

  function selectProductEvent(product, productCategory){
    setCurrentProductSelected(currentProductSelected => currentProductSelected = product)
    if(product == currentProductSelected) return

    let productCatCopy = allProducts.filter(x=>{
      if(productCategory=='allProduct') return x == x
      return x.categoryId==productCategory
    })
    setProductDisplayed(productDisplayed=>productDisplayed = productCatCopy)
  }

  return (
    <div className="App">
      <HeaderShop cartAmount={cartAmount} showCart={showCart}/>
      <div className="mainShop">
        <NavbarShop selectedProduct={currentProductSelected} selectProductEvent={selectProductEvent}/>
        <MainShop productDisplayed={productDisplayed}/>
      </div>
      <Cart cartItems={cartItems} isShowing={isShowing} showCart={showCart} updateAmount={updateAmount}/>
    </div>
  );
}

export default App;
