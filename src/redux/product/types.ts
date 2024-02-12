import {Category} from "@react-buddy/ide-toolbox";


export type Product = {
  productId: number,
  title: string,
  price: number,
  description: string,
  specifications: {
    resolution: string,
    lensType: string,
    fieldOfView: string,
    irLEDs: number,
    motionDetection: boolean,
    videoAnalytics: boolean,
    weatherproof: string,
    operatingTemperature: string,
    audioSupport: boolean,
    connectionType: string,
    powerSupply: string,
    storage: string,
    dimensions: string,
    weight: string,
    mountingType: string,
    color: string,
  },
  category: typeof Category,
  image: string,
  article:string,
  manufacturer: string
}

export enum Status {
  LOADING = 'loading',
  SUCCESS = 'completed',
  ERROR = 'error',
}

export type SearchProductParams = {
  sortBy: string;
  order: string;
  category: string;
  search: string;
  currentPage: string;
};

export interface ProductSliceState {
  items: Product[];
  status: Status;
}
