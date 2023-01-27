<template>
  <PageWrapper>
    <div class="mb-5 font-semibold text-2xl text-center">Create an account</div>
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
        v-model="form.last_name"
        type="text"
        label="Second name"
        :error-messages="v$.last_name.$errors[0]?.$message"
        @blur="v$.last_name.$touch"
      />
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
      <v-text-field
        v-model="form.password_confirm"
        type="password"
        label="Confirm password"
        :error-messages="v$.password_confirm.$errors[0]?.$message"
        @blur="v$.password_confirm.$touch"
      />

      <v-btn
        class="bg-red w-full mt-4"
        size='x-large'
        type="submit"
      >
        Create
      </v-btn>
      <div class="mt-4  flex justify-center text-sm font-semibold">
        <span class="mr-2">Do you have an account ?</span>
        <router-link class='underline' to='/login'>Login</router-link>
      </div>
    </v-form>
  </PageWrapper>
</template>

<script setup lang="ts">
import PageWrapper from '~/components/common/PageWrapper.vue';
import { reactive } from '#imports';
import { required, email, sameAs } from '@vuelidate/validators';
import { useVuelidate } from '@vuelidate/core';
import { useAuthStore } from '~/stores/auth-store';
import { useRouter } from 'vue-router';

const store = useAuthStore();
const router = useRouter();
const form = reactive({
  email: '',
  password: '',
  password_confirm: '',
  first_name: '',
  last_name: ''
})

const rules = computed(() => {
  return {
    email: {
      required,
      email
    },
    password: {
      required
    },
    password_confirm: {
      sameAs: sameAs(computed(() => form.password))
    },
    first_name: {
      required
    },
    last_name: {
      required
    }
  };
});
const v$ = useVuelidate(rules.value, form);

async function handleSubmit() {
  if (v$.value.$invalid) {
    v$.value.$touch()
    return
  }
  try {
    await store.signup(form);
    await router.push({ name: 'login' })
  } catch (e) {
    console.error(e);
  }
}
</script>

<style scoped>

</style>