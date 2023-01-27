<template>
  <footer class="h-auto bg-[#404040]">
    <v-container>
      <v-row>
        <v-col :cols="isMobile.mobile.value ? 12 : 6">
          <div class="mt-7 mb-7">
            <img src="/img-removebg-preview.png" alt='img' :width='isMobile ? 250 : 360' :height='isMobile ? 50 : 96'>
          </div>
          <div class="text-white mb-2 text-sm">Sign up for exclusive product information, newsletters & special discount offers!</div>
          <div class="flex">
            <input v-model="email"  class="bg-white pa-4 w-full outline-0 rounded-sm" placeholder="Email" />
            <button class="text-sm bg-red-600 ml-5 pa-2 rounded-xl w-56 uppercase text-white font-bold">Subscribe</button>
          </div>
        </v-col>
        <v-col :cols="isMobile.mobile.value ? 12 : 6">

        </v-col>
      </v-row>
      <v-divider class="mt-10 mb-5"></v-divider>
      <ul class="flex">
        <li v-for="item in list" :key="item.icon" class="ml-4 list-none">
          <a :href="item.link">
            <v-icon :icon="`mdi-${item.icon}`" color="white" size="36" />
          </a>
        </li>
      </ul>
    </v-container>
  </footer>
</template>

<script lang="ts" setup>
import { useDisplay } from 'vuetify';

const email = ref('')
const isMobile = useDisplay()

const list = [
  {
    icon: 'youtube',
    link: ''
  },
  {
    icon: 'instagram',
    link: ''
  },
  {
    icon: 'facebook',
    link: ''
  },
  {
    icon: 'twitter',
    link: ''
  }
]
</script>

<style scoped>

</style>