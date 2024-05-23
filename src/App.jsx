
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
import Footer from './pages/Footer'
import Protected from './pages/Protected'
function App() {


  return (
    <div className='bg-green-500'>
      <div className='items-end'>
        <Navbar />

        <Search />

      </div>
      <div>
        <Routes>
          <Route path='/' element={<Home />} />
          {/* <Route path='/cart' element={<Protected Components={Cart} />} /> */}
          <Route path="/cart" element={
            <Protected>
              <Cart />
            </Protected>
          } />

          {/* <Route path='/cart' element={<Cart />} /> */}
          <Route path='/about' element={<About />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/admin' element={<Admin />} />
          <Route path='/admindel' element={<AdminDel />} />
          <Route path='/description/:_id' element={<Description />} />
        </Routes>
      </div>
      <div><Footer /></div>
    </div>
  )
}

export default App
