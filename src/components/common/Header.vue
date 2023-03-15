<template>
  <header class="header">
    <div class="header-logo">
      <router-link to="/">
        <img src="/logo.png" alt="logo">
      </router-link>
    </div>
    <DesktopMenu />
    <NavIcons />
  </header>
</template>

<script setup lang="ts">
import DesktopMenu from '~/components/common/header/DesktopMenu.vue';
import NavIcons from '~/components/common/header/NavIcons.vue';
</script>

<style lang="scss" scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 2000;
  height: 100px;
  background: #000;
  color: #fff;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  &-logo {
    display: flex;
    align-items: center;
    height: 100%;
    img {
      width: 85px;
      height: 75px;
    }
  }
}
</style>