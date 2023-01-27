<template>
  <section class="banner">
    <div class="banner-header"></div>
    <div>
      <div class="max-sm:text-2xl sm:text-5xl text-white font-bold text-center">
        We build better bikes.
      </div>
      <div class="flex justify-center mt-5">
        <button class="text-sm bg-red-600 pa-5 rounded-md uppercase text-white font-bold">Our story</button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AboutUsBannerSection',
};
</script>

<style lang="scss" scoped>
.banner {
  height: 620px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background-color: black;
  background-image: url("../../assets/images/we-build.webp");
  background-repeat: no-repeat;
  background-size: cover;
  @media (max-width: 600px) {
    background-position: 25%;
  }
  &-header {
    position: absolute;
    top: 0;
    left: 0;
    height: 100px;
    width: 100%;
    background: linear-gradient(
      to bottom,
      black 3rem,
      rgba(14, 18, 18, 0) 100%
    )
  }
}
</style>