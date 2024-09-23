import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../../components/layout/Header/Header';
import { CableProduct } from './../../types/product';
import { motion } from 'framer-motion';

interface ProductPageProps {
  product: CableProduct;
}

const ProductPage: React.FC<ProductPageProps> = ({ product }) => {
  const navigate = useNavigate();

  useEffect(() => {
    console.log('Product received:', product);
  }, [product]);

  if (!product || !product.options) {
    return <div>Product data is not available.</div>;
  }

  const [selectedOptions, setSelectedOptions] = useState({
    length: product.options.length ? product.options.length[0] : null,
    normalAreaOfConductor: product.options.normalAreaOfConductor ? product.options.normalAreaOfConductor[0] : null,
    core: product.options.cores ? product.options.cores[0] : null,
    conductorType: product.options.conductorType ? product.options.conductorType[0] : null,
  });

  const handleOptionChange = (optionType: string, value: any) => {
    setSelectedOptions((prevOptions) => ({
      ...prevOptions,
      [optionType]: value,
    }));
  };

  const filteredData = product.data.find((item) => 
    item.length === selectedOptions.length &&
    item.normalAreaOfConductor === selectedOptions.normalAreaOfConductor &&
    (selectedOptions.core ? item.core === selectedOptions.core : true) &&
    (selectedOptions.conductorType ? item.conductorType === selectedOptions.conductorType : true)
  );

  const handleEnquire = () => {
    const enquiryData = {
      product: product.name,
      options: selectedOptions,
      details: filteredData,
    };
    navigate('/contact', { state: { enquiryData } });
  };

  return (
    <div className="bg-gradient-to-r from-primaryBlack to-primaryGray min-h-screen">
      <Header />
      <div className="px-12 py-8">
        <div className="flex flex-col lg:flex-row justify-evenly">
          {/* Left Section */}
          <div className="w-full lg:w-1/3 pr-8">
            <div className="relative border border-white border-solid border-4 w-full">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white z-0"></div>
              <img 
                src={`/images/cables/${product.image}`} 
                alt={product.name} 
                className=" object-cover relative z-10"
              />
              
            </div>
            <div className="bg-[#c7c7c7] pb-6 pt-8">
              <div className="grid grid-cols-1 gap-4 ">
                <div className="flex justify-between">
                  <span className="pl-4">Length:</span>
                  <span className="px-4">{filteredData?.length} metres</span>
                </div>
                <hr className="border-t border-primaryBlack my-2" />
                <div className="flex justify-between">
                  <span className="pl-4">No. & Dimension:</span>
                  <span className="px-4">{filteredData?.dimension}</span>
                </div>
                <hr className="border-t border-primaryBlack my-2" />
                <div className="flex justify-between">
                  <span className="pl-4">Pkg. (Coils):</span>
                  <span className="px-4">{filteredData?.package}</span>
                </div>
                <hr className="border-t border-primaryBlack my-2" />
                <div className="flex justify-between">
                  <span className="pl-4">Current Capacity:</span>
                  <span className="px-4">{filteredData?.currentCapacity} A</span>
                </div>
              </div>
            </div>
          </div>
          {/* Right Section */}
          <div className="lg:w-1/2 w-full lg:pl-8 mt-8 lg:mt-0">
            <nav className="text-secondaryGray mb-4">
              <Link to="/" className="hover:underline">
                Home
              </Link>{' '}
              / <Link to="/products" className="hover:underline">Products</Link> / <span className="text-secondaryGray">{product.name}</span>
            </nav>
            <h1 className="text-4xl font-bold mb-2 font-secondary text-white">{product.name}</h1>
            <p className="text-lg mb-4 text-secondaryGray">₹ {filteredData?.rate}</p> 
            <p className="text-lg mb-4 text-white">{product.description}</p>
            <div className="mb-4">
              <h2 className="text-2xl font-bold mb-2 text-secondaryGray">Choose Option:</h2>
              <div className="mb-4">
                <label className="block text-lg font-bold mb-2 text-secondaryGray">Length</label>
                {product.options.length.map((length) => (
                  <motion.button 
                    key={length} 
                    className={`mr-2 mb-2 px-4 py-2 border bg-white text-primaryBlack shadow-lg shadow-primaryGray border-2 border-solid ${selectedOptions.length === length ? 'border-highlightYellow' : 'border-gray-300'}`}
                    onClick={() => handleOptionChange('length', length)}
                    whileHover={{ scale: 1.1, backgroundColor: '#ffcc00', boxShadow: '0px 0px 8px rgba(0, 0, 0, 0.3)' }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {length} m
                  </motion.button>
                ))}
              </div>
              <div className="mb-4">
                <label className="block text-lg font-bold mb-2 text-secondaryGray">Normal Area of Conductor</label>
                {product.options?.normalAreaOfConductor?.map((area) => (
                  <motion.button 
                    key={area} 
                    className={`mr-2 mb-2 px-4 py-2 border bg-white text-primaryBlack shadow-lg shadow-primaryGray border-2 border-solid ${selectedOptions.normalAreaOfConductor === area ? 'border-highlightYellow' : 'border-gray-300'}`}
                    onClick={() => handleOptionChange('normalAreaOfConductor', area)}
                    whileHover={{ scale: 1.1, backgroundColor: '#ffcc00', boxShadow: '0px 0px 8px rgba(0, 0, 0, 0.3)' }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {area} sq.mm
                  </motion.button>
                ))}
              </div>
              {product.options.cores && (
                <div className="mb-4">
                  <label className="block text-lg font-bold mb-2">Core</label>
                  {product.options.cores.map((core) => (
                    <motion.button 
                      key={core} 
                      className={`mr-2 mb-2 px-4 py-2 border bg-white text-primaryBlack shadow-lg shadow-primaryGray border-2 border-solid ${selectedOptions.core === core ? 'border-highlightYellow' : 'border-gray-300'}`}
                      onClick={() => handleOptionChange('core', core)}
                      whileHover={{ scale: 1.1, backgroundColor: '#ffcc00', boxShadow: '0px 0px 8px rgba(0, 0, 0, 0.3)' }}
                      whileTap={{ scale: 0.9 }}
                    >
                      {core}
                    </motion.button>
                  ))}
                </div>
              )}
              {product.options.conductorType && (
                <div className="mb-4">
                  <label className="block text-lg font-bold mb-2">Conductor Type</label>
                  {product.options.conductorType.map((type) => (
                    <motion.button 
                      key={type} 
                      className={`mr-2 mb-2 px-4 py-2 border  bg-white text-primaryBlack shadow-lg shadow-primaryGray border-2 border-solid ${selectedOptions.conductorType === type ? 'border-highlightYellow' : 'border-gray-300'}`}
                      onClick={() => handleOptionChange('conductorType', type)}
                      whileHover={{ scale: 1.1, backgroundColor: '#ffcc00', boxShadow: '0px 0px 8px rgba(0, 0, 0, 0.3)' }}
                      whileTap={{ scale: 0.9 }}
                    >
                      {type}
                    </motion.button>
                  ))}
                </div>
              )}
            </div>
            <motion.button 
              whileHover={{ scale: 1.1, backgroundColor: '#ffcc00', boxShadow: '0px 0px 8px rgba(0, 0, 0, 0.3)' }}
              whileTap={{ scale: 0.9 }}
              className="bg-highlightYellow text-primaryBlack px-6 py-3 mt-4 shadow-md transition-all duration-300 ease-in-out"
              onClick={handleEnquire}
            >
              Enquire
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;