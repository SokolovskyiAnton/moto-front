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
    <div class='video-shape flex align-center max-sm:flex-col max-md:flex justify-between'>
      <div class='text-white font-bold'>
        <v-timeline side='end'>
          <v-timeline-item dot-color='white' fill-dot>30 MPH+</v-timeline-item>
          <v-timeline-item dot-color='white' fill-dot>50+ Mile Range</v-timeline-item>
          <v-timeline-item dot-color='white' fill-dot>48V Battery</v-timeline-item>
        </v-timeline>
      </div>
      <div v-if='isButton' class='flex align-center flex-column'>
        <h4>Some text</h4>
        <v-btn
          class="text-sm mt-5 pa-2 rounded-xl w-56 h-auto uppercase text-white font-bold"
          variant='outlined'
          color='white'
        >
          Buy now
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
</style>