import { useLocation, useParams } from "react-router-dom"
import allProducts from './data/allProducts'
import HeaderShop from "./Components/HeaderShop"
import MainProduct from "./Components/MainProduct"
import Cart from "./Components/Cart";
import { useState } from "react"

export default function Product({getCartAmount, cartAmount, showCart, isShowing, updateAmount, cartItems}) {
  let location = useLocation()
  let productId = location.pathname.slice(location.pathname.lastIndexOf('/') + 1, location.pathname.length)
  let filteredProducts = allProducts.filter(x=>{
    return x.id == productId
  })

  return (
    <div className="product">
      {/* <HeaderShop cartAmount={cartAmount} showCart={showCart} */}
      <HeaderShop cartAmount={cartAmount} showCart={showCart} isShowing={isShowing}/>
      <MainProduct product={filteredProducts} getCartAmount={getCartAmount}/>
      <Cart cartItems={cartItems} isShowing={isShowing} showCart={showCart} updateAmount={updateAmount}/>
    </div>
  )
}
