import { defineStore } from 'pinia';
import { api } from '~/api';
import { CategoryDto, CategoryState } from '~/stores/dto/category.dto';
import { SubcategoryDto, SubcategoryState } from '~/stores/dto/subcategory.dto';

export const useSubcategoryStore = defineStore({
  id: 'subcategory',
  state: (): SubcategoryState => {
    return {
      subcategory: null,
    }
  },
  getters: {
    getSubcategory: ({ subcategory }): SubcategoryDto | null => subcategory,
  },
  actions: {
    async get(id: number) {
      this.subcategory = await api.request<SubcategoryDto>(`/subcategory/${id}`);
    },
  },

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  hydrate (state, initialState) {
  }
})
