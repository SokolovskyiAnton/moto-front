<template>
  <div class="mt-6 mb-6">
    <v-sheet
      class="mx-auto bg-black"
      elevation="4"
    >
      <v-slide-group
        v-model="slider"
        show-arrows
      >
        <v-slide-group-item
          v-for="item in products"
          :key="item.id"
          v-slot="{ isSelected, toggle, selectedClass }"
        >
          <PerformanceListItem :product="item" />
        </v-slide-group-item>
      </v-slide-group>
    </v-sheet>
  </div>
</template>

<script setup lang="ts">
import { useProductStore } from '~/stores/product-store';
import PerformanceListItem from '~/components/home/PerformanceListItem.vue';

const store = useProductStore();
const slider = ref(null)

const products = computed(() => store.getProducts)
</script>