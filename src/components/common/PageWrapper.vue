<template>
  <section :style="{background: bg}">
    <v-container>
      <slot />
    </v-container>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  bg?: string;
}>()
</script>

<style scoped>

</style>