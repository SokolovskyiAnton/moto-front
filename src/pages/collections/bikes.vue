<template>
  <PageWrapper bg="#f6f6f6">
    <div v-for="category in categories" :key="category.id">
      <div class="font-bold text-3xl font-black mb-5">
        {{ category.title }}
      </div>
      <SubcategoryBlock v-for="subcategory in category.subcategories" :key="subcategory.id" :subcategory="subcategory" />
    </div>
  </PageWrapper>
</template>

<script lang="ts" setup>
import { useCategoryStore } from '~/stores/category-store';
import PageWrapper from '~/components/common/PageWrapper.vue';

useHead({
  title: 'Lithium Customs LLC | E-Bikes',
  meta: [
    { name: 'description', content: 'Lithium Customs LLC, E-Bikes' }
  ]
})

const store = useCategoryStore()

const categories = computed(() => store.getCategories);

onMounted(async () => {
  await store.getExpandedCategories();
})
</script>

<style lang="scss" scoped>

</style>