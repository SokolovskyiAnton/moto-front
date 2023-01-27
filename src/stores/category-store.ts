import { defineStore } from 'pinia';
import { api } from '~/api';
import { CategoryDto, CategoryState } from '~/stores/dto/category.dto';

export const useCategoryStore = defineStore({
  id: 'category',
  state: (): CategoryState => {
    return {
      categories: [],
    }
  },
  getters: {
    getCategories: ({ categories }): CategoryDto[] => categories,
  },
  actions: {
    async getAll() {
      this.categories = await api.request<CategoryDto[]>('/category');
    },
    async getExpandedCategories() {
      this.categories = await api.request<CategoryDto[]>('/category?m=expand')
    }
  },

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  hydrate (state, initialState) {
  }
})
