<template>
  <PageWrapper>
    <div class='text-3xl text-center'>Contact us</div>
    <v-form class='mb-8' @submit.prevent="onSubmit">
      <v-text-field class='mt-2' v-model="form.name" label='Your name'></v-text-field>
      <v-text-field class='mt-2' v-model="form.email" label='Your email'></v-text-field>
      <v-text-field class='mt-2' v-model="form.order" label='Associated Order'></v-text-field>
      <v-text-field class='mt-2' v-model="form.phone" label='Your phone'></v-text-field>
      <v-text-field class='mt-2' v-model="form.description" label='Description'></v-text-field>

      <v-btn type="submit" color='red' :loading='isLoading'>Submit</v-btn>
    </v-form>
    <v-snackbar v-model="show" location='top right' color='green'>
      We will contact you soon
    </v-snackbar>
  </PageWrapper>
</template>

<script setup lang="ts">
import PageWrapper from '~/components/common/PageWrapper.vue';

useHead({
  title: 'Lithium Customs LLC | Contact Us',
  meta: [
    { name: 'description', content: 'Lithium Customs LLC, contact us' }
  ]
})

const form = reactive({
  name: '',
  email: '',
  order: '',
  phone: '',
  description: '',
})
const isLoading = ref(false)
const show = ref(false)

function onSubmit() {
  isLoading.value = true
  setTimeout(() => {
    isLoading.value = false
    form.email = ''
    form.description = ''
    form.order = ''
    form.phone = ''
    form.name = ''
    show.value = true
  }, 1500)
}
</script>

<style scoped>

</style>