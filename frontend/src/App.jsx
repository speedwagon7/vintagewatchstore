import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import TestHomepage from './pages/testHomepage'
import ProductsPage from './pages/WatchesPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/test" element={<TestHomepage />} />
        <Route path="/products" element={<ProductsPage />}  />
        <Route path="/about"  />
        <Route path="/cart" />
      </Routes>
    </Router>
  )
}

export default App
