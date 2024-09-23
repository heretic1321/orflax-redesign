import { CableProduct } from './../../types/product';

const productsData: { [key: string]: CableProduct } = {
    // Multistrand Wires
    multistrandWire : {
        id: 1,
        name: "Multistrand Wire",
        image: "multistrandWireBgRemoved.png",
        description: "PVC insulated copper conductor multistrand wires designed for 1100 volts IS:694 : 2010 compliance. Available in various lengths and conductor sizes.",
        series: ["Evo"],
        options: {
            length: [45, 90],
            normalAreaOfConductor: [0.75, 1.0, 1.5, 2.5, 4.0, 6.0, 10.0]
        },
        data: [
            { series: "Evo", length: 90, normalAreaOfConductor: 0.75, dimension: "24/0.2", rate: 1265, package: 24 },
            { series: "Evo", length: 90, normalAreaOfConductor: 1.0, dimension: "14/0.3", rate: 1660, package: 20 },
            { series: "Evo", length: 90, normalAreaOfConductor: 1.5, dimension: "22/0.3", rate: 2499, package: 16 },
            { series: "Evo", length: 90, normalAreaOfConductor: 2.5, dimension: "36/0.3", rate: 4030, package: 12 },
            { series: "Evo", length: 90, normalAreaOfConductor: 4.0, dimension: "56/0.3", rate: 6160, package: 8 },
            { series: "Evo", length: 90, normalAreaOfConductor: 6.0, dimension: "84/0.3", rate: 9150, package: 8 },
            { series: "Evo", length: 90, normalAreaOfConductor: 10.0, dimension: "140/0.3", rate: 15200, package: 6 },
            { series: "Evo", length: 45, normalAreaOfConductor: 0.75, dimension: "24/0.2", rate: 635, package: 32 },
            { series: "Evo", length: 45, normalAreaOfConductor: 1.0, dimension: "14/0.3", rate: 835, package: 32 },
            { series: "Evo", length: 45, normalAreaOfConductor: 1.5, dimension: "22/0.3", rate: 1255, package: 32 },
            { series: "Evo", length: 45, normalAreaOfConductor: 2.5, dimension: "36/0.3", rate: 2020, package: 24 },
            { series: "Evo", length: 45, normalAreaOfConductor: 4.0, dimension: "56/0.3", rate: 3090, package: 24 }
        ]
    },
    // Multicore Round Flexible Wires
    multicoreRoundFlexibleWire : {
        id: 2,
        name: "Multicore Round Flexible Wire",
        image: "multicoreRoundCableWires.png",
        description: "Multicore round flexible wires for electrical applications, with various core options and high flexibility. Designed for industrial and residential wiring.",
        series: ["Evo"],
        options: {
            length: [90],
            normalAreaOfConductor: [0.75, 1.0, 1.5, 2.5, 4.0, 6.0],
            cores: [2, 3, 4]
        },
        data: [
            { series: "Evo", length: 90, normalAreaOfConductor: 0.75, core: 2, dimension: "23/60", rate: 2330, package: 8 },
            { series: "Evo", length: 90, normalAreaOfConductor: 0.75, core: 3, dimension: "23/60", rate: 3400, package: 8 },
            { series: "Evo", length: 90, normalAreaOfConductor: 1.5, core: 2, dimension: "36/0.3", rate: 5850, package: 5 },
            { series: "Evo", length: 90, normalAreaOfConductor: 1.5, core: 3, dimension: "36/0.3", rate: 8660, package: 4 },
            { series: "Evo", length: 90, normalAreaOfConductor: 1.5, core: 4, dimension: "36/0.3", rate: 10980, package: 4 },
            { series: "Evo", length: 90, normalAreaOfConductor: 2.5, core: 2, dimension: "56/0.3", rate: 9190, package: 4 },
            { series: "Evo", length: 90, normalAreaOfConductor: 2.5, core: 3, dimension: "56/0.3", rate: 13580, package: 4 },
            { series: "Evo", length: 90, normalAreaOfConductor: 2.5, core: 4, dimension: "56/0.3", rate: 18150, package: 4 },
            { series: "Evo", length: 90, normalAreaOfConductor: 4.0, core: 2, dimension: "56/0.3", rate: 14400, package: 4 }
        ]
    },
    // Submersible Cables
    submersibleCable : {
        id: 3,
        name: "Submersible Cable",
        image: "SubmersibleCablesBgRemoved.png",
        description: "High-grade submersible cables designed to operate in underwater applications, with excellent insulation and robust performance.",
        series: ["Evo"],
        options: {
            length: [100],
            normalAreaOfConductor: [1.5, 2.5, 4.0, 6.0, 10.0]
        },
        data: [
            { series: "Evo", length: 100, normalAreaOfConductor: 1.5, dimension: "22/0.3", currentCapacity: 16, rate: 9435, package: 4 },
            { series: "Evo", length: 100, normalAreaOfConductor: 2.5, dimension: "36/0.3", currentCapacity: 22, rate: 14740, package: 4 },
            { series: "Evo", length: 100, normalAreaOfConductor: 4.0, dimension: "56/0.3", currentCapacity: 29, rate: 22360, package: 4 },
            { series: "Evo", length: 100, normalAreaOfConductor: 6.0, dimension: "84/0.3", currentCapacity: 38, rate: 32070, package: 2 },
            { series: "Evo", length: 100, normalAreaOfConductor: 10.0, dimension: "140/0.3", currentCapacity: 51, rate: 52410, package: 2 }
        ]
    },
    // Aluminium Round Cables
    aluminiumRoundCable : {
        id: 4,
        name: "Aluminium Round Cable",
        image: "AluminiumRoundCableBgRemoved.png",
        description: "Aluminium round cables with options for single and multiple conductors. Suitable for various industrial and residential applications, compliant with IS:694 standards.",
        series: ["Evo"],
        options: {
            length: [90, 100], // Available lengths
            normalAreaOfConductor: [2.5, 4.0, 6.0, 10.0, 16.0], // Conductor areas
            cores: [2, 3, 4], // Core options for multicore cables
            conductorType: ["Single", "Multiple"] // Options for selecting between single and multiple conductors
        },
        data: [
            // Single Conductor Options
            { series: "Evo", length: 100, normalAreaOfConductor: 6.0, core: 2, dimension: "1/2.76", conductorType: "Single", rate: 3780, package: 4 },
            { series: "Evo", length: 100, normalAreaOfConductor: 10.0, core: 2, dimension: "1/3.57", conductorType: "Single", rate: 6075, package: 4 },
            
            // Multiple Conductor Options
            { series: "Evo", length: 100, normalAreaOfConductor: 2.5, core: 2, dimension: "7/0.67", conductorType: "Multiple", rate: 2075, package: 4 },
            { series: "Evo", length: 100, normalAreaOfConductor: 4.0, core: 2, dimension: "7/0.82", conductorType: "Multiple", rate: 2660, package: 4 },
            { series: "Evo", length: 100, normalAreaOfConductor: 6.0, core: 2, dimension: "7/1.45", conductorType: "Multiple", rate: 4800, package: 4 },
            { series: "Evo", length: 100, normalAreaOfConductor: 10.0, core: 2, dimension: "7/1.35", conductorType: "Multiple", rate: 6345, package: 4 },
            { series: "Evo", length: 100, normalAreaOfConductor: 16.0, core: 2, dimension: "7/1.70", conductorType: "Multiple", rate: 10310, package: 2 },
            { series: "Evo", length: 100, normalAreaOfConductor: 2.5, core: 3, dimension: "7/0.67", conductorType: "Multiple", rate: 2735, package: 4 },
            { series: "Evo", length: 100, normalAreaOfConductor: 4.0, core: 3, dimension: "7/0.82", conductorType: "Multiple", rate: 3975, package: 4 },
            { series: "Evo", length: 100, normalAreaOfConductor: 6.0, core: 3, dimension: "7/1.45", conductorType: "Multiple", rate: 6450, package: 4 },
            { series: "Evo", length: 100, normalAreaOfConductor: 10.0, core: 3, dimension: "7/1.35", conductorType: "Multiple", rate: 9045, package: 4 },
            { series: "Evo", length: 100, normalAreaOfConductor: 16.0, core: 3, dimension: "7/1.70", conductorType: "Multiple", rate: 13778, package: 2 },
            { series: "Evo", length: 100, normalAreaOfConductor: 2.5, core: 4, dimension: "7/0.67", conductorType: "Multiple", rate: 3575, package: 4 },
            { series: "Evo", length: 100, normalAreaOfConductor: 4.0, core: 4, dimension: "7/0.82", conductorType: "Multiple", rate: 4655, package: 4 },
            { series: "Evo", length: 100, normalAreaOfConductor: 6.0, core: 4, dimension: "7/1.45", conductorType: "Multiple", rate: 7925, package: 4 },
            { series: "Evo", length: 100, normalAreaOfConductor: 10.0, core: 4, dimension: "7/1.35", conductorType: "Multiple", rate: 11655, package: 2 },
            { series: "Evo", length: 100, normalAreaOfConductor: 16.0, core: 4, dimension: "7/1.70", conductorType: "Multiple", rate: 17630, package: 2 }
        ]
    },
    aluminiumSolidConductorCable : {
        id: 5,
        name: "Aluminium Cable with Solid Conductor",
        image: "AluminiumCableWithSolidConductorBgRemoved.png",
        description: "Aluminium cables with solid conductors for industrial and residential applications. Available in various sizes with both single unsheathed and twin flat sheathed options.",
        series: ["Evo"],
        options: {
            length: [90], // Available lengths for solid conductor cables
            normalAreaOfConductor: [1.5, 2.5, 4.0, 6.0, 8.0, 10.0, 16.0], // Conductor areas
            conductorType: ["Single", "Twin Flat Sheathed"] // Single and Twin Flat Sheathed options
        },
        data: [
            // Single Unsheathed Conductor
            { series: "Evo", length: 90, normalAreaOfConductor: 1.5, dimension: "1/1.40", conductorType: "Single", rate: 450, package: 24 },
            { series: "Evo", length: 90, normalAreaOfConductor: 2.5, dimension: "1/1.78", conductorType: "Single", rate: 725, package: 18 },
            { series: "Evo", length: 90, normalAreaOfConductor: 4.0, dimension: "1/2.26", conductorType: "Single", rate: 1030, package: 12 },
            { series: "Evo", length: 90, normalAreaOfConductor: 6.0, dimension: "1/2.76", conductorType: "Single", rate: 1405, package: 12 },
            { series: "Evo", length: 90, normalAreaOfConductor: 8.0, dimension: "1/3.18", conductorType: "Single", rate: 2170, package: 8 },
            { series: "Evo", length: 90, normalAreaOfConductor: 10.0, dimension: "1/3.57", conductorType: "Single", rate: 3375, package: 4 },
            { series: "Evo", length: 90, normalAreaOfConductor: 16.0, dimension: "1/4.51", conductorType: "Single", rate: 6475, package: 4 },
            
            // Twin Flat Sheathed Conductor
            { series: "Evo", length: 90, normalAreaOfConductor: 1.5, dimension: "1/1.40", conductorType: "Twin Flat Sheathed", rate: 1050, package: 10 },
            { series: "Evo", length: 90, normalAreaOfConductor: 2.5, dimension: "1/1.78", conductorType: "Twin Flat Sheathed", rate: 1530, package: 8 },
            { series: "Evo", length: 90, normalAreaOfConductor: 4.0, dimension: "1/2.26", conductorType: "Twin Flat Sheathed", rate: 1915, package: 6 },
            { series: "Evo", length: 90, normalAreaOfConductor: 6.0, dimension: "1/2.76", conductorType: "Twin Flat Sheathed", rate: 2880, package: 6 },
            { series: "Evo", length: 90, normalAreaOfConductor: 8.0, dimension: "1/3.18", conductorType: "Twin Flat Sheathed", rate: 3720, package: 6 },
            { series: "Evo", length: 90, normalAreaOfConductor: 10.0, dimension: "1/3.57", conductorType: "Twin Flat Sheathed", rate: 4425, package: 4 },
            { series: "Evo", length: 90, normalAreaOfConductor: 16.0, dimension: "1/4.51", conductorType: "Twin Flat Sheathed", rate: 6475, package: 4 }
        ]
    },
    coAxialCableCopperConductor : {
        id: 6,
        name: "Co-Axial Cable",
        image: "CoaxialCableBgRemoved.png",
        description: "PVC insulated coaxial cable with a copper conductor, designed for reliable signal transmission in various applications. Available in multiple sizes for 100-meter lengths.",
        series: ["Evo"],
        options: {
            length: [100], // Available lengths
            size: ["RG-59", "RG-06", "RG-11"] // Available sizes
        },
        data: [
            { series: "Evo", length: 100, size: "RG-59", rate: 1745, package: 6 },
            { series: "Evo", length: 100, size: "RG-06", rate: 2030, package: 6 },
            { series: "Evo", length: 100, size: "RG-11", rate: 2415, package: 6 }
        ]
    },
    parallelFlatCable : {
        id: 7,
        name: "Parallel Flat Cable",
        image: "ParallelFlatCableBgRemoved.png",
        description: "PVC insulated flat cable with copper conductor, ideal for household and industrial applications. Available in multiple conductor sizes and lengths.",
        series: ["Evo"],
        options: {
            length: [45, 90], // Available lengths
            normalAreaOfConductor: ["23/52", "40/52", "16/02", "24/02", "32/02", "22/02"], // Conductor areas and dimensions
        },
        data: [
            { series: "Evo", length: 45, normalAreaOfConductor: "23/60", dimension: "23/60", rate: 960, package: 30 },
            { series: "Evo", length: 90, normalAreaOfConductor: "23/60", dimension: "23/60", rate: 1900, package: 30 },
            { series: "Evo", length: 45, normalAreaOfConductor: "40/60", dimension: "40/60", rate: 1520, package: 30 },
            { series: "Evo", length: 90, normalAreaOfConductor: "40/60", dimension: "40/60", rate: 3030, package: 30 },
            { series: "Evo", length: 45, normalAreaOfConductor: "16/0.2", dimension: "0.50", rate: 990, package: 30 },
            { series: "Evo", length: 90, normalAreaOfConductor: "16/0.2", dimension: "0.50", rate: 1975, package: 30 },
            { series: "Evo", length: 45, normalAreaOfConductor: "24/0.2", dimension: "0.75", rate: 1420, package: 25 },
            { series: "Evo", length: 90, normalAreaOfConductor: "24/0.2", dimension: "0.75", rate: 2840, package: 25 },
            { series: "Evo", length: 45, normalAreaOfConductor: "32/0.2", dimension: "1.00", rate: 1900, package: 20 },
            { series: "Evo", length: 90, normalAreaOfConductor: "32/0.2", dimension: "1.00", rate: 3710, package: 20 },
            { series: "Evo", length: 45, normalAreaOfConductor: "22/0.2", dimension: "1.50", rate: 2500, package: 15 },
            { series: "Evo", length: 90, normalAreaOfConductor: "22/0.2", dimension: "1.50", rate: 4985, package: 15 }
        ]
    },
    flexibleCopperWire : {
        id: 8,
        name: "Flexible Copper Wire",
        image: "FlexibleCopperWireBgRemoved.png",
        description: "PVC insulated flexible copper wire for various electrical and industrial applications. Available in different conductor sizes with options for 45 or 90 meters.",
        series: ["Evo"],
        options: {
            length: [45, 90], // Available lengths
            normalAreaOfConductor: ["14/76", "18/76", "23/76", "30/76", "40/76", "50/76", "60/76"] // Conductor areas
        },
        data: [
            { series: "Evo", length: 45, normalAreaOfConductor: "14/76", rate: 350, package: 30 },
            { series: "Evo", length: 45, normalAreaOfConductor: "18/76", rate: 430, package: 30 },
            { series: "Evo", length: 45, normalAreaOfConductor: "23/76", rate: 550, package: 24 },
            { series: "Evo", length: 45, normalAreaOfConductor: "30/76", rate: 670, package: 24 },
            { series: "Evo", length: 45, normalAreaOfConductor: "40/76", rate: 870, package: 20 },
            { series: "Evo", length: 45, normalAreaOfConductor: "50/76", rate: 1070, package: 20 },
            { series: "Evo", length: 45, normalAreaOfConductor: "60/76", rate: 1260, package: 16 }
         ]
    },
    nexaMultistrandWires : {
        id: 9,
        name: "Nexa Series Multistrand Wires",
        image: "multistrandWireNexaSeriesBgRemoved.png",
        description: "PVC Insulated Copper Conductor Multistrand Wires for industrial and residential applications, compliant with IS:694 standards. Available in different conductor sizes.",
        series: ["Nexa"],
        options: {
            length: [90], // Available length (90 meters)
            normalAreaOfConductor: [0.75, 1.00, 1.50, 2.50, 4.00, 6.00, 10.00] // Conductor areas
        },
        data: [
            { series: "Nexa", length: 90, normalAreaOfConductor: "0.75", dimension: "24/0.2", rate: 1640, package: 24 },
            { series: "Nexa", length: 90, normalAreaOfConductor: "1.00", dimension: "14/0.3", rate: 2120, package: 24 },
            { series: "Nexa", length: 90, normalAreaOfConductor: "1.50", dimension: "22/0.3", rate: 3220, package: 20 },
            { series: "Nexa", length: 90, normalAreaOfConductor: "2.50", dimension: "36/0.3", rate: 5120, package: 12 },
            { series: "Nexa", length: 90, normalAreaOfConductor: "4.00", dimension: "56/0.3", rate: 7850, package: 8 },
            { series: "Nexa", length: 90, normalAreaOfConductor: "6.00", dimension: "84/0.3", rate: 11750, package: 6 },
            { series: "Nexa", length: 90, normalAreaOfConductor: "10.00", dimension: "140/0.3", rate: 19300, package: 4 }
        ]
    },
    nexaSubmersibleCables : {
        id: 10,
        name: "Nexa Series Submersible Cables",
        image: "SubmersibleCablesBgRemoved.png",
        description: "PVC Insulated and Sheathed 3 Core Flat Copper Conductor Industrial Cables for submersible applications, compliant with IS:694 standards.",
        series: ["Nexa"],
        options: {
            length: [100, 250, 500], // Available lengths in meters
            normalAreaOfConductor: [1.50, 2.50, 4.00, 6.00, 10.00] // Conductor areas
        },
        data: [
            { series: "Nexa", length: 100, normalAreaOfConductor: "1.50", dimension: "22/0.3", currentCapacity: 16, rate: 10950, package: "Standard" },
            { series: "Nexa", length: 100, normalAreaOfConductor: "2.50", dimension: "36/0.3", currentCapacity: 22, rate: 17200, package: "Standard" },
            { series: "Nexa", length: 100, normalAreaOfConductor: "4.00", dimension: "56/0.3", currentCapacity: 29, rate: 26100, package: "Standard" },
            { series: "Nexa", length: 100, normalAreaOfConductor: "6.00", dimension: "84/0.3", currentCapacity: 38, rate: 37500, package: "Standard" },
            { series: "Nexa", length: 100, normalAreaOfConductor: "10.00", dimension: "140/0.3", currentCapacity: 51, rate: 60500, package: "Standard" }
        ]
    }
     
}
export default productsData;