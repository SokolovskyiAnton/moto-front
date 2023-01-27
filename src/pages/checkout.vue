<template>
  <PageWrapper>
    <div class="mb-5 font-semibold text-2xl text-center">Checkout</div>
    <v-form
      @submit.prevent="handleSubmit"
      class="pa-5"
    >
      <v-text-field
        v-model="form.first_name"
        type="text"
        label="First name"
        :error-messages="v$.first_name.$errors[0]?.$message"
        @blur="v$.first_name.$touch"
      />

      <v-text-field
        class="mt-2"
        v-model="form.last_name"
        type="text"
        label="Last name"
        :error-messages="v$.last_name.$errors[0]?.$message"
        @blur="v$.last_name.$touch"
      />
      <v-text-field
        class="mt-2"
        v-model="form.address"
        type="text"
        label="Address"
        :error-messages="v$.address.$errors[0]?.$message"
        @blur="v$.address.$touch"
      />
      <v-text-field
        class="mt-2"
        v-model="form.country"
        type="text"
        label="Country"
        :error-messages="v$.country.$errors[0]?.$message"
        @blur="v$.country.$touch"
      />
      <v-text-field
        class="mt-2"
        v-model="form.city"
        type="text"
        label="City"
        :error-messages="v$.city.$errors[0]?.$message"
        @blur="v$.city.$touch"
      />
      <v-text-field
        class="mt-2"
        v-model="form.zip"
        type="text"
        label="Zip"
        :error-messages="v$.zip.$errors[0]?.$message"
        @blur="v$.zip.$touch"
      />
      <v-text-field
        class="mt-2"
        v-model="form.phone"
        type="text"
        label="Phone"
        :error-messages="v$.phone.$errors[0]?.$message"
        @blur="v$.phone.$touch"
      />

      <v-btn
        class="bg-red w-full mt-4"
        size='x-large'
        type="submit"
      >
        Buy now
      </v-btn>
    </v-form>
  </PageWrapper>
</template>

<script setup lang="ts">
import PageWrapper from '~/components/common/PageWrapper.vue';
import { definePageMeta, reactive } from '#imports';
import { useAuthStore } from '~/stores/auth-store';
import { useCartStore } from '~/stores/cart-store';
import { useRouter } from 'vue-router';
import { email, required } from '@vuelidate/validators';
import { useVuelidate } from '@vuelidate/core';
import { OrderProducts } from '~/stores/dto/cart.dto';

definePageMeta({
  middleware: ["auth-guard"]
})

const store = useAuthStore();
const cartStore = useCartStore();
const router = useRouter();
const form = reactive({
  first_name: store.getUser ? store.getUser.first_name : '',
  last_name: store.getUser ? store.getUser.last_name : '',
  address: '',
  country: '',
  city: '',
  zip: '',
  phone: '',
})

const rules = computed(() => {
  return {
    first_name: {
      required,
    },
    last_name: {
      required
    },
    address: {
      required,
    },
    country: {
      required
    },
    city: {
      required,
    },
    zip: {
      required
    },
    phone: {
      required,
    },
  };
});
const productList = computed<OrderProducts[]>(() => cartStore.getProductList)
const v$ = useVuelidate(rules.value, form);

async function handleSubmit() {
  if (v$.value.$invalid) {
    v$.value.$touch()
    return
  }
  const response = await cartStore.checkout({...form, products: productList.value}) as { url: string }

  window.location.replace(response.url)
}
</script>

<style scoped>

</style>