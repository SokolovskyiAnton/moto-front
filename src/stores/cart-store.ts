import { defineStore } from 'pinia'
import { CartState, OrderDto } from '~/stores/dto/cart.dto';
import { api } from '~/api';

export const useCartStore = defineStore({
  id: 'cart',
  state: (): CartState => ({
    items: [],
    isLoginByPurchase: false
  }),
  getters: {
    getCartItems: ({ items }) => items,
    getTotalPrice: ({ items }) => items.reduce(
      (totalPrice, item) => {
        return totalPrice + (item.price * item.quantity)
      },
      0
    ),
    getProductList: ({ items }) => {
      return items.map((item) => {
        return {
          product_id: item.id,
          quantity: item.quantity,
          options: item.option,
        }
      })
    }
  },
  actions: {
    setItem(item: any) {
      this.items.push(item)
    },
    setPurchaseKey() {
      this.isLoginByPurchase = true;
    },
    deleteItem(id: number) {
      this.items = this.items.filter((item) => item.id !== id)
    },
    async checkout(payload: OrderDto) {
      return await api.request('/checkout/orders', {
        method: 'POST',
        body: payload
      })
    },
    async confirm(payload: { source: string }) {
      await api.request('/checkout/orders/confirm', {
        method: 'POST',
        body: payload
      })
    }
  },

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  hydrate (state, initialState) {

  }
})