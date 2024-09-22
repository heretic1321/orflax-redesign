export interface Product {
    name: string;
    image: string;
    description: string;
    price: number;
    series: string;
    specifications: {
        normalArea: string;
        resistance: string;
        currentRating: string;
        voltage: string;
    }
  }
  
  const products: Product[] = [
    { 
      name: "Aluminium Cable Single", 
      image: "/images/cables/AluminiumCableSingle Background Removed.png",
      description: "High-quality single aluminium cable for various applications.",
      price: 10.99,
      series: "Evo",
      specifications: {
        normalArea: "1.5 sq.mm",
        resistance: "12.1 ohm/km",
        currentRating: "15 A",
        voltage: "450/750 V"
      }
    },
    { 
      name: "Aluminium Cable Twin With Solid", 
      image: "/images/cables/AluminiumCableTwinWithSolid Background Removed.png",
      description: "Durable twin aluminium cable with solid conductor.",
      price: 15.99,
      series: "Evo",
      specifications: {
        normalArea: "2.5 sq.mm",
        resistance: "7.41 ohm/km",
        currentRating: "21 A",
        voltage: "450/750 V"
      }
    },
    { 
      name: "Aluminium Cable With Solid Conductor", 
      image: "/images/cables/AluminiumCableWithSolidConductor Background Removed.png",
      description: "Reliable aluminium cable with solid conductor for stable connections.",
      price: 12.99,
      series: "Evo",
      specifications: {
        normalArea: "4.0 sq.mm",
        resistance: "4.61 ohm/km",
        currentRating: "28 A",
        voltage: "450/750 V"
      }
    },
    { 
      name: "Aluminium Round Cable", 
      image: "/images/cables/AluminiumRoundCable Background Removed.png",
      description: "Versatile round aluminium cable for multiple uses.",
      price: 18.99,
      series: "Evo",
      specifications: {
        normalArea: "6.0 sq.mm",
        resistance: "3.08 ohm/km",
        currentRating: "36 A",
        voltage: "450/750 V"
      }
    },
    { 
      name: "Aluminium Round Cable Conductor", 
      image: "/images/cables/AluminiumRoundCableConductor Background Removed.png",
      description: "High-performance round aluminium cable with conductor.",
      price: 20.99,
      series: "Evo",
      specifications: {
        normalArea: "10.0 sq.mm",
        resistance: "1.83 ohm/km",
        currentRating: "50 A",
        voltage: "450/750 V"
      }
    },
    { 
      name: "Aluminium Round Cable Multiple Conductor", 
      image: "/images/cables/AluminiumRoundCableMultipleConductor Background Removed.png",
      description: "Round aluminium cable with multiple conductors for enhanced performance.",
      price: 25.99,
      series: "Evo",
      specifications: {
        normalArea: "16.0 sq.mm",
        resistance: "1.15 ohm/km",
        currentRating: "68 A",
        voltage: "450/750 V"
      }
    },
    { 
      name: "Coaxial Cable", 
      image: "/images/cables/CoaxialCable Background Removed.png",
      description: "High-quality coaxial cable for signal transmission.",
      price: 8.99,
      series: "Evo",
      specifications: {
        normalArea: "N/A",
        resistance: "75 ohm",
        currentRating: "N/A",
        voltage: "N/A"
      }
    },
    { 
      name: "Flexible Alloy Cable", 
      image: "/images/cables/FlexibleAlloyCable Background Removed.png",
      description: "Flexible alloy cable for versatile applications.",
      price: 14.99,
      series: "Evo",
      specifications: {
        normalArea: "2.5 sq.mm",
        resistance: "7.41 ohm/km",
        currentRating: "21 A",
        voltage: "450/750 V"
      }
    },
    { 
      name: "Flexible Alloy Wire", 
      image: "/images/cables/FlexibleAlloyWire Background Removed.png",
      description: "Durable flexible alloy wire for various uses.",
      price: 9.99,
      series: "Evo",
      specifications: {
        normalArea: "1.5 sq.mm",
        resistance: "12.1 ohm/km",
        currentRating: "15 A",
        voltage: "450/750 V"
      }
    },
    { 
      name: "Flexible Copper Wire", 
      image: "/images/cables/FlexibleCopperWire Background Removed.png",
      description: "High-quality flexible copper wire for reliable connections.",
      price: 11.99,
      series: "Evo",
      specifications: {
        normalArea: "1.5 sq.mm",
        resistance: "12.1 ohm/km",
        currentRating: "15 A",
        voltage: "450/750 V"
      }
    },
    { 
      name: "Aluminium Round Cable Multiple Conductor 6.0 sq.mm", 
      image: "/images/cables/AluminiumRoundCableMultipleConductor Background Removed.png",
      description: "PVC Insulated Aluminium Industrial Cable With Multiple Conductor.",
      price: 4650.00,
      series: "Nexa",
      specifications: {
        normalArea: "6.0 sq.mm",
        resistance: "N/A",
        currentRating: "N/A",
        voltage: "1100 V"
      }
    },
    { 
      name: "Aluminium Round Cable Multiple Conductor 8.0 sq.mm", 
      image: "/images/cables/AluminiumRoundCableMultipleConductor Background Removed.png",
      description: "PVC Insulated Aluminium Industrial Cable With Multiple Conductor.",
      price: 5980.00,
      series: "Nexa",
      specifications: {
        normalArea: "8.0 sq.mm",
        resistance: "N/A",
        currentRating: "N/A",
        voltage: "1100 V"
      }
    },
    { 
      name: "Aluminium Round Cable Multiple Conductor 10.0 sq.mm", 
      image: "/images/cables/AluminiumRoundCableMultipleConductor Background Removed.png",
      description: "PVC Insulated Aluminium Industrial Cable With Multiple Conductor.",
      price: 7050.00,
      series: "Nexa",
      specifications: {
        normalArea: "10.0 sq.mm",
        resistance: "N/A",
        currentRating: "N/A",
        voltage: "1100 V"
      }
    },
    { 
      name: "Aluminium Round Cable Multiple Conductor 12.0 sq.mm", 
      image: "/images/cables/AluminiumRoundCableMultipleConductor Background Removed.png",
      description: "PVC Insulated Aluminium Industrial Cable With Multiple Conductor.",
      price: 8530.00,
      series: "Nexa",
      specifications: {
        normalArea: "12.0 sq.mm",
        resistance: "N/A",
        currentRating: "N/A",
        voltage: "1100 V"
      }
    },
    { 
      name: "Aluminium Round Cable Multiple Conductor 16.0 sq.mm", 
      image: "/images/cables/AluminiumRoundCableMultipleConductor Background Removed.png",
      description: "PVC Insulated Aluminium Industrial Cable With Multiple Conductor.",
      price: 10060.00,
      series: "Nexa",
      specifications: {
        normalArea: "16.0 sq.mm",
        resistance: "N/A",
        currentRating: "N/A",
        voltage: "1100 V"
      }
    },
    { 
      name: "Midnight Black", 
      image: "/images/cables/Midnight Black.zip",
      description: "N/A",
      price: 0,
      series: "Nexa",
      specifications: {
        normalArea: "N/A",
        resistance: "N/A",
        currentRating: "N/A",
        voltage: "N/A"
      }
    },
    { 
      name: "Multicore Round Cable Wires", 
      image: "/images/cables/multicoreRoundCableWires Background Removed.png",
      description: "N/A",
      price: 0,
      series: "Nexa",
      specifications: {
        normalArea: "N/A",
        resistance: "N/A",
        currentRating: "N/A",
        voltage: "N/A"
      }
    },
    { 
      name: "Multistrand Wire Nexa Series", 
      image: "/images/cables/multistrandWireNexaSeries Background Removed.png",
      description: "N/A",
      price: 0,
      series: "Nexa",
      specifications: {
        normalArea: "N/A",
        resistance: "N/A",
        currentRating: "N/A",
        voltage: "N/A"
      }
    },
    { 
      name: "Multistrand Wires", 
      image: "/images/cables/multistrandWires Background Removed.png",
      description: "N/A",
      price: 0,
      series: "Nexa",
      specifications: {
        normalArea: "N/A",
        resistance: "N/A",
        currentRating: "N/A",
        voltage: "N/A"
      }
    },
    { 
      name: "Parallel Flat Cable", 
      image: "/images/cables/ParallelFlatCable Background Removed.png",
      description: "N/A",
      price: 0,
      series: "Nexa",
      specifications: {
        normalArea: "N/A",
        resistance: "N/A",
        currentRating: "N/A",
        voltage: "N/A"
      }
    },
    { 
      name: "Parallel Flat Wire", 
      image: "/images/cables/ParallelFlatWire Background Removed.png",
      description: "N/A",
      price: 0,
      series: "Nexa",
      specifications: {
        normalArea: "N/A",
        resistance: "N/A",
        currentRating: "N/A",
        voltage: "N/A"
      }
    }
  ];
  
  export default products;