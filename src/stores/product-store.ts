import { defineStore } from 'pinia';
import { api } from '~/api';
import { ProductDto, ProductState } from '~/stores/dto/product.dto';

export const useProductStore = defineStore({
  id: 'product',
  state: (): ProductState => {
    return {
      products: [],
      product: null
    }
  },
  getters: {
    getProducts: ({ products }): ProductDto[] => products,
    getProduct: ({ product }): ProductDto | null => product
  },
  actions: {
    async getAll() {
      this.products = await api.request<ProductDto[]>('/products');
    },
    async get(id: number) {
      this.product = await api.request<ProductDto>(`/products/${id}`)
    }
  },

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  hydrate (state, initialState) {
  }
})