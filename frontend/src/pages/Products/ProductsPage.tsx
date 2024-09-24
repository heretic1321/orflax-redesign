import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
import Header from '../../components/layout/Header/Header';
import productsData from './productsData'; // Updated import
import { CableProduct } from './../../types/product';

// Define the type for filterOptions keys
type FilterOptionKeys = 'series' | 'conductorType' | 'core' | 'length';

// Ensure filterOptions is typed correctly
const filterOptions: Record<FilterOptionKeys, { id: number; name: string, value: string }[]> = {
  series: [
    { id: 1, name: 'Evo', value: 'Evo' },
    { id: 2, name: 'Nexa', value: 'Nexa' },
  ],
  conductorType: [
    { id: 1, name: 'Single Conductor', value: 'Single' },
    { id: 2, name: 'Multiple Conductor', value: 'Multiple' },
  ],
  core: [
    { id: 1, name: '2 cores', value: '2' },
    { id: 2, name: '3 cores', value: '3' },
    { id: 3, name: '4 cores', value: '4' },
  ],
  length: [
    { id: 1, name: '45 meters', value: '45' },
    { id: 2, name: '90 meters', value: '90' },
    { id: 3, name: '100 meters', value: '100' },
    { id: 4, name: '250 meters', value: '250' },
  ],
};

const ProductsPage = () => {
  const [visibleFilters, setVisibleFilters] = useState<{ [key: string]: boolean }>({});
  const [selectedFilters, setSelectedFilters] = useState<{ [key: string]: number[] }>({});
  const [filtersVisible, setFiltersVisible] = useState(true);

  const toggleFilterVisibility = (filterName: string) => {
    setVisibleFilters((prev) => ({
      ...prev,
      [filterName]: !prev[filterName],
    }));
  };

  const toggleFilterOption = (filterName: string, optionId: number) => {
    setSelectedFilters((prev) => {
      const currentOptions = prev[filterName] || [];
      if (currentOptions.includes(optionId)) {
        return {
          ...prev,
          [filterName]: currentOptions.filter((id) => id !== optionId),
        };
      } else {
        return {
          ...prev,
          [filterName]: [...currentOptions, optionId],
        };
      }
    });
  };

  const filterProducts = (product: CableProduct) => {
    for (const filterName in selectedFilters) {
      const selectedOptions = selectedFilters[filterName];
      if (selectedOptions && selectedOptions.length > 0) {
        const filterOptionValues = filterOptions[filterName as FilterOptionKeys]
          .filter((option) => selectedOptions.includes(option.id))
          .map((option) => option.value);

        if (filterName === 'series' && !filterOptionValues.includes(product.series[0])) {
          return false;
        }
        if (filterName === 'conductorType' && !filterOptionValues.includes(product.options.conductorType?.toString()!)) {
          return false;
        }
        if (filterName === 'core' && !filterOptionValues.includes(product.options.cores?.toString()!)) {
          return false;
        }
        if (filterName === 'length' && !filterOptionValues.includes(product.options.length?.toString() ?? '')) {
          return false;
        }
      }
    }
    return true;
  };

  const filteredProducts = Object.entries(productsData).filter(([_, product]) => filterProducts(product));

  const navigate = useNavigate();

  return (
    <div className="bg-gradient-to-r from-primaryBlack to-primaryGray min-h-screen">
      <Header />
      <div className="px-4 py-8">
        <div className="w-full mb-8 lg:mb-0 px-4">
          <nav className="text-secondaryGray mb-4">
            <Link to="/" className="hover:underline">
              Home
            </Link>{' '}
            / <span className="text-secondaryGray"> Products</span>
          </nav>
          <h1 className="text-4xl font-bold text-secondaryGray mb-2 font-secondary">Our Products</h1>
          <p className="text-secondaryGray mb-8 w-1/2">
            Our brand of wires & cables matches highest international standards for quality and dependability each Cable/Wire undergoes rigorous quality check at every stage right from purchasing of raw materials to designing, manufacturing & dispatching.
          </p>
          <div className="flex items-center justify-between mb-4 space-x-4">
            <button className="text-secondaryGray" onClick={() => setFiltersVisible(!filtersVisible)}>
              {filtersVisible ? 'Hide Filters' : 'Show Filters'}
            </button>
            <span className="text-secondaryGray">{filteredProducts.length} items</span>
            <button className="text-secondaryGray">Sort ⇅</button>
          </div>
          <div className="flex flex-col lg:flex-row lg:space-x-4 space-y-4 lg:space-y-0">
            {filtersVisible && (
              <div className="lg:w-1/4 w-full">
                {Object.keys(filterOptions).map((filterName) => (
                  <div key={filterName} className="mb-4">
                    <div className="flex justify-between items-center">
                      <h2 className="text-lg font-bold text-secondaryGray">
                        {filterName.charAt(0).toUpperCase() + filterName.slice(1)}
                      </h2>
                      <button
                        className="cursor-pointer text-lg font-bold text-secondaryGray"
                        onClick={() => toggleFilterVisibility(filterName)}
                      >
                        {visibleFilters[filterName] ? '-' : '+'}
                      </button>
                    </div>
                    {visibleFilters[filterName] && (
                      <div className="mt-2">
                        {(filterOptions[filterName as keyof typeof filterOptions] || []).map((option) => (
                          <div key={option.id} className="flex items-center mb-2">
                            <input
                              type="checkbox"
                              id={`${filterName}-${option.id}`}
                              checked={selectedFilters[filterName]?.includes(option.id) || false}
                              onChange={() => toggleFilterOption(filterName, option.id)}
                              className="mr-2"
                            />
                            <label htmlFor={`${filterName}-${option.id}`} className="text-secondaryGray">
                              {option.name}
                            </label>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
            <section
              className={`w-full ${filtersVisible ? 'lg:w-3/4' : 'lg:w-full'} grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6`}
            >
              {filteredProducts.map(([key, product]: [string, CableProduct], index: number) => (
                <motion.div
                  key={index}
                  className="overflow-hidden shadow-lg bg-transparent cursor-pointer"
                  onClick={() => navigate(`/products/${key}`)}
                >
                  <div className="relative aspect-square overflow-hidden border border-white border-solid border-4 bg-transparent">
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white z-0"></div>
                    <img
                      src={`/images/cables/${product.image}`}
                      alt={product.name}
                      className="w-full h-full object-cover relative z-0"
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
                        from ₹ {product.data[0].rate}
                      </p>
                    </div>
                    <motion.div className="text-white group-hover:text-primaryBlack">
                      <FaArrowRight className=" group-hover:scale-110 group-hover:translate-x-1 transition-transform duration-300 ease-in-out" />
                    </motion.div>
                  </motion.div>
                </motion.div>
              ))}
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
