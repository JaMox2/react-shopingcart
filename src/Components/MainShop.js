import CardItem from "./CardItem";
import allProducts from '../data/allProducts'

export default function MainShop() {
  return (
    <ul className="card-container">
      {allProducts.map(x=>{
        return <CardItem key={x.id} imgOne={x.image} imgTwo={x.previewImage} name={x.name} price={x.price} id={x.id}/>
      })}
      
      {/* <CardItem imgOne={allProducts[0].image} imgTwo={allProducts[0].previewImage} name={allProducts[0].name} price={allProducts[0].price} id={allProducts[0].id}/>
      <CardItem imgOne={allProducts[0].image} imgTwo={allProducts[0].previewImage} name={allProducts[0].name} price={allProducts[0].price} id={allProducts[0].id}/>
      <CardItem imgOne={allProducts[0].image} imgTwo={allProducts[0].previewImage} name={allProducts[0].name} price={allProducts[0].price} id={allProducts[0].id}/>
      <CardItem imgOne={allProducts[0].image} imgTwo={allProducts[0].previewImage} name={allProducts[0].name} price={allProducts[0].price} id={allProducts[0].id}/> */}

    </ul>
  )
}
