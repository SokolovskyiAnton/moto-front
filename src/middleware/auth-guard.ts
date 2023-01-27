import { useAuthStore } from '~/stores/auth-store';

export default defineNuxtRouteMiddleware(async (to, from) => {
  const store = useAuthStore();
  const isAuth = store.getAuthStatus
  if (!isAuth) {
    return navigateTo('/login')
  }
})