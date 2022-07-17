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
    let checkedForItem = cartItemCopy.filter(x=>x.id == product.id)
    if(checkedForItem.length == 0){
      product.amount = 1
      cartItemCopy.push(product)
      setCartAmount(cartAmount=>cartAmount+1)
      setCartItem(cartItems=>cartItems=cartItemCopy)
      return
    }
    cartItemCopy.map(x=>{
      return x.id == product.id ? x.amount = x.amount + 1: x
    })
    setCartAmount(cartAmount=>cartAmount+1)
    setCartItem(cartItems=>cartItems=cartItemCopy)
    
  }
  function updateAmount(e, item){
    let cartItemCopy = cartItems.slice()
    cartItemCopy.map(x=>{
      if(x.id != item.id) return x
      if(e.currentTarget.id == 'increaseAmount'){
        setCartAmount(cartAmount=>cartAmount+1)
        return x.amount = x.amount + 1
      }
      if(x.amount > 0){
        setCartAmount(cartAmount=>cartAmount-1)
        return x.amount = x.amount - 1 
      } 
    })
    cartItemCopy = cartItemCopy.filter(x=>x.amount != 0)
    setCartItem(cartItems=>cartItems = cartItemCopy)
  }

  const [isShowing, setIsShowing] = useState('none') //Chnage back to none
  function showCart(){
    if(isShowing == 'none') return setIsShowing(isShowing => isShowing = 'block')
    setIsShowing(isShowing => isShowing = 'none')
  }

  return (
    <BrowserRouter>
    <Routes>

      <Route path='/' element={<Home/>}></Route>
      <Route path='/shop' element={<App isShowing={isShowing} showCart={showCart} cartAmount={cartAmount} cartItems={cartItems} updateAmount={updateAmount}/>}></Route>
      <Route path='/shop/products/:id' element={<Product isShowing={isShowing} showCart={showCart} getCartAmount={getCartAmount} cartItems={cartItems} updateAmount={updateAmount} cartAmount={cartAmount}/>}></Route>


    </Routes>
    </BrowserRouter>
  )
}
