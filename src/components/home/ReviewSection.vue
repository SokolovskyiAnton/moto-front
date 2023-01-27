<template>
  <section class="h-auto bg-[#282828]">
    <v-container class="fill-height">
      <v-carousel height="100%" show-arrows="hover" hide-delimiter-background hide-delimiters cycle>
        <v-carousel-item
          v-for="(item,i) in list"
          :key="i"
        >
          <div class="pa-8">
            <div class="mb-8">
              <v-icon
                color="#e9ff00"
                v-for="r in item.rate"
                :key="r"
                icon="mdi-star"
                class="mr-2"
              />
            </div>
            <div class="text-3xl text-white font-bold mb-8">
              {{ item.review }}
            </div>
            <div class="text-base text-gray-400">
              {{ item.user }}
            </div>
          </div>
        </v-carousel-item>
      </v-carousel>
    </v-container>
  </section>
</template>

<script setup lang="ts">
const list = [
  {
    rate: 5,
    user: 'Kevin F., Murphys, CA',
    review: "It has been a joy experiencing my first e-bike! Even though I'm 6 ft. the RipRacer fits me. In race mode it has plenty of torque and speed for the hills in my neighborhood."
  },
  {
    rate: 5,
    user: 'Anton S., LA, CA',
    review: "My husband has degenerative disc disease and his health means we can't do a lot of the things we'd like. But the HyperScorpion has such great suspension, and the best overall design."
  }
]
</script>

<style scoped>

</style>