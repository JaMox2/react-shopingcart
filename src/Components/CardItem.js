import { Link } from 'react-router-dom'

export default function CardItem({imgOne, imgTwo, name, price, id}) {
  return (
    <li className="card">
      <Link to='#'>
        <div className="img">
          <img src={imgOne} alt={name} />
          <img class='hover' src={imgTwo} alt={name} />
        </div>
        <div className="card-info">
          <h4>{name}</h4>
          <span>$<span>{(`${price}`.includes('.')) ? (price) : (`${price}.00`)}</span></span>
        </div>
      </Link>
    </li>
  )
}
