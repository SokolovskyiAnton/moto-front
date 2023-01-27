<template>
  <section class="bg-black">
    <v-container>
      <h2 class="text-center max-sm:text-3xl sm:text-5xl font-bold mb-5 mt-5">
        HIGH-PERFORMANCE   ELECTRIC BIKES
      </h2>
      <PerformanceIcons />
      <PerformanceList />
    </v-container>
  </section>
</template>

<script setup lang="ts">
import PerformanceIcons from '~/components/home/PerformanceIcons.vue';
import PerformanceList from '~/components/home/PerformanceList.vue';
</script>

<style scoped>

</style>