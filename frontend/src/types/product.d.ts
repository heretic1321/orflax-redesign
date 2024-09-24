// types/product.ts

export interface CableOptions {
  length?: number[];
  normalAreaOfConductor?: (number | string)[];
  cores?: number[];
  conductorType?: string[];
  size?: string[];
  [key: string]: (number | string)[] | undefined;
}

export interface CableData {
  series: string;
  length?: number;
  normalAreaOfConductor?: number | string;
  cores?: number;
  conductorType?: string;
  size?: string;
  rate?: number;
  dimension?: string;
  package?: string | number;
  currentCapacity?: number;
  [key: string]: any;
}

export interface CableProduct {
  id: number;
  name: string;
  image: string;
  description: string;
  series: string[];
  options: CableOptions;
  data: CableData[];
}
