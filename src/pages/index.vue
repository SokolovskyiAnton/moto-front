<template>
  <div class="bg-black">
    <HomeVideoSection src='https://moto-backend-nest-js.s3.amazonaws.com/video_2023-03-15_14-27-06.mp4' :is-button='true' />
    <BannerSection />
    <PerformanceSection />
    <AboutUsBannerSection />
    <ReviewSection />
    <SingleBannerSection />
  </div>
</template>

<script setup lang="ts">
import BannerSection from '~/components/home/BannerSection.vue';
import PerformanceSection from '~/components/home/PerformanceSection.vue';
import AboutUsBannerSection from '~/components/home/AboutUsBannerSection.vue';
import ReviewSection from '~/components/home/ReviewSection.vue';
import { useProductStore } from '~/stores/product-store';
import { useCategoryStore } from '~/stores/category-store';

useHead({
  title: 'Lithium Customs LLC | Best E-Bikes',
  meta: [
    { name: 'description', content: 'Lithium Customs LLC' }
  ]
})

const categoryStore = useCategoryStore();
const productStore = useProductStore();


onMounted(async () => {
  await categoryStore.getAll();
  await productStore.getAll();
})
</script>

<style scoped>

</style>