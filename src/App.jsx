import { Routes,Route, Router } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Cart from './pages/Cart'
import Navbar from './components/Navbar'
function App() {
  

  return (
    <>
    <div>
      <Navbar/>
    </div>
    <Router>
      <Route path='/' element={<Home/>}/>
      <Route path='/cart' element={<Cart/>}/>
    </Router>
    </>
  )
}

export default App
