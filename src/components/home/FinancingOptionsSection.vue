<template>
  <section class='financing-section'>
    <v-container>
      <h4 class='text-5xl text-white font-bold'>
        Financing Options
      </h4>
      <h5 class='text-2xl text-white mt-5'>
        We are happy to offer our community with financing options / payment plans that allow you to ride now and pay later.
      </h5>
      <v-btn
        class="mt-5 rounded-xl"
        variant='outlined'
        color='white'
        width='400'
        to='/financing'
      >
        Explore Financing Options
      </v-btn>
    </v-container>
  </section>
</template>

<script>
export default {
  name: 'FinancingOptionsSection',
};
</script>

<style lang='scss' scoped>
.financing-section {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 720px;
  background-image: url("../../assets/images/5.png");
  background-color: black;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>