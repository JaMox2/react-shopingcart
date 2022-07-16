import CardItem from "./CardItem";
import allProducts from '../data/allProducts'

export default function MainShop({productDisplayed}) {
  return (
    <ul className="card-container">
      {productDisplayed.map(x=>{
        return <CardItem key={x.id} imgOne={x.image} imgTwo={x.previewImage} name={x.name} price={x.price} id={x.id} product={x}/>
      })}
      
    </ul>
  )
}
