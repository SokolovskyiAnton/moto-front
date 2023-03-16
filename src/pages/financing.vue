<template>
  <div class='financing'>
    <div class='financing-shape'>
      <h4 class='text-white text-center text-5xl font-bold'>Lithium Custom Motorbike is an Investment</h4>
      <p class='text-white mt-10 text-xl'>We believe in providing our customers with products that are built to last. We stand behind the quality of our
        parts and products, ensuring that our customers get the most value for their investment. We understand that
        purchasing an electric bike can be a significant investment for many people, which is why we offer financing
        options and payment plans. Our partners, provide unique and flexible options that allow our customers to get
        their hands on a Lithium Customs Bike on their own financial terms. Our financing options provide our community
        with the opportunity to ride now and pay later, making it easier for everyone to enjoy the benefits of electric
        transportation.</p>
    </div>
  </div>
  <div class='financing-bottom'>
    <h4 class='text-5xl text-white font-bold'>
      Check back with us as we update our financing
    </h4>
  </div>
</template>

<script setup lang='ts'>
import PageWrapper from '~/components/common/PageWrapper.vue';


</script>

<style lang='scss' scoped>
.financing {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 720px;
  background-image: url("../assets/images/5.png");
  background-color: black;
  background-repeat: no-repeat;
  background-size: cover;
  &-shape {
    padding-left: 50px;
    padding-right: 50px;
  }
}
.financing-bottom {
  background-color: rgb(25, 24, 24);
  display: flex;
  align-items: center;
  justify-content: center;
  height: 410px;
}
</style>