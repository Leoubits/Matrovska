import { Home } from './pages/Home.jsx';
import { Catalog } from './pages/Catalog.jsx';
import { SingleProduct } from './pages/SingleProduct.jsx';
import { Login } from './pages/Login.jsx';
import { Cart } from './pages/Cart.jsx';
import './style/style.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <Routes>
      <Route path='/' element={<Home />} exact></Route>
      <Route path='/Catalog' element={<Catalog />}></Route>
      <Route path='/SingleProduct' element={<SingleProduct />}></Route>
      <Route path='/Login' element={<Login />} ></Route>
      <Route path='/Cart' element={<Cart />}></Route>
    </Routes>
  )
}


export default App;
