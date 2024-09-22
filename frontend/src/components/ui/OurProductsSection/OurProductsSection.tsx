
import { Link, useNavigate } from 'react-router-dom';
import './OurProductsSection.scss';
import MultistrandWires from './../../../assets/images/cables/multistrandWires.jpeg';
import CoaxialCable from './../../../assets/images/cables/CoaxialCable.jpeg';
import FlexibleCopperWire from './../../../assets/images/cables/FlexibleCopperWire.jpeg';
import MulticoreRoundCableWires from './../../../assets/images/cables/multicoreRoundCableWires.jpeg';
import FlexibleAlloyCable from './../../../assets/images/cables/FlexibleAlloyCable.jpeg';
import SubmersibleCables from './../../../assets/images/cables/SubmersibleCables.png';
import AluminiumRoundCable from './../../../assets/images/cables/AluminiumRoundCable.jpeg';
import ParallelFlatCable from './../../../assets/images/cables/ParallelFlatCable.webp';


const products = [
  {
    name: 'Multistrand Wires',
    image: MultistrandWires,
    description: 'Our Paraflex CCTV Wires and Cables are manufactured by using the best and purest form of the copper with 99.99 % purity.',
    link: '/products/multistrand-wires'
  },
  {
    name: 'Coaxial Cable',
    image: CoaxialCable,
    description: 'Reliable and durable coaxial cables for all your connectivity needs.',
    link: '/products/coaxial-cable'
  },
  {
    name: 'Flexible Copper Wire',
    image: FlexibleCopperWire,
    description: 'High-quality flexible copper wires for various applications.',
    link: '/products/flexible-copper-wire'
  },
  {
    name: 'Multicore Round Cable Wires',
    image: MulticoreRoundCableWires,
    description: 'Durable multicore round cable wires for multiple uses.',
    link: '/products/multicore-round-cable-wires'
  },
  {
    name: 'Flexible Alloy Cable',
    image: FlexibleAlloyCable,
    description: 'Flexible alloy cables for enhanced performance.',
    link: '/products/flexible-alloy-cable'
  },
  {
    name: 'Submersible Cables',
    image: SubmersibleCables,
    description: 'High-quality submersible cables for underwater applications.',
    link: '/products/submersible-cables'
  },
  {
    name: 'Aluminium Round Cable',
    image: AluminiumRoundCable,
    description: 'Durable aluminium round cables for various applications.',
    link: '/products/aluminium-round-cable'
  },
  {
    name: 'Parallel Flat Cable',
    image: ParallelFlatCable,
    description: 'High-quality parallel flat cables for efficient connectivity.',
    link: '/products/parallel-flat-cable'
  }
];

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
            <img src={product.image} alt={product.name} className="w-full h-64 object-cover" />
            <div className="product-info absolute inset-0 bg-black bg-opacity-75 text-white flex flex-col items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
              <h3 className="text-xl font-bold mb-2">{product.name}</h3>
              <p className="text-sm mb-4 px-4 text-center">{product.description}</p>
              <Link to={product.link} className="bg-highlightYellow text-primaryBlack px-4 py-2 rounded-lg">
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-8">
        <button
          onClick={() => navigate('/products')}
          className="px-6 py-3 mt-4 bg-primaryBlack text-lg text-secondaryGray font-semibold transition-colors duration-300 ease-in-out hover:bg-highlightYellow hover:text-primaryBlack"
        >
          See More
        </button>
      </div>
    </div>
  );
};

export default OurProductsSection;
