import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
import Header from '../../components/layout/Header/Header';
import products from '../../data/products'; // Assuming you have a products data file
import { Product } from '../../data/products';

const toggleFilter = (filterName: string) => {
  console.log(filterName);
}

const ProductsPage = () => {
  return (
    <div className="bg-gradient-to-r from-primaryBlack to-primaryGray min-h-screen">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <nav className="text-secondaryGray mb-4">
          <Link to="/" className="hover:underline">Home</Link> /  <span className="text-secondaryGray">  Products</span>
        </nav>
        <h1 className="text-4xl font-bold text-secondaryGray mb-2 font-secondary">Our Products</h1>
        <p className="text-secondaryGray mb-8">
          Our brand of wires & cables matches highest international standards for quality and dependability each Cable/Wire undergoes rigorous quality check at every stage right from purchasing of raw materials to designing, manufacturing & dispatching.
        </p>
        <div className="flex justify-between items-center mb-4">
          <button className="text-secondaryGray">Hide Filters</button> 
          <span className="text-secondaryGray">24 items</span>
          <button className="text-secondaryGray">Sort ⇅</button>
        </div>
        <div className="flex flex-wrap">
          <aside className="w-full md:w-1/4 pr-4">
            <div className="mb-4 flex justify-between mr-4">
              <h2 className="text-lg font-bold text-secondaryGray">Type</h2>
              <button className="cusor-pointer text-lg font-bold text-secondaryGray" onClick={() => toggleFilter("type")}>+</button>
              {/* Add filter options here */}
            </div>
            <div className="mb-4 flex justify-between mr-4">
              <h2 className="text-lg font-bold text-secondaryGray">Metal</h2>
              <button className="cusor-pointer text-lg font-bold text-secondaryGray" onClick={() => toggleFilter("metal")}>+</button>
              {/* Add filter options here */}
            </div>
            <div className="mb-4 flex justify-between mr-4">
              <h2 className="text-lg font-bold text-secondaryGray">Style</h2>
              <button className="cusor-pointer text-lg font-bold text-secondaryGray" onClick={() => toggleFilter("style")}>+</button>
              {/* Add filter options here */}
            </div>
            <div className="mb-4 flex justify-between mr-4">
              <h2 className="text-lg font-bold text-secondaryGray">Length</h2>
              <button className="cusor-pointer text-lg font-bold text-secondaryGray" onClick={() => toggleFilter("length")}>+</button>
              {/* Add filter options here */}
            </div>
            <div className="mb-4 flex justify-between mr-4">
              <h2 className="text-lg font-bold text-secondaryGray">Price</h2>
              <button className="cusor-pointer text-lg font-bold text-secondaryGray" onClick={() => toggleFilter("price")}>+</button>
              {/* Add filter options here */}
            </div>
          </aside>
          
          <section className="w-full md:w-3/4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product: Product, index: number) => (
              <motion.div 
                key={index} 
                className="overflow-hidden shadow-lg bg-transparent"
              >
                <div className="relative aspect-square overflow-hidden border border-white border-solid border-4 bg-transparent">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white z-0"></div>
                  <img 
                    src={`${product.image}`} 
                    alt={product.name} 
                    className="w-full h-full object-contain relative z-10"
                  />
                </div>
                <motion.div 
                  className="p-4 border border-white border-solid bg-transparent flex justify-between items-center group"
                  whileHover={{ backgroundColor: 'white', transition: { duration: 0.3, ease: 'easeInOut' } }}
                >
                  <div>
                    <h3 className="text-lg font-bold mb-1 truncate text-white group-hover:text-primaryBlack">
                      {product.name}
                    </h3>
                    <p className="text-secondaryGray text-sm text-white group-hover:text-primaryBlack">
                      from Rs.{product.price}
                    </p>
                  </div>
                  <motion.div 
                    className="text-white group-hover:text-primaryBlack"
                  >
                    <FaArrowRight className=" group-hover:scale-110 group-hover:translate-x-1 transition-transform duration-300 ease-in-out"/>
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </section>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
