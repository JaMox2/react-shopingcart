export default function NavbarShop({selectedProduct, selectProductEvent}) {

  function handleSelectProductEvent(e){
    selectProductEvent(e.currentTarget.innerText, e.currentTarget.id)
  }
  
  return (
    <div className="shop-nav">
      <div className="current-nav-selected">
        <h4>SHOP /</h4>
        <span>{selectedProduct}</span>
      </div>
      <ul>
        <li id='allProduct' onClick={(e)=>handleSelectProductEvent(e)}>All Products</li>
        <li id='motherboards' onClick={(e)=>handleSelectProductEvent(e)}>Motherboards</li>
        <li id='video-cards' onClick={(e)=>handleSelectProductEvent(e)}>Video Cards</li>
        <li id='processors' onClick={(e)=>handleSelectProductEvent(e)}>Processors</li>
        <li id='memory' onClick={(e)=>handleSelectProductEvent(e)}>Memory</li>
        <li id='chassis' onClick={(e)=>handleSelectProductEvent(e)}>Chassis</li>
      </ul>
    </div>
  )
}
