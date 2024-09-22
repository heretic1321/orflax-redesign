import HomePage from './pages/Home/HomePage'
import './App.scss'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FloatingButton from './components/ui/FloatingButton/FloatingButton';
import ProductsPage from './pages/Products/ProductsPage';

function App() {

  return (
    <Router>
      <FloatingButton />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<div/>} />
        <Route path="/services" element={<div/>} />
        <Route path="/contact" element={<div/>} />
        <Route path="/products" element={<ProductsPage />} />
      </Routes>
    </Router>
  )
}

export default App
