<template>
  <section class="banner">
    <div class="wrapper flex sm:justify-end  align-center pa-8">
      <div class="shape">
        <div class="sm:text-5xl text-2xl text-white font-bold mb-3">READY TO RIDE?</div>
        <button @click="handleClick" class="text-sm bg-red-600 pa-5 rounded-md uppercase text-white font-bold">SHOP E-BIKES</button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter()
function handleClick() {
  router.push({ name: 'collection' })
}
</script>

<style lang="scss" scoped>
.banner {
  height: 320px;
  position: relative;
  background-image: url("../assets/images/single-banner.webp");
  background-repeat: no-repeat;
  background-size: cover;
  @media (max-width: 600px) {
    background-position: 25%;
  }
  .wrapper {
    height: 100%;
    background-color: #31313182;
  }
}
</style>