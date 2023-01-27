<template>
  <div class="mb-8 mt-8">
    <v-row>
      <v-col v-for="category in categories" :key="category.id" :cols="isMobile.mobile.value ? 12 : 4">
        <div class="text-xl text-black font-bold">
          {{ category.title }}
        </div>
        <div class="pl-2 mt-4 cursor-pointer font-bold">
          <router-link to="/collections/bikes">
            View All
          </router-link>
        </div>
        <div class="pl-2 mt-4 cursor-pointer" v-for="subcategory in category.subcategories" :key="subcategory.id">
          <router-link :to="`/collections/${subcategory.id}`">
            {{ subcategory.title }}
          </router-link>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts" setup>

import { useCategoryStore } from '~/stores/category-store';
import { CategoryDto } from '~/stores/dto/category.dto';
import { useDisplay } from 'vuetify';

const store = useCategoryStore();
const isMobile = useDisplay()
const categories = computed(() => store.getCategories);
</script>

<style lang="scss" scoped>

</style>