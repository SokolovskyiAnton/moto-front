<template>
  <PageWrapper>
    <v-row>
      <v-col class="pt-10 pr-5" :cols="isMobile.mobile.value ? 12 : 7">
        <div class="text-3xl font-bold">Shopping cart</div>
        <div class="mt-5 mb-5 text-base">
          {{ items.length }} items
        </div>

        <hr>

        <div>
          <div v-if="!items.length">
            <div class="mt-3 text-3xl font-semibold text-center">
              Your card is empty.
            </div>
            <div class="flex justify-center">
              <v-btn class="mt-4 bg-red w-64" size='x-large' to="/collections/bikes">SHOP BIKES</v-btn>
            </div>
          </div>
          <div v-else>
            <div class="flex max-sm:flex-col sm:justify-between mt-2" v-for="item in items" :key="item.id">
              <div class="flex">
                <img :src='item.desktopImages[0].url' alt='img' width="165" height="130">
                <div class="pa-2 text-lg font-semibold">
                  {{ item.title }}
                </div>
              </div>
              <div class="flex items-center max-sm:mt-2">
                <v-select
                  class="w-22 mr-4"
                  v-model="item.quantity"
                  variant='outlined'
                  hide-details
                  :items="[1, 2, 3]"
                ></v-select>
                <div class="mr-4">
                  {{ formatCurrency(item.price) }}
                </div>
                <span @click="removeItem(item.id)" class="rounded-full cursor-pointer w-7 h-7 bg-gray-400 flex justify-center align-center text-sm">X</span>
              </div>
            </div>
          </div>
        </div>
      </v-col>
      <v-col class="pt-10 pl-5" :cols="isMobile.mobile.value ? 12 : 5">
        <div class="flex justify-between">
          <span class="text-2xl font-semibold">
            Total:
          </span>
          <span class="text-2xl font-semibold">
            {{ formatCurrency(totalPrice) }}
          </span>
        </div>
        <v-btn @click="handleCheckout" class="mt-5 bg-red w-full" size='x-large' :disabled="!items.length">CHECKOUT</v-btn>

        <v-alert v-if="authError" class="mt-5" type="error">
          Only registered users can make purchases.
          <span>
            <router-link to='/login' class="text-black font-semibold">Click to login</router-link>
          </span>
        </v-alert>
      </v-col>
    </v-row>
  </PageWrapper>
</template>

<script setup lang="ts">
import PageWrapper from '~/components/common/PageWrapper.vue';
import { useCartStore } from '~/stores/cart-store';
import { useDisplay } from 'vuetify';
import { formatCurrency } from '~/helpers/format';
import { useAuthStore } from '~/stores/auth-store';
import { useRouter } from 'vue-router';

const cartStore = useCartStore();
const authStore = useAuthStore();
const isMobile = useDisplay();
const router = useRouter();
const authError = ref(false)

const totalPrice = computed(() => cartStore.getTotalPrice)
const items = computed(() => cartStore.getCartItems)
const isAuth = computed(() => authStore.isAuth)

function removeItem(id: number) {
  cartStore.deleteItem(id);
}

function handleCheckout() {
  if (!isAuth.value) {
    authError.value = true
    cartStore.setPurchaseKey()
    return;
  }

  router.push({ name: 'checkout' })
}
</script>

<style scoped>

</style>