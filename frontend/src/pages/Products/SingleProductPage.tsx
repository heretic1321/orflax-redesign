import React, { useState, useEffect } from 'react';
import { CableProduct } from './../../types/product'; // Updated import

interface ProductPageProps {
  product: CableProduct; // Updated to receive the complete CableProduct type
}

const ProductPage: React.FC<ProductPageProps> = ({ product }) => {
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

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row">
        <div className="lg:w-1/2 w-full">
          <img 
            src={`/images/cables/${product.image}`} 
            alt={product.name} 
            className="w-full h-auto object-contain"
          />
          <div className="mt-4">
            <h1 className="text-4xl font-bold mb-2">{product.name}</h1>
            <p className="text-lg mb-4">{product.description}</p>
            {filteredData && (
              <div>
                <p><strong>Normal Area of Conductor:</strong> {filteredData.normalAreaOfConductor} sq.mm</p>
                <p><strong>Dimension:</strong> {filteredData.dimension}</p>
                {filteredData.core && <p><strong>Core:</strong> {filteredData.core}</p>}
                {filteredData.conductorType && <p><strong>Conductor Type:</strong> {filteredData.conductorType}</p>}
                <p><strong>Package:</strong> {filteredData.package}</p>
              </div>
            )}
          </div>
        </div>
        <div className="lg:w-1/2 w-full lg:pl-8 mt-8 lg:mt-0">
          <div className="mb-4">
            <h2 className="text-2xl font-bold mb-2">Options</h2>
            <div className="mb-4">
              <label className="block text-lg font-bold mb-2">Length</label>
              {product.options.length.map((length) => (
                <button 
                  key={length} 
                  className={`mr-2 mb-2 px-4 py-2 border ${selectedOptions.length === length ? 'border-black' : 'border-gray-300'}`}
                  onClick={() => handleOptionChange('length', length)}
                >
                  {length} m
                </button>
              ))}
            </div>
            <div className="mb-4">
              <label className="block text-lg font-bold mb-2">Normal Area of Conductor</label>
              {product.options?.normalAreaOfConductor?.map((area) => (
                <button 
                  key={area} 
                  className={`mr-2 mb-2 px-4 py-2 border ${selectedOptions.normalAreaOfConductor === area ? 'border-black' : 'border-gray-300'}`}
                  onClick={() => handleOptionChange('normalAreaOfConductor', area)}
                >
                  {area} sq.mm
                </button>
              ))}
            </div>
            {product.options.cores && (
              <div className="mb-4">
                <label className="block text-lg font-bold mb-2">Core</label>
                {product.options.cores.map((core) => (
                  <button 
                    key={core} 
                    className={`mr-2 mb-2 px-4 py-2 border ${selectedOptions.core === core ? 'border-black' : 'border-gray-300'}`}
                    onClick={() => handleOptionChange('core', core)}
                  >
                    {core}
                  </button>
                ))}
              </div>
            )}
            {product.options.conductorType && (
              <div className="mb-4">
                <label className="block text-lg font-bold mb-2">Conductor Type</label>
                {product.options.conductorType.map((type) => (
                  <button 
                    key={type} 
                    className={`mr-2 mb-2 px-4 py-2 border ${selectedOptions.conductorType === type ? 'border-black' : 'border-gray-300'}`}
                    onClick={() => handleOptionChange('conductorType', type)}
                  >
                    {type}
                  </button>
                ))}
              </div>
            )}
          </div>
          {filteredData && (
            <div className="mt-4">
              <h2 className="text-2xl font-bold mb-2">Price</h2>
              <p className="text-lg">Rs. {filteredData.rate}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;