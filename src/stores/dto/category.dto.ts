import {SubcategoryDto} from './subcategory.dto';

export interface CategoryDto {
  id: number;
  title: string;
  description: string
  subcategories: SubcategoryDto[]
}

export interface CategoryState {
  categories: CategoryDto[]
}
