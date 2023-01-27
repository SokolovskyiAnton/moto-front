<template>
  <PageWrapper>
    <div class="mb-5 font-semibold text-2xl text-center">Login to account</div>
    <v-form
      @submit.prevent="handleSubmit"
      class="pa-5"
    >
      <v-text-field
        v-model="form.email"
        type="text"
        label="E-mail"
        :error-messages="v$.email.$errors[0]?.$message"
        @blur="v$.email.$touch"
      />

      <v-text-field
        v-model="form.password"
        type="password"
        label="Password"
        :error-messages="v$.password.$errors[0]?.$message"
        @blur="v$.password.$touch"
      />

      <v-btn
        class="bg-red w-full mt-4"
        size='x-large'
        type="submit"
      >
        Login
      </v-btn>
      <div class="mt-4  flex justify-center text-sm font-semibold">
        <span class="mr-2">Don't have an account ?</span>
        <router-link class='underline' to='/register'>Create an account</router-link>
      </div>
    </v-form>
  </PageWrapper>
</template>

<script setup lang="ts">
import PageWrapper from '~/components/common/PageWrapper.vue';
import { reactive } from '#imports';
import { required, email } from '@vuelidate/validators';
import { useVuelidate } from '@vuelidate/core';
import { useAuthStore } from '~/stores/auth-store';
import { useRouter } from 'vue-router';
import { useCartStore } from '~/stores/cart-store';

const store = useAuthStore();
const cartStore = useCartStore();
const router = useRouter();
const form = reactive({
  email: '',
  password: ''
})

const rules = computed(() => {
  return {
    email: {
      required,
      email
    },
    password: {
      required
    }
  };
});
const v$ = useVuelidate(rules.value, form);
const isPurchaseFlow = computed(() => cartStore.isLoginByPurchase)
async function handleSubmit() {
  if (v$.value.$invalid) {
    v$.value.$touch()
    return
  }

  try {
    await store.login(form);
    await store.get();
    console.log(isPurchaseFlow.value);
    if (isPurchaseFlow.value) {
      await router.push({ name: 'cart' })
      return
    }
    await router.push({ name: 'profile' })
  } catch (e) {
    console.error(e);
  }
}
</script>

<style scoped>

</style>