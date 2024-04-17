
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Cart from './pages/Cart'
import Navbar from './components/Navbar'
import Search from './components/Search'
function App() {


  return (
    <div className=''>
      <div className='border items-end'>
        <Navbar />
        <Search />
      </div>
      <div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
