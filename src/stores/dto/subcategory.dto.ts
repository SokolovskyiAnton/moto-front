import {ProductDto} from './product.dto';
import {CategoryDto} from './category.dto';

export interface SubcategoryDto {
  id: number;
  title: string;
  description: string;
  category: null | CategoryDto
  products?: ProductDto[]
}


export interface SubcategoryState {
  subcategory: SubcategoryDto | null
}
