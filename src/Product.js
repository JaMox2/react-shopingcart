import { useLocation, useParams } from "react-router-dom"
import allProducts from './data/allProducts'
import HeaderShop from "./Components/HeaderShop"
import MainProduct from "./Components/MainProduct"

export default function Product({getCartAmount, cartAmount}) {
  let location = useLocation()
  let productId = location.pathname.slice(location.pathname.lastIndexOf('/') + 1, location.pathname.length)
  let filteredProducts = allProducts.filter(x=>{
    return x.id == productId
  })
  

  return (
    <div className="product">
      <HeaderShop cartAmount={cartAmount}/>
      <MainProduct product={filteredProducts} getCartAmount={getCartAmount}/>
    </div>
  )
}
