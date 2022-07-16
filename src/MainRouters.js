import { useState } from 'react'
import {BrowserRouter, Routes, Route, useParams} from 'react-router-dom'
import App from './App'
import Home from './Home'
import Product from './Product'

export default function MainRouters() {

  let [cartAmount, setCartAmount] = useState(0)
  let [cartItems, setCartItem] = useState([])
  function getCartAmount(product){
    let cartItemCopy = cartItems.slice()
    cartItemCopy.push(product)
    setCartAmount(cartAmount=>cartAmount+1)
    setCartItem(cartItems=>cartItems=cartItemCopy)
  }

  return (
    <BrowserRouter>
    <Routes>

      <Route path='/' element={<Home/>}></Route>
      <Route path='/shop' element={<App cartAmount={cartAmount}/>}></Route>
      <Route path='/shop/products/:id' element={<Product getCartAmount={getCartAmount} cartAmount={cartAmount}/>}></Route>


    </Routes>
    </BrowserRouter>
  )
}
