<template>
  <div class="mb-8 mt-8">
    <v-row>
      <v-col :cols="isMobile.mobile.value ? 12 : 4">
        <div class="text-xl text-black font-bold">
          Support
        </div>

        <div class="pl-2 mt-4 cursor-pointer">
          <router-link to="/contact-us">
            Contact us
          </router-link>
        </div>
        <div class="pl-2 mt-4 cursor-pointer">
          <router-link to="/warranty">
            Warranty
          </router-link>
        </div>
        <div class="pl-2 mt-4 cursor-pointer">
          <router-link to="/shipping-and-returns">
            Shipping & Returns
          </router-link>
        </div>
      </v-col>
      <v-col :cols="isMobile.mobile.value ? 12 : 3">
        <router-link to="/contact-us">
          <div class="flex">
            <div class="flex flex-col justify-center">
              <v-icon color="red" :icon="`mdi-chat-processing-outline`" size="40"></v-icon>
            </div>
            <div class="ml-2">
              <div class="font-bold">Contact Us</div>
              <div>
                Submit a message and let our e-bike experts get you riding.
              </div>
            </div>
          </div>
        </router-link>
        <div class="flex mt-3">
          <div class="flex flex-col justify-center">
            <v-icon color="red" :icon="`mdi-phone`" size="40"></v-icon>
          </div>
          <div class="ml-2">
            <div class="font-bold">Ring Us</div>
            <div>
              <a href='tel:08808080808'>08808080808</a>
            </div>
            <div>Monday-Friday 8AM-5PM PT</div>
          </div>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script setup lang="ts">
import { useDisplay } from 'vuetify';

const isMobile = useDisplay();
</script>

<style lang="scss" scoped>

</style>