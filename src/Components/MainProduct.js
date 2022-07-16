import { useState } from "react";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

export default function MainProduct({product, getCartAmount}) {
  let pr = product[0]
  
  const [currentImg, setCurrentImg] = useState(0)
  let letters = pr.name.split('').map(x=>x==' '?x='':x).join('').toUpperCase()
  console.log(letters[0])

  function newImg(){
    if(currentImg+1 >= pr.gallery.length) return
    setCurrentImg(currentImg=>currentImg+1)
  }
  function preImg(){
    if(currentImg+1 <= 1) return
    setCurrentImg(currentImg=>currentImg-1)
  }
  function addToCart(product){
    getCartAmount(product)
  }


  return (
    <div className="product-main">
      <div className="product-main-left">
        <div className="product-main-left-left">
          <h1>{pr.name}</h1>
        </div>
        <img src={pr.gallery[currentImg]} alt={pr.name} />
        <div className="product-main-left-right">
          <div className="change-gal-img">
            <button onClick={preImg}><FaChevronLeft/></button>
            <button onClick={newImg}><FaChevronRight/></button>
          </div>
          <h3>00{currentImg+1} / 00{pr.gallery.length}</h3>
        </div>
      </div>

      <div className="product-main-right">
        <div className="letters">
          <span>{letters[0]}</span>
          <span>{letters[1]}</span>
          <span>{letters[2]}</span>
          <span>{letters[3]}</span>
          <span>{letters[4]}</span>
          <span>{letters[5]}</span>
          <span>{letters[6]}</span>
          <span>{letters[7]}</span>
          <span>{letters[8]}</span>
        </div>
        <span>${(`${pr.price}`.includes('.')) ? (pr.price) : (`${pr.price}.00`)}</span>
        <button onClick={()=>addToCart(pr)}>Add To Cart</button>
      </div>
    </div>
  )
}
