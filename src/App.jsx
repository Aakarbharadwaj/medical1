
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Cart from './pages/Cart'
import Navbar from './components/Navbar'
import Search from './components/Search'
import About from './pages/About'
import Login from './pages/Login'
function App() {


  return (
    <div className=''>
      <div className='items-end'>
        <Navbar />
        <Search />
      </div>
      <div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/about' element={<About />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
