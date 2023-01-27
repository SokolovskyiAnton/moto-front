<template>
  <section class="banner">
    <v-container class="h-full flex max-sm:items-start max-sm:justify-center sm:items-center sm:justify-end ">
      <BannerShape />
    </v-container>
  </section>
</template>

<script lang="ts" setup>
import BannerShape from '~/components/home/BannerShape.vue';
</script>

<style lang="scss" scoped>
.banner {
  height: 620px;
  background-image: url("../../assets/images/img.png");
  background-repeat: no-repeat;
  background-size: cover;
  @media (max-width: 600px) {
    background-position: 25%;
  }
}
</style>