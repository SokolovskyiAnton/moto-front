<template>
  <section class="banner">
    <v-carousel height='1200px' hide-delimiters cycle>
      <v-carousel-item
        v-for="image in images"
        :key="image.url"
        :src="image.url"
        cover
      ></v-carousel-item>
    </v-carousel>
  </section>
</template>

<script lang='ts' setup>
const images = ref([
  {
    url: '1.webp'
  },
  {
    url: '2.webp'
  },
  {
    url: '3.webp'
  },
])
</script>

<style lang="scss" scoped>
.banner {
  background-color: black;
}
</style>