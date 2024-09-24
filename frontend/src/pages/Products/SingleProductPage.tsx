import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../../components/layout/Header/Header';
import { CableOptions, CableProduct } from './../../types/product';
import { motion } from 'framer-motion';

interface SelectedOptions {
  length?: number | null;
  normalAreaOfConductor?: number | string | null;
  cores?: number | null;
  conductorType?: string | null;
  size?: string | null;
  [key: string]: any;
}


interface ProductPageProps {
  product: CableProduct;
}

const ProductPage: React.FC<ProductPageProps> = ({ product }) => {
  const navigate = useNavigate();

  if (!product || !product.options) {
    return <div>Product data is not available.</div>;
  }

  // Define the order of options
  const optionOrder: (keyof CableOptions)[] = ['length', 'normalAreaOfConductor', 'cores', 'conductorType', 'size'];


  // Initialize selectedOptions with the options from the first data item
  const initialSelectedOptions: SelectedOptions = {};
  if (product.data && product.data.length > 0) {
    const firstDataItem = product.data[0];
    optionOrder.forEach((optionType) => {
      if (firstDataItem[optionType] !== undefined) {
        initialSelectedOptions[optionType] = firstDataItem[optionType];
      } else {
        initialSelectedOptions[optionType] = null;
      }
    });
  } else {
    // Handle case where there's no data
    optionOrder.forEach((optionType) => {
      initialSelectedOptions[optionType] = null;
    });
  }


  const [selectedOptions, setSelectedOptions] = useState<SelectedOptions>(initialSelectedOptions);
  const getAvailableOptions = (
    optionType: keyof CableOptions,
    currentSelections: SelectedOptions
  ): (number | string)[] => {
    // Only consider options prior to the current one in optionOrder
    const index = optionOrder.indexOf(optionType);
    const selectedOptionTypes = optionOrder.slice(0, index).filter(
      (key) => currentSelections[key] !== undefined && currentSelections[key] !== null
    );
  
    const matchingItems = product.data.filter((item) =>
      selectedOptionTypes.every((optionKey) => item[optionKey] === currentSelections[optionKey])
    );
  
    const availableOptions = matchingItems
      .map((item) => item[optionType])
      .filter(
        (value, idx, self) => value !== undefined && self.indexOf(value) === idx
      ) as (number | string)[];
  
    return availableOptions;
  };
  
  
  // Calculate available options for each option type
  const availableOptions: { [key in keyof CableOptions]: (number | string)[] } = {} as any;
  optionOrder.forEach((optionType) => {
    availableOptions[optionType] = getAvailableOptions(optionType, selectedOptions);
  });

  // Handle Option Change
  const handleOptionChange = (optionType: keyof CableOptions, value: any) => {
    setSelectedOptions((prevOptions: SelectedOptions) => {
      const newOptions: SelectedOptions = {
        ...prevOptions,
        [optionType]: value,
      };
  
      // Reset dependent options only if they are no longer valid
      const index = optionOrder.indexOf(optionType);
      for (let i = index + 1; i < optionOrder.length; i++) {
        const depOption = optionOrder[i];
        const options = getAvailableOptions(depOption, newOptions);
        if (!options.includes(newOptions[depOption])) {
          newOptions[depOption] = options.length > 0 ? options[0] : null;
        }
      }
      return newOptions;
    });
  };
  

  // Get filtered data based on selected options
  const filteredData = product.data.find((item) =>
    optionOrder.every((optionKey) =>
      selectedOptions[optionKey] ? item[optionKey] === selectedOptions[optionKey] : true
    )
  );

  // Handle Enquiry
  const handleEnquire = () => {
    const enquiryData = {
      subject: `Enquiry about ${product.name}`,
      type: 'Order Enquiry',
      message: `I would like to enquire about the following product:\n\nProduct: ${product.name}\n${Object.entries(
        selectedOptions
      )
        .map(([key, value]) => (value ? `${formatLabel(key)}: ${value}\n` : ''))
        .join('')}Rate: ₹${filteredData?.rate}\n\nPlease provide more details.`,
    };
    navigate('/contact', { state: { enquiryData } });
  };

  // Function to format labels
  const formatLabel = (key: string) => {
    const labels: { [key: string]: string } = {
      dimension: 'Dimension',
      package: 'Package',
      currentCapacity: 'Current Capacity',
      size: 'Size',
      cores: 'Cores',
      normalAreaOfConductor: 'Normal Area of Conductor',
    };
    return labels[key] || key.charAt(0).toUpperCase() + key.slice(1);
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
                className="object-cover relative z-10"
              />
            </div>
            <div className="bg-[#c7c7c7] pb-6 pt-8">
              <div className="grid grid-cols-1 gap-4">
                {filteredData
                  ? Object.entries(filteredData)
                      .filter(
                        ([key, value]) =>
                          !['rate', ...optionOrder].includes(key) && value !== undefined && value !== null
                      )
                      .map(([key, value]) => (
                        <React.Fragment key={key}>
                          <div className="flex justify-between">
                            <span className="pl-4">{formatLabel(key)}:</span>
                            <span className="px-4">
                              {key === 'currentCapacity' ? `${value} A` : value}
                            </span>
                          </div>
                          <hr className="border-t border-primaryBlack my-2" />
                        </React.Fragment>
                      ))
                  : null}
              </div>
            </div>
          </div>
          {/* Right Section */}
          <div className="lg:w-1/2 w-full lg:pl-8 mt-8 lg:mt-0">
            <nav className="text-secondaryGray mb-4">
              <Link to="/" className="hover:underline">
                Home
              </Link>{' '}
              /{' '}
              <Link to="/products" className="hover:underline">
                Products
              </Link>{' '}
              / <span className="text-secondaryGray">{product.name}</span>
            </nav>
            <h1 className="text-4xl font-bold mb-2 font-secondary text-white">{product.name}</h1>
            <p className="text-lg mb-4 text-secondaryGray">₹ {filteredData?.rate}</p>
            <p className="text-lg mb-4 text-white">{product.description}</p>
            <div className="mb-4">
              <h2 className="text-2xl font-bold mb-2 text-secondaryGray">Choose Option:</h2>
              {/* Options Rendering */}
              {optionOrder.map((optionType) => {
                const options = product.options[optionType];
                if (options && options.length > 0) {
                  return (
                    <div className="mb-4" key={optionType}>
                      <label className="block text-lg font-bold mb-2 text-secondaryGray">
                        {formatLabel(optionType as string)}
                      </label>
                      {options.map((optionValue) => {
                        const isAvailable = availableOptions[optionType].includes(optionValue);
                        return (
                          <motion.button
                            key={String(optionValue)}
                            className={`mr-2 mb-2 px-4 py-2 border bg-white text-primaryBlack shadow-lg shadow-primaryGray border-2 border-solid ${
                              selectedOptions[optionType] === optionValue
                                ? 'border-highlightYellow'
                                : 'border-gray-300'
                            } ${!isAvailable ? 'opacity-50 cursor-not-allowed' : ''}`}
                            onClick={() => isAvailable && handleOptionChange(optionType, optionValue)}
                            disabled={!isAvailable}
                            whileHover={
                              isAvailable
                                ? {
                                    scale: 1.1,
                                    backgroundColor: '#ffcc00',
                                    boxShadow: '0px 0px 8px rgba(0, 0, 0, 0.3)',
                                  }
                                : {}
                            }
                            whileTap={isAvailable ? { scale: 0.9 } : {}}
                          >
                            {optionValue} {optionType === 'normalAreaOfConductor' ? 'sq.mm' : ''}
                            {optionType === 'length' ? 'm' : ''}
                          </motion.button>
                        );
                      })}
                    </div>
                  );
                }
                return null;
              })}
            </div>
            <motion.button
              whileHover={{
                scale: 1.1,
                backgroundColor: '#ffcc00',
                boxShadow: '0px 0px 8px rgba(0, 0, 0, 0.3)',
              }}
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
