<template>
  <section class='video-section'>
    <video
      class='video'
      playsinline
      muted='muted'
      loop='loop'
      autoplay='autoplay'
      width='100%'
      :src='src'
    ></video>
    <div class='video-shape flex align-center max-sm:flex-col-reverse max-md:flex justify-between'>
      <div v-if='isButton' >
        <h4 class='text-left text-5xl font-bold'>Volt Rider - CT</h4>
        <h5 class='text-left text-2xl mt-3'>The electric motorbike for those who want to beat traffic in style</h5>
        <v-btn
          class="mt-5 rounded-md"
          variant='outlined'
          color='white'
          width='200'
          to='/products/3'
        >
          Order Now
        </v-btn>
      </div>
    </div>
  </section>
</template>

<script lang='ts' setup>

defineProps<{
  src: string;
  isButton: boolean
}>()
</script>

<style lang='scss'>
.video-section {
  position: relative;
  min-height: 680px;
  width: 100%;
}

.video {
  position: absolute;
  display: block;
  object-fit: cover;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}
.video-shape {
  position: absolute;
  width: 100%;
  height: 100%;
  padding: 20px;
  top: 0;
  left: 0;
}

.v-btn__content {
  font-size: 20px;
  font-weight: bold;
}
</style>