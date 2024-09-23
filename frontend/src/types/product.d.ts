// Defining the type for the options available in each product
type CableOptions = {
    length: number[]; // Available lengths (e.g. [45, 90])
    normalAreaOfConductor?: number[] | string[]; // Normal area of conductor (e.g. [0.75, 1.00, etc.] or ["23/52", "40/60", etc.])
    cores?: number[]; // Optional, if applicable (e.g. [2, 3, 4])
    size?: string[]; // Optional, for products like coaxial cables with specific size types (e.g. ["RG-59", "RG-06", etc.])
    conductorType?: string[]; // Optional, for cables with single or multiple conductors (e.g. ["Single", "Multiple"])
  };
  
  // Defining the structure for the product data entries (individual configurations)
  type CableData = {
    series: string;
    length: number;
    size?: string;
    normalAreaOfConductor?: number | string;
    core?: number; // Optional, if applicable for multicore wires
    dimension?: string;
    rate: number;
    package: number | string; // Can be a number or "Standard" for specific product types
    currentCapacity?: number; // Optional, only relevant for specific products like submersible cables
    conductorType?: string; // Optional, for distinguishing between single and multiple conductor types
    
  };
  
  // Defining the full product entry structure
  export interface CableProduct {
    name: string;
    image: string;
    description: string;
    series: string[];
    options: CableOptions;
    data: CableData[];
  };
  
  // Example usage for a full product map
  type CableProducts = {
    [key: string]: CableProduct; // Using the product key (e.g. "multistrandWire") to map to each product entry
  };
  