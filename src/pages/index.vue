<template>
  <div class="bg-black">
    <HomeVideoSection src='https://video.wixstatic.com/video/101585_a07aed5af90c415186f239e3a24b8ef0/1080p/mp4/file.mp4' :is-button='true' />
    <BannerSection />
    <PerformanceSection />
    <AboutUsBannerSection />
    <ReviewSection />
    <FinancingOptionsSection />
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
import FinancingOptionsSection from '~/components/home/FinancingOptionsSection.vue';

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