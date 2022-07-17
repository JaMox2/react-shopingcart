import { Link } from 'react-router-dom'

export default function CardItem({imgOne, imgTwo, name, price, id, product}) {
  return (
    <li className="card">
      <Link to={{
        pathname: `/shop/products/${id}`,
        state: { product: product }
      }}>
        <div className="img">
          <img src={imgOne} alt={name} />
          <img className='hover' src={imgTwo} alt={name} />
        </div>
        <div className="card-info">
          <h4>{name}</h4>
          <span>$<span>{(`${price}`.includes('.')) ? (price) : (`${price}.00`)}</span></span>
        </div>
      </Link>
    </li>
  )
}
