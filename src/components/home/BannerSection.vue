<template>
  <section class="banner">
    <v-container class="h-full flex max-sm:items-end max-sm:justify-center sm:items-center sm:justify-end ">
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
  background-image: url("../../assets/images/4.jpg");
  background-color: black;
  background-repeat: no-repeat;
  background-size: contain;
  @media (max-width: 600px) {
    background-size: cover;
    background-position: 50%;
  }
}
</style>