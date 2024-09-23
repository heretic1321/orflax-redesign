import { Link, useNavigate } from 'react-router-dom';
import './OurProductsSection.scss';
import productsData from '../../../pages/Products/productsData';

// Function to get 8 random products
const getRandomProducts = (data: { [key: string]: any }, count: number) => {
  const keys = Object.keys(data);
  const shuffled = keys.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count).map(key => ({ key, ...data[key] }));
};

const products = getRandomProducts(productsData, 8);

const OurProductsSection = () => {
  const navigate = useNavigate();

  return (
    <div className="our-products-section bg-primaryGray py-16">
      <h2 className="text-4xl md:text-4xl lg:text-6xl text-secondaryGray font-bold text-secondary font-secondary mb-8 text-center">
        Our Products
      </h2>
      <div className="products-grid container mt-16 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product, index) => (
          <div key={index} className="product-card relative overflow-hidden">
            <div className="bg-gradient-to-b from-white to-transparent">
              <img src={`/images/cables/${product.image}`} alt={product.name} className="w-full h-64 object-cover" />
            </div>
            <div className="product-info absolute inset-0 bg-black bg-opacity-75 text-white flex flex-col items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
              <h3 className="text-xl font-bold mb-2">{product.name}</h3>
              <p className="text-sm mb-4 px-4 text-center">{product.description}</p>
              <Link to={`/products/${product.key}`} className="bg-highlightYellow text-primaryBlack px-4 py-2 rounded-lg">
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-8">
        <button
          onClick={() => navigate('/products')}
          className="px-6 py-3 mt-4 bg-secondaryGray text-lg text-primaryBlack font-semibold transition-colors duration-300 ease-in-out hover:bg-highlightYellow hover:text-primaryBlack"
        >
          See More
        </button>
      </div>
    </div>
  );
};

export default OurProductsSection;
