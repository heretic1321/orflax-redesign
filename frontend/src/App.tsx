import HomePage from './pages/Home/HomePage'
import './App.scss'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FloatingButton from './components/ui/FloatingButton/FloatingButton';
import ProductsPage from './pages/Products/ProductsPage';
import productsData from './pages/Products/productsData';
import SingleProductPage from './pages/Products/SingleProductPage';
import ContactPage from './pages/Contact/ContactPage';
import BulkSavingsCalculator from './pages/BulkSavingsCalculator/BulkSavingsCalculator';
import AboutPage from './pages/About/AboutPage';
function App() {
  return (
    <Router>
      <FloatingButton />
      <Routes>
        <Route path="/products" element={<ProductsPage />} />
        {Object.keys(productsData).map((key) => (
          <Route
            key={key}
            path={`/products/${key}`}
            element={<SingleProductPage product={productsData[key]} />}
          />
        ))}
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage/>} />
        <Route path="/services" element={<div />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/bulk-savings-calculator" element={<BulkSavingsCalculator />} />
      </Routes>
    </Router>
  );
}

export default App;
