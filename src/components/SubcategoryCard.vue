<template>
  <div @click="handleClick" class="card">
    <img :src="product.desktopImages[0].url" alt="img" />
    <div class="pa-2">
      <v-row>
        <v-col cols="6">
          <div class="text-xl font-semibold">
            {{ product.title }}
          </div>
        </v-col>
        <v-col>
          <div v-if="product.oldPrice" class="flex justify-end">
            <div class="mr-2 line-through text-red">
              {{ formatCurrency(product.oldPrice) }}
            </div>
            <div>
              {{ formatCurrency(product.price) }}
            </div>
          </div>
          <div v-else class="text-right">
            {{ formatCurrency(product.price) }}
          </div>
        </v-col>
      </v-row>
      <div class="mt-2">
        Color: {{ product.color }}
      </div>
      <div class="card-footer">
        <div class="flex align-center">
          <v-icon icon="mdi-speedometer" />
          <span class="ml-2 text-sm">
            {{ product.speed }}+ MPH
          </span>
        </div>
        <div>
          <v-icon  icon="mdi-arrow-left-right" />
          <span class="ml-2 text-sm">
            {{ product.mileRange }}+ Mile range
          </span>
        </div>
      </div>
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
.card {
  max-width: 410px;
  cursor: pointer;
  width: 100%;
  height: auto;
  margin: 8px;
  background: white;border-radius: 5px;
  &-footer {
    border-top: 1px solid gray;
    margin-top: 16px;
    padding-top: 10px;
    display: flex;
    justify-content: space-between;
  }
}
</style>