import { defineStore } from 'pinia'
import { AuthDto, AuthState, LoginPayload, SignupPayload } from '~/stores/dto/auth.dto';
import { api } from '~/api';
import { useCookie } from '#app';

export const useAuthStore = defineStore({
  id: 'auth',
  state: (): AuthState => ({
    isAuth: false,
    user: null,
  }),
  getters: {
    getAuthStatus: ({ isAuth }) => isAuth,
    getUser: ({ user }) => user
  },
  actions: {
    async login(payload: LoginPayload) {
      try {
        const response = await api.request('/login', {
          method: 'POST',
          body: payload
        }) as { token: string }
        localStorage.setItem('accessToken', response.token)
      } catch (e) {
        console.error(e)
      }
    },
    async get() {
      try {
        this.user = await api.request<AuthDto>('/user');
        this.isAuth = true;
      } catch (e) {
        console.error(e);
      }
    },
    async signup(payload: SignupPayload) {
      try {
        await api.request('/register', {
          method: 'POST',
          body: payload
        })
      } catch (e) {
        console.error(e);
      }
    },
    async logout() {
      localStorage.removeItem('accessToken');
      await api.request('/logout', {
        method: 'POST'
      })
      this.isAuth = false;
      this.user = null;
    }
  },

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  hydrate (state, initialState) {

  }
})
