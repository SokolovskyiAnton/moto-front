<template>
  <div class="menu hidden md:block">
    <ul class="menu-list">
      <li v-for="item in list" :key="item.id" class="menu-list__item">
        <router-link :to="item.link">
          {{ item.title }}
        </router-link>
        <div v-if="item.component" class="menu-list__dropdown">
          <v-container>
            <component :is="item.component"></component>
          </v-container>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import BikesDropdown from '~/components/common/header/BikesDropdown.vue';
import SupportDropdown from '~/components/common/header/SupportDropdown.vue';

const list = [
  {
    id: 1,
    link: '/collections/bikes',
    title: 'E-Bikes',
    component: BikesDropdown,
  },
  {
    id: 2,
    link: '',
    title: 'Support',
    component: SupportDropdown
  },
  {
    id: 3,
    link: '/about-us',
    title: 'About us',
    component: null
  }
]
</script>

<style lang="scss" scoped>
.menu {
  height: 100%;
  &-list {
    display: flex;
    align-items: center;
    height: 100%;
    &__item {
      height: 100%;
      display: flex;
      align-items: center;
      list-style: none;
      padding: 16px;
      a {
        text-decoration: none;
        color: inherit;
        text-transform: uppercase;
        letter-spacing: .6px;
        font-size: 16px;
        font-weight: 700;
      }
      &:hover {
        .menu-list__dropdown {
          display: block;
          height: auto;
        }
      }
    }
    &__dropdown {
      display: none;
      position: absolute;
      top: 100px;
      left: 0;
      height: 0;
      width: 100%;
      background: white;
      z-index: 100;
      color: black;
      box-shadow: -1px 4px 5px -1px rgba(158,158,158,1);
    }
  }
}
</style>