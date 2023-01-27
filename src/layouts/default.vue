<template>
  <Header />
    <div class="wrapper">
      <slot />
    </div>
  <Footer />
</template>

<script setup lang="ts">
import Header from "~/components/common/Header.vue";
import Footer from '~/components/common/Footer.vue';
import { useAuthStore } from '~/stores/auth-store';
import { JWT } from '~/helpers/jwtUtils';
import { useRouter } from 'vue-router';

const store = useAuthStore();
const router = useRouter();

onBeforeMount(async () => {
  const token = localStorage.getItem('accessToken')

  if (token) {
    if (JWT.isExpiredToken(token)) {
      await store.logout();
      await router.push('/')
    }
    try {
      await store.get();
    } catch (e) {
      await store.logout();
      await router.push('/')
    }
  }
})
</script>

<style lang="scss" scoped>
.wrapper {
  margin-top: 100px;
  height: 100%;
  min-height: calc(100vh - 100px - 336px);
}
</style>