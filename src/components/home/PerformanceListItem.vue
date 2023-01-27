<template>
  <div class="bg p-6 w-80 min-h-full rounded-md cursor-pointer mr-5">
    <div class="text-xl font-bold">
      {{ product.title }}
    </div>
    <div class="mt-1">
      {{ formatCurrency(product.price) }}
    </div>
    <div class="mt-5">
      <img :src="product.desktopImages[0].url" alt="image">
    </div>
    <div class="flex justify-center mt-4">
      <div class="w-50">
        <div class="text-center text-xl">
          {{ product.mileRange }}+
        </div>
        <div class="text-center text-sm">Mile range</div>
      </div>
      <div class="w-50">
        <div class="text-center text-xl">
          {{ product.speed }}+
        </div>
        <div class="text-center text-sm">Speed</div>
      </div>
    </div>
    <div class="mt-3">
      <button @click="handleClick" class="w-full uppercase text-black text-sm pa-2 border border-black hover:bg-white">
        Show now
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ProductDto } from '~/stores/dto/product.dto';
import { formatCurrency } from '~/helpers/format';

const props = defineProps<{
  product: ProductDto
}>()

const router = useRouter()

function handleClick() {
  router.push(`/products/${props.product.id}`)
}
</script>

<style lang="scss" scoped>
.bg {
  background: linear-gradient(168.17deg,#141414 -16.46%,#FFFFFF 189.7%);
}
</style>