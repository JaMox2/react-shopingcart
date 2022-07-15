import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import MainRouters from './MainRouters'

export default function Home() {
  return (
    <div className="home">
      <div className="home-header">
        <Link to='/'>CORSx</Link>
        <Link to='/shop'>Shop</Link>
      </div>
      <div className="home-main">
        <h1>Nvidia GeForce RTX 3090</h1>
        <span>Now available for preorder, shipping December, 2020.</span>
        <Link to="/shop">SHOP NOW</Link>
      </div>
    </div>
  )
}
