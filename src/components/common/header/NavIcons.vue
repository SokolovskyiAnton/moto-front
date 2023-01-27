<template>
  <div class="nav-icons">
    <ul class="nav-icons-list">
      <li class="nav-icons-list__item cursor-pointer">
        <router-link to='/profile'>
          <v-icon icon="mdi-account-outline"></v-icon>
        </router-link>
      </li>
      <li class="nav-icons-list__item cursor-pointer relative">
        <router-link to="/cart">
          <span class="absolute top-2 right-2 z-10 rounded-full w-5 h-5 bg-red text-white text-center" v-if='items.length'>
          {{ items.length }}
        </span>
          <v-icon icon="mdi-cart"></v-icon>
        </router-link>
      </li>
      <li class="block md:hidden nav-icons-list__item cursor-pointer">
        <button
          title="Open menu"
          type="button"
          class="header-nav-button"
          @click="isOpen = !isOpen"
        >
          <span class="dots"></span>
          <span class="dots"></span>
          <span class="dots"></span>
        </button>
      </li>
    </ul>
    <MobileMenu v-if="isOpen" />
  </div>
</template>

<script setup lang="ts">
import MobileMenu from '~/components/common/header/MobileMenu.vue';
import { useCartStore } from '~/stores/cart-store';

const isOpen = ref(false)
const store = useCartStore();

const items = computed(() => store.getCartItems)
</script>

<style lang="scss" scoped>
.nav-icons {
  height: 100%;
  display: flex;
  align-items: center;
  &-list {
    display: flex;
    &__item {
      padding: 15px;
      list-style: none;
      @media (max-width: 600px) {
         padding: 10px;
      }
    }
  }
}

.header-nav-button {
  display: flex;
  flex-direction: column;
  border: 0;
  .dots {
    width: 25px;
    height: 3px;
    margin-top: 5px;
    border-radius: 0.25rem;
    background: white;
    transition: .5s;
  }
  &:hover {
    .dots {
      background-color: red;
      transform: translateY(-5px);
      transition: .5s;
    }
  }
}
</style>