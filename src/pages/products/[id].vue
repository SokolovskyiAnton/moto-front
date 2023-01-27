<template>
  <PageWrapper>
    <div class="mt-10" v-if="product">
      <v-row>
        <v-col :cols="isMobile.mobile.value ? 12 : 7">
          <v-carousel hide-delimiters>
            <v-carousel-item
              v-for="image in product.desktopImages"
              :key="image.url"
              :src="image.url"
              cover
            ></v-carousel-item>
          </v-carousel>
        </v-col>
        <v-col :cols="isMobile.mobile.value ? 12 : 5">
          <div class="font-bold text-3xl">
            {{ product.title }}
          </div>
          <div class="mt-2">
            <div v-if="product.oldPrice" class="flex">
              <div class="mr-2 line-through text-red">
                {{ formatCurrency(product.oldPrice) }}
              </div>
              <div>
                {{ formatCurrency(product.price) }}
              </div>
            </div>
            <div v-else>
              {{ formatCurrency(product.price) }}
            </div>
          </div>
          <div class="mt-2">
            Color: <span class="font-semibold"> {{ product.color }} </span>
          </div>
          <div class="mt-4">
            <v-row>
              <v-col cols="3" align-self='center'>
                <span class="font-semibold mr-2">
                  {{ product.optionsTitle }}
                </span>
              </v-col>
              <v-col cols="9" align-self='center'>
                <v-select
                  v-model="form.option"
                  variant='outlined'
                  label="Select option"
                  :items="product.options"
                  :error-messages="v$.option.$errors[0]?.$message"
                  @blur="v$.option.$touch"
                ></v-select>
              </v-col>
            </v-row>
          </div>

          <div class="mt-4">
            <div v-if="!product.isAvailable" class="mb-2 w-full bg-red-400 text-black pa-2">
              This item is already sold out.
            </div>
            <v-row>
              <v-col cols="2">
                <v-select
                  v-model="form.quantity"
                  variant='outlined'
                  hide-details
                  :items="[1, 2, 3]"
                ></v-select>
              </v-col>
              <v-col cols="10">
                <v-btn @click="addItem" class="bg-red w-full"  :disabled='!product.isAvailable' size='x-large'>ADD TO CART</v-btn>
              </v-col>
            </v-row>
          </div>
          <div class="mt-4 flex justify-around">
            <v-row>
              <v-col cols="4">
                <div class="border-r-2">
                  <div class="text-lg font-semibold">
                    {{ product.speed }}+
                  </div>
                  <div class="text-base">MPH</div>
                </div>
              </v-col>
              <v-col cols="4">
                <div class="border-r-2">
                  <div class="text-lg font-semibold">
                    {{ product.weight }} lbs
                  </div>
                  <div class="text-base">Weight</div>
                </div>
              </v-col>
              <v-col cols="4">
                <div>
                  <div class="text-lg font-semibold">
                    {{ product.mileRange }}+
                  </div>
                  <div class="text-base">Mile range</div>
                </div>
              </v-col>
            </v-row>
          </div>
        </v-col>
      </v-row>

      <hr>

      <div class="mt-5">
        <p>
          {{ product.description }}
        </p>
      </div>
    </div>
  </PageWrapper>
</template>

<script setup lang="ts">
import PageWrapper from '~/components/common/PageWrapper.vue';
import { useProductStore } from '~/stores/product-store';
import { useRoute } from 'vue-router';
import { useDisplay } from 'vuetify';
import { formatCurrency } from '~/helpers/format';
import { reactive } from '#imports';
import { useCartStore } from '~/stores/cart-store';
import { useVuelidate } from '@vuelidate/core';
import { required } from '@vuelidate/validators';


const productStore = useProductStore();
const cartStore = useCartStore();
const route = useRoute();
const isMobile = useDisplay();
const id = +route.params.id;
const form = reactive({
  option: '',
  quantity: 1
})

const rules = computed(() => {
  return {
    option: {
      required,
    },
  };
});
const v$ = useVuelidate(rules.value, form);

const product = computed(() => productStore.getProduct)

function addItem() {
  if (v$.value.$invalid) {
    v$.value.$touch()
    return
  }
  cartStore.setItem({...product.value, ...form})
}

onMounted(async () => {
  await productStore.get(id);
})
</script>

<style scoped>

</style>