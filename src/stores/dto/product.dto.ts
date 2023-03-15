import {SubcategoryDto} from './subcategory.dto';

export interface ProductDto {
  id: number,
  title: string,
  description: string,
  desktopImages: ProductPhoto[],
  mobileImages: ProductPhoto[],
  color: string;
  optionsTitle: string;
  options: string[];
  price: number,
  battery: string;
  motor: string;
  oldPrice: number,
  isAvailable: boolean,
  weight?: number;
  speed?: number;
  mileRange?: number;
  subcategory: Omit<SubcategoryDto, 'products'> | null
}

export interface ProductState {
  products: ProductDto[];
  product: ProductDto | null;
}

export interface ProductPhoto {
  url: string;
  key: string;
}
