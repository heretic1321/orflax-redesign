import HomePage from './pages/Home/HomePage'
import './App.scss'
import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom';
import FloatingButton from './components/ui/FloatingButton/FloatingButton';
import ProductsPage from './pages/Products/ProductsPage';
import SingleProductPage from './pages/Products/SingleProductPage';
import ProductLinks from './pages/Products/ProductLinks';

function App() {

  return (
    <Router>
      <FloatingButton />
      <Routes>
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/products/:productName" element={<SingleProductPageWrapper />} />
        <Route path="/" element={<ProductLinks />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<div/>} />
        <Route path="/services" element={<div/>} />
        <Route path="/contact" element={<div/>} />
      </Routes>
    </Router>
  )
}

function SingleProductPageWrapper() {
    const { productName } = useParams();
    const decodedProductName = decodeURIComponent(productName ?? '');
    return <SingleProductPage product={decodedProductName} />;
}

export default App
