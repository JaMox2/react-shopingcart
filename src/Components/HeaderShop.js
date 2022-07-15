import { Link } from 'react-router-dom'

export default function HeaderShop() {
  return (
    <div className="header-shop">
      <div className="header-shop-left">
        <Link to='/'>CORSx</Link>
        <Link to='/shop'>Shop</Link>
      </div>
      <div className="header-shop-right">
        <button>
          {/* search bar */}
          <svg class="Header_svgSearch__3CjyM" xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="currentColor"><path d="M23.809 21.646l-6.205-6.205c1.167-1.605 1.857-3.579 1.857-5.711 0-5.365-4.365-9.73-9.731-9.73-5.365 0-9.73 4.365-9.73 9.73 0 5.366 4.365 9.73 9.73 9.73 2.034 0 3.923-.627 5.487-1.698l6.238 6.238 2.354-2.354zm-20.955-11.916c0-3.792 3.085-6.877 6.877-6.877s6.877 3.085 6.877 6.877-3.085 6.877-6.877 6.877c-3.793 0-6.877-3.085-6.877-6.877z"></path></svg>
        </button>
        <button>
          <svg class="Header_svgCart__182oV" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="currentColor"><path d="M16 6v-2c0-2.209-1.791-4-4-4s-4 1.791-4 4v2h-5v18h18v-18h-5zm-7-2c0-1.654 1.346-3 3-3s3 1.346 3 3v2h-6v-2zm10 18h-14v-14h3v1.5c0 .276.224.5.5.5s.5-.224.5-.5v-1.5h6v1.5c0 .276.224.5.5.5s.5-.224.5-.5v-1.5h3v14z"></path></svg>
          {/* State of how many in shopping cart */}
        </button>
      </div>
    </div>
  )
}
