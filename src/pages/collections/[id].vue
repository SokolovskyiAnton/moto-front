<template>
  <PageWrapper bg="#f6f6f6">
    <SubcategoryBlock v-if="subcategory" :subcategory="subcategory" />
  </PageWrapper>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import { useSubcategoryStore } from '~/stores/subcategory-store';
import { SubcategoryDto } from '~/stores/dto/subcategory.dto';
import PageWrapper from '~/components/common/PageWrapper.vue';

const route = useRoute();
const id = route.params.id
const store = useSubcategoryStore()

const subcategory = computed<SubcategoryDto | null>(() => store.subcategory)

onMounted(async () => {
  await store.get(+id);
})
</script>

<style scoped>

</style>