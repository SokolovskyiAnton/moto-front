<template>
  <PageWrapper class="text-lg">
    <h3 class="text-center text-3xl font-bold">About us</h3>
    <p class="mt-2">
      Lithium Customs LLC is a family-owned small business based in Ohio, founded by an Ukrainian immigrant with a passion for making a positive impact on the world. We specialize in the development and sale of electric motorcycles and bikes, but our ambitious project is to create a drone that can withstand even the harshest environments. Our mission is to improve access to electric transportation and reduce the dependency on fossil fuels.
    </p>
    <p class="mt-2">
      As a small business rooted in Ohio, we are committed to driving progress and innovation in the field of electric transportation. Our team is driven by a common goal of finding efficient, convenient and affordable transportation solutions while also improving air quality.
    </p>
    <p class="mt-2">
      Join us on this journey towards a cleaner and more efficient future. We are committed to making a positive impact on the world through our passion for electric transportation and look forward to creating a brighter and more sustainable future together.
    </p>
  </PageWrapper>
</template>

<script setup lang="ts">
import PageWrapper from '~/components/common/PageWrapper.vue';

useHead({
  title: 'Lithium Customs LLC | About Us',
  meta: [
    { name: 'description', content: 'Lithium Customs LLC, about us, our story' }
  ]
})
</script>

<style scoped>

</style>