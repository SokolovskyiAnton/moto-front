<template>
  <footer class="h-auto bg-[#404040]">
    <v-container>
      <v-row>
        <v-col :cols="isMobile.sm ? 12 : 6">
          <div class="flex flex-col align-center justify-center mt-7 mb-7">
            <img src="/logo.png" alt='img' :width='85' :height='75'>
            <span class='font-bold text-white text-2xl mt-2'>Lithium Customs</span>
          </div>
          <div class="text-white mb-2 text-sm">Sign up for exclusive product information, newsletters & special discount offers!</div>
          <div class="flex">
            <input v-model="email"  class="bg-white pa-4 w-full outline-0 rounded-sm" placeholder="Email" />
            <v-btn
              class="text-sm ml-5 pa-2 rounded-xl w-24 h-auto uppercase text-white font-bold"
              @click='handleClick'
              :loading='isLoading'
              color='red'
            >
              Subscribe
            </v-btn>
          </div>
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
    <v-snackbar v-model="show" location='top right' color='green'>
      Thank you for subscribe!
    </v-snackbar>
  </footer>
</template>

<script lang="ts" setup>
import { useDisplay } from 'vuetify';

const email = ref('')
const isLoading = ref(false)
const show = ref(false)
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

function handleClick() {
  if (!email.value) return;

  isLoading.value = true

  setTimeout(() => {
    isLoading.value = false
    email.value = ''
    show.value = true
  }, 1500)
}
</script>

<style scoped>

</style>