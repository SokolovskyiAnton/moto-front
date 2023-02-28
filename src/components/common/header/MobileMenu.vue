<template>
  <div class="mobile-menu">
    <v-expansion-panels v-model="panel">
      <v-expansion-panel title="E-Bikes" >
        <v-expansion-panel-text>
          <BikesDropdown @child-close="handleClose" />
        </v-expansion-panel-text>
      </v-expansion-panel>
      <v-expansion-panel title="Support">
        <v-expansion-panel-text>
          <SupportDropdown @child-close="handleClose" />
        </v-expansion-panel-text>
      </v-expansion-panel>
    </v-expansion-panels>
    <v-divider color="black"></v-divider>
    <div class="about-block" @click="handleClick">
      About Us
    </div>
  </div>
</template>

<script setup lang="ts">
import BikesDropdown from '~/components/common/header/BikesDropdown.vue';
import SupportDropdown from '~/components/common/header/SupportDropdown.vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const emit = defineEmits(['close', 'childClose'])
const panel = ref(0)
function handleClick() {
  emit('close')
  router.push('/about-us')
}

function handleClose() {
  emit('close')
}
</script>

<style lang="scss" scoped>
.mobile-menu {
  position: fixed;
  top: 100px;
  left: 0;
  right: 0;
  bottom: 0;
  background: white;
  z-index: 100;
  padding: 10px;
  .about-block {
    cursor: pointer;
    color: black;
    padding: 16px 24px;
    min-height: 48px;
    box-shadow: 0px 3px 1px -2px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, 0.2)), 0px 2px 2px 0px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.14)), 0px 1px 5px 0px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.12));
  }
}
</style>