import Header from '../../components/layout/Header/Header';
import { useState, useEffect } from 'react';
import './BulkSavingsCalculator.scss'; // Import the CSS file

const BulkOrderCalculator = () => {
  // Define the type for the pricing object
  type PricingType = {
    [product: string]: {
      [type: string]: {
        [dimension: string]: number;
      };
    };
  };

  // Define the pricing object
  const pricing: PricingType = {
    'Flexible Alloy Wire': {
      '45': {
        '18/40': 290,
        '23/40': 345,
        '30/40': 398,
        '40/40': 505,
        '50/40': 605,
      },
      '90': {
        '18/40': 575,
        '23/40': 675,
        '30/40': 785,
        '40/40': 995,
        '50/40': 1175,
      },
    },
    'Multistrand Wire': {
      '45': {
        '24/0.2': 635,
        '14/0.3': 835,
        '22/0.3': 1255,
        '36/0.3': 2020,
        '56/0.3': 3090,
      },
      '90': {
        '24/0.2': 1265,
        '14/0.3': 1660,
        '22/0.3': 2499,
        '36/0.3': 4030,
        '56/0.3': 6160,
        '84/0.3': 9150,
        '140/0.3': 15200,
      },
    },
    'Submersible Wire': {
      '100': {
        '22/0.3': 9435,
        '36/0.3': 14740,
        '56/0.3': 22360,
        '84/0.3': 32070,
        '140/0.3': 52410,
      },
    },
  };

  // State variables
  const [product, setProduct] = useState<keyof PricingType>('Flexible Alloy Wire'); // Default product
  const [type, setType] = useState<string>('45'); // For wire length
  const [dimension, setDimension] = useState<string>('18/40'); // For Flexible Alloy Wire
  const [coils, setCoils] = useState(50);
  const [totalAmount, setTotalAmount] = useState(0);
  const [totalSavings, setTotalSavings] = useState(0);
  const [displayedSavings, setDisplayedSavings] = useState(0);

  // Define font size ranges
  const minFontSizeTotal = 1.5; // rem
  const maxFontSizeTotal = 2.5; // rem

  const minFontSizeSavings = 1; // rem
  const maxFontSizeSavings = 2.5; // rem

  const minCoils = 50;
  const maxCoils = 150;

  // Calculate font sizes based on coils
  const fontSizeTotal =
    maxFontSizeTotal -
    ((coils - minCoils) / (maxCoils - minCoils)) * (maxFontSizeTotal - minFontSizeTotal);

  const fontSizeSavings =
    minFontSizeSavings +
    ((coils - minCoils) / (maxCoils - minCoils)) * (maxFontSizeSavings - minFontSizeSavings);

  // Handle Calculation
  const calculateTotal = () => {
    const rate = pricing[product][type][dimension];
    let amount = rate * coils;
    let savings = 0;

    // Apply discount based on the number of coils
    if (coils >= 50 && coils < 100) {
      savings = amount * 0.1; // 10% discount for 50-99 coils
    } else if (coils >= 100 && coils < 150) {
      savings = amount * 0.15; // 15% discount for 100-149 coils
    } else if (coils >= 150) {
      savings = amount * 0.2; // 20% discount for 150+ coils
    }

    amount = amount - savings;
    setTotalAmount(amount);
    setTotalSavings(savings);
  };

  useEffect(() => {
    calculateTotal();
  }, [product, type, dimension, coils]);

  // Easing function for deceleration (using easeOutQuint)
  const customEaseOut = (t: number) => {
    return 1 - Math.pow(1 - t, 10);
  };
  

  // Animate savings counter with deceleration
  useEffect(() => {
    let animationFrame: number;
    const duration = 1000; // Animation duration in milliseconds
    const startTime = performance.now();
    const startSavings = displayedSavings;
    const endSavings = totalSavings;

    const animate = (time: number) => {
      const elapsed = time - startTime;
      const linearProgress = Math.min(elapsed / duration, 1);
      const easedProgress = customEaseOut(linearProgress);
      const currentSavings = startSavings + (endSavings - startSavings) * easedProgress;
      setDisplayedSavings(currentSavings);

      if (linearProgress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, [totalSavings]);

  // Set dimension options dynamically based on selected product and type
  const getDimensionOptions = () => {
    return Object.keys(pricing[product][type]).map((dim) => (
      <option key={dim} value={dim}>
        {dim}
      </option>
    ));
  };

  // Ensure type and dimension are reset properly when switching products
  const handleProductChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedProduct = e.target.value as keyof PricingType;
    setProduct(selectedProduct);

    // Reset type and dimension when product changes
    if (selectedProduct === 'Submersible Wire') {
      setType('100');
      setDimension('22/0.3'); // Default dimension for submersible wire
    } else {
      setType('45');
      setDimension('18/40');
    }
  };

  return (
    <div className='bg-gradient-to-r from-primaryBlack to-primaryGray min-h-screen'>
      <Header />
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="bg-secondaryGray p-8 rounded-lg shadow-lg max-w-4xl mx-auto">
          <h2 className="text-6xl font-bold mb-6 text-center text-primaryBlack font-secondary">
            Bulk Savings Calculator
          </h2>
          <h3 className="text-xl mb-8 text-center text-primaryBlack">
            Get a discount on your Bulk Order!
          </h3>

          {/* Product Selection */}
          <div className="mb-6">
            <label className="block text-lg font-medium text-primaryBlack mb-2">
              Select Product:
            </label>
            <div className="flex justify-center space-x-4">
              {['Flexible Alloy Wire', 'Multistrand Wire', 'Submersible Wire'].map((item) => (
                <button
                  key={item}
                  onClick={() =>
                    handleProductChange({
                      target: { value: item },
                    } as React.ChangeEvent<HTMLSelectElement>)
                  }
                  className={`px-4 py-2 rounded-lg shadow-md transition-all duration-300 ease-in-out ${
                    product === item ? 'bg-highlightYellow text-primaryBlack' : 'bg-white text-primaryBlack'
                  } hover:bg-highlightYellow hover:text-primaryBlack`}
                >
                  {item.split(' ')[0]}
                </button>
              ))}
            </div>
          </div>

          {/* Type Selection */}
          <div className="mb-6">
            <label className="block text-lg font-medium text-primaryBlack mb-2">Type:</label>
            <select
              value={type}
              onChange={(e) => setType(e.target.value)}
              disabled={product === 'Submersible Wire'}
              className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-highlightYellow"
            >
              {product === 'Submersible Wire' ? (
                <option value="100">Per 100 Mtrs</option>
              ) : (
                <>
                  <option value="45">Per 45 Mtrs</option>
                  <option value="90">Per 90 Mtrs</option>
                </>
              )}
            </select>
          </div>

          {/* Dimension Selection */}
          <div className="mb-6">
            <label className="block text-lg font-medium text-primaryBlack mb-2">Dimension:</label>
            <select
              value={dimension}
              onChange={(e) => setDimension(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-highlightYellow"
            >
              {getDimensionOptions()}
            </select>
          </div>

          {/* Number of Coils */}
          <div className="mb-6">
            <label className="block text-lg font-medium text-primaryBlack mb-2">
              Number of Coils:
            </label>
            <input
              type="range"
              min={minCoils}
              max={maxCoils}
              value={coils}
              onChange={(e) => setCoils(Number(e.target.value))}
              className="block w-full py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring"
            />
            <div className="text-center mt-2">{coils} Coils</div>
          </div>

          {/* Output: Total Amount & Savings */}
          <div className="text-center">
            <h3
              className="font-bold text-primaryBlack"
              style={{ fontSize: `${fontSizeTotal}rem` }}
            >
              Total Amount: ₹{totalAmount.toFixed(2)}
            </h3>
            <h4
              className={`text-primaryBlack mt-2 text-highlightYellow savings-transition`}
              style={{ fontSize: `${fontSizeSavings}rem` }}
            >
              You saved: ₹{displayedSavings.toFixed(2)}! 💰
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BulkOrderCalculator;
