<template>
  <PageWrapper>
    <div v-if="user" class="pa-2 flex justify-between">
      <h2>Hello {{ user.first_name }}</h2>
      <v-btn @click="logout">Logout</v-btn>
    </div>
  </PageWrapper>
</template>

<script setup lang="ts">
import { definePageMeta } from '#imports';
import { useAuthStore } from '~/stores/auth-store';
import PageWrapper from '~/components/common/PageWrapper.vue';
import { useRouter } from 'vue-router';

definePageMeta({
  middleware: ["auth-guard"]
})

const store = useAuthStore();
const router = useRouter();

const user = computed(() => store.getUser)

async function logout() {
  await store.logout()
  await router.push('/login')
}
</script>

<style scoped>

</style>