
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Cart from './pages/Cart'
import Navbar from './components/Navbar'
import Search from './components/Search'
import About from './pages/About'
import Login from './pages/Login'
import Description from './pages/Description'
import SignUp from './pages/SignUp'
import Admin from './pages/Admin'
import AdminDel from './pages/AdminDel'
function App() {


  return (
    <div className='bg-sky-300'>
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
          <Route path='/signup' element={<SignUp />} />
          <Route path='/admin' element={<Admin />} />
          <Route path='/admindel' element={<AdminDel />} />
          <Route path='/description' element={<Description />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
