export default function CartItem({item, updateAmount}) {
  function handleUpdateAmount(e, item){
    updateAmount(e, item)
  }
  return (
    <div className="cartItem">
      <img src={item.image} alt={item.name} />
      <div className="cart-ctrls">
        <span>{item.category}</span>
        <h6>{item.name}</h6>
        <div className="cart-ctrls-amount">
          <button id="decreseeAmount" onClick={(e)=>handleUpdateAmount(e, item)}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path d="M0 10h24v4h-24z"></path></svg></button>
          <span>{item.amount}</span>
          <button id="increaseAmount" onClick={(e)=>handleUpdateAmount(e, item)}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path d="M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z"></path></svg></button>
        </div>
      </div>
      <span>${item.price * item.amount}</span>
    </div>
  )
}
