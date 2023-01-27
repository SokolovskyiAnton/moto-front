<template>
  <PageWrapper>
    <div class="pa-3 text-center">
      Thank you for payment!
    </div>
  </PageWrapper>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import PageWrapper from '~/components/common/PageWrapper.vue';
import { useCartStore } from '~/stores/cart-store';

const route = useRoute();
const store = useCartStore();
const id = route.query.source

onMounted(async () => {
  if (id) {
    await store.confirm({ source: id as string })
  }
})
</script>

<style scoped>

</style>