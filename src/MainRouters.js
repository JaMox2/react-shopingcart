import {BrowserRouter, Routes, Route} from 'react-router-dom'
import App from './App'
import Home from './Home'

export default function MainRouters() {
  return (
    <BrowserRouter>
    <Routes>

      <Route path='/' element={<Home/>}></Route>
      <Route path='/shop' element={<App/>}></Route>

    </Routes>
    </BrowserRouter>
  )
}
