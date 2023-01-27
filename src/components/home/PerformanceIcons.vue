<template>
  <div>
    <ul class="flex justify-center">
      <li
        class="list-none ml-5 flex max-sm:flex-col sm:align-center"
        v-for="item in list"
        :key="item.icon"
      >
        <div class="flex max-sm:justify-center">
          <v-icon color="#e9ff00" size="26" :icon="`mdi-${item.icon}`"></v-icon>
        </div>
        <span class="max-sm:mt-2 ml-1 max-sm:text-center">{{ item.title }}</span>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
const list = [
  {
    title: '52V Battery',
    icon: 'lightning-bolt'
  },
  {
    title: '750-1,000W Motors',
    icon: 'cog-outline'
  },
  {
    title: 'Premium Safety Upgrades',
    icon: 'bicycle'
  }
]
</script>

<style scoped>

</style>